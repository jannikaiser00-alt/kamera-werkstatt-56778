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
  for (const s of [Math.ceil(Math.max(50,f+1)/10)*10, 550,2200,3000,8000,10160,Math.floor(H/10)*10,Math.ceil(H/10)*10,Math.ceil(H/10)*10+10]) {
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
// Exercise the actual UI calculation and formatted outputs across the preview range.
for (const [f,n] of [[85,1.8],[35,4],[24,8],[100,4]]) {
  element('focal').value=f; element('aperture').value=n;
  const H=f+f*f/(n*.029);
  for(let i=0;i<=1000;i++){
    const min=Math.ceil(Math.max(50,f+1)/10)*10;
    const s=Math.round((min+(10160-min)*i/1000)/10)*10;
    element('distance').value=s/1000;
    vm.runInContext('calculate()',context);
    // Independent image-plane intersection at the permitted blur diameter.
    const v=f*s/(s-f), diameter=f/n;
    const near=1/(1/f-(1-.029/diameter)/v)/1000;
    const far=s>=H ? Infinity : 1/(1/f-(1+.029/diameter)/v)/1000;
    const total=far-near, precise=Number.isFinite(total)&&total<.01;
    const format=x=>vm.runInContext('fmt('+x+',2,'+precise+')',context);
    assert.equal(element('near-value').textContent,format(near));
    assert.equal(element('far-value').textContent,format(far));
    assert.equal(element('dof-value').textContent,vm.runInContext('fmt('+total+')',context));
    assert.equal(element('hyper-value').textContent,vm.runInContext('fmt('+H/1000+')',context));
  }
}
element('focal').value=100; element('aperture').value=4; element('distance').value=6.88;
vm.runInContext('calculate()',context);
console.log('Screenshot at 6.88 m:',Object.fromEntries(['near-value','far-value','dof-value','hyper-value'].map(id=>[id,element(id).textContent])));
console.log('4004 additional UI-output comparisons passed.');
