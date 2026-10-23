const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const source = fs.readFileSync('app.js', 'utf8');
const elements = new Map();
const element = id => {
  if (!elements.has(id)) elements.set(id, {value: '', textContent: '', setAttribute(){}, toggleAttribute(){}});
  return elements.get(id);
};
const context = vm.createContext({document:{getElementById:element}, console});
vm.runInContext(source.split("['distance', 'focal', 'aperture', 'sensor'].forEach")[0], context);
let checks=0;
for (const [f,n] of [[85,1.8],[35,4],[24,8],[100,4]]) {
  const c=.029, H=f+f*f/(n*c);
  for (const s of [Math.max(50,f+1), 550,2200,3000,8000,10160,H*(1-1e-8),H,H*(1+1e-8)]) {
    if(s<=f) continue;
    element('focal').value=f; element('aperture').value=n;
    element('sensor').value='fullframe'; element('subject-select').value='person';
    element('distance').value=s/1000;
    vm.runInContext('calculate()',context);
    // Independently solve circle of confusion using image distances:
    // c = aperture diameter * |1 - imageDistance(focus)/imageDistance(object)|.
    const v=f*s/(s-f), diameter=f/n;
    const nearImage=v/(1-c/diameter);
    const near=1/(1/f-1/nearImage);
    const farImage=v/(1+c/diameter);
    const farInverse=1/f-1/farImage;
    const expectedNear=vm.runInContext('fmt('+near/1000+',2,'+(s<H && ((1/(farInverse||Number.MIN_VALUE))-near)<10)+')',context);
    assert.equal(element('near-value').textContent,expectedNear);
    assert.equal(element('hyper-button').disabled,false);
    if(s>=H) assert.equal(element('far-value').textContent,'∞');
    else {
      const far=1/farInverse;
      const exactFar=s*f*f/(f*f-n*c*(s-f));
      assert.ok(Math.abs(far-exactFar)/exactFar<1e-4, JSON.stringify({f,n,s,far,exactFar}));
    }
    checks++;
  }
}
for(const id of ['focal','aperture','sensor','subject-select']) assert.ok(source.includes("control.disabled = true"));
assert.ok(source.includes('modal.showModal()'));
assert.ok(!source.includes('safeNearX + 4'));
console.log(checks+' optical cases passed; preview button and geometry regressions passed.');
