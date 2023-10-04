function calculateTriangleArea() {
    const baseField = document.getElementById('triangle-base');
    const baseValueText = baseField.value;
    const base = parseFloat(baseValueText);

    const hieghtField = document.getElementById('triangle-hieght');
    const hieghtValueText = hieghtField.value;
    const hieght = parseFloat(hieghtValueText);

    if (isNaN(base) || isNaN(hieght)) {
        alert('Please Provide a Number');
        return;
    }

    const triangleArea = 0.5 * base * hieght;
    console.log(triangleArea);

    const triangleSpan = document.getElementById('triangle-area')
    triangleSpan.innerText = triangleArea;
    areaCalculator('Triangle', triangleArea);
}

function calculateRectangleArea() {
    const widthField = document.getElementById('rectangle-width');
    const widthValueText = widthField.value;
    const width = parseFloat(widthValueText);

    const lengthField = document.getElementById('rectangle-length');
    const lengthValueText = lengthField.value;
    const length = parseFloat(lengthValueText);

    if (isNaN(width) || isNaN(length)) {
        alert('Please Provide a Number');
        return;
    }

    const rectangleArea = width * length;

    const rectangleSpan = document.getElementById('rectangle-area')
    rectangleSpan.innerText = rectangleArea;
    areaCalculator('Rectangle', rectangleArea);
}


function calculatePerallelogamArea() {
    const base = getInputValue('perallelogam-base');
    const hieght = getInputValue('perallelogam-hieght');

    if (isNaN(base) || isNaN(hieght)) {
        alert('Please Provide a Number');
        return;
    }

    const area = base * hieght;

    setElementInnerText('perallelogam-area', area);

    areaCalculator('Perallelogam', area);

}

function calculateEllipseArea() {
    const majorRedius = getInputValue('ellipse-first-redius');
    const minorRedius = getInputValue('ellipse-second-redius');

    if (isNaN(majorRedius) || isNaN(minorRedius)) {
        alert('Please Provide a Number');
        return;
    }

    const area = 3.14 * majorRedius * minorRedius;
    const areaTwoDecimal = area.toFixed(2);
    setElementInnerText('ellipse-area', areaTwoDecimal);
    areaCalculator('Ellipse', areaTwoDecimal);
}




function getInputValue(fieldId) {
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}

function setElementInnerText(elementId, area) {
    const elemen = document.getElementById(elementId);
    elemen.innerText = area;
}

function areaCalculator(areaType, area) {
    console.log(areaType + ' ' + area);
    const calculationEntry = document.getElementById('calculation-entry');

    const count = calculationEntry.childElementCount;


    const p = document.createElement('p');
    p.classList.add('mt-4');
    p.innerHTML = `${count +1}.  ${areaType} ${area} cm<sup>2</sup> <button class="btn btn-sm btn-success">Convert</button>`;
    calculationEntry.appendChild(p)
}