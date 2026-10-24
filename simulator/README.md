# Schärfentiefe Studio

Independent German depth-of-field teaching app. Open [the published simulator](https://jannikaiser00-alt.github.io/kamera-werkstatt-56778/simulator/).

`index.html` is a self-contained application with original canvas illustrations, no external dependencies or analytics. Existing calculator files remain unchanged.

Features: sensor/focal length/aperture/focus/background controls, illustrated preview, ten bokeh shapes, portrait/landscape/video, diffraction, teleconverters and simplified anamorphic view, hyperfocal focusing, framing lock, drag distance diagram, metric/imperial units, print/pixel/custom circle of confusion, saved comparisons, shareable URL and PNG export.

## Calculation

Distances are in mm internally. H=f²/(N*c)+f. Near=s*(H-f)/(H+s-2f). Far=s*(H-f)/(H-s), or infinity at s>=H. Background blur=f²*abs(z-s)/(N*z*(s-f)). Default c=sensor diagonal/1500. Diffraction uses a 550 nm Airy diameter and quadratic combination as an approximation.

17 test groups passed, including an independent reference case, hyperfocal boundary, converters, image orientation, diffraction and 240 extreme combinations. Browser checks included input updates, saving, framing lock, units, hyperfocal, diffraction limit, portrait and 390px mobile layout.

Reference: 85mm f/1.4, focus 3m, c=0.029mm gives near=2.951650534m, far=3.049959819m, total=9.830928495cm, background blur at infinity=1.770399412mm.

## Scope

This is not the original dofsimulator.net application. No original code, images or branding were copied. The app uses original illustrations rather than photographs, two verified camera presets and generic lens presets rather than the full original databases. Other cameras can be entered by sensor dimensions. There is no lens mount compatibility database or lens-specific Fourier/PSF simulation. Bokeh and image blur are illustrative, not a prediction of a particular lens. The UI help explains optical assumptions and limitations.

Sensor references: [Nikon Z50II](https://www.nikonusa.com/p/z50ii/1788/overview), [Fujifilm X-T50](https://fujifilm-dsc.com/en/manual/x-t50/technical_notes/spec/index.html).
