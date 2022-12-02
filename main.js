let Canvas = document.getElementById("canvas");
let context = Canvas.getContext("2d");
let leg1 = document.querySelector(".leg1");
let leg2 = document.querySelector(".leg2");
let base = document.querySelector(".base");
let hypotenuse = document.querySelector(".hypotenuse");
let calBtn = document.querySelector("#calBtn");
let area = document.querySelector("#area");
let perimeter = document.querySelector("#perimeter");
let leg1Val = "";
let leg2Val = "";
let baseVal = "";
let hypotenuseVal = "";
colorChanger("white", "white", "white", "white");
function colorChanger(l1, l2, l3, l4) {
    //width="500"height="300"
    context.beginPath();
    context.strokeStyle = l1;
    context.lineWidth = 3;
    context.moveTo(250, 0);
    context.lineTo(0, 298);
    context.stroke();
    context.beginPath();
    context.strokeStyle = l2;
    context.lineWidth = 3;
    context.moveTo(0, 298);
    context.lineTo(500, 298);
    context.stroke();
    context.beginPath();
    context.strokeStyle = l3;
    context.lineWidth = 3;
    context.moveTo(500, 298);
    context.lineTo(250, 0);
    context.stroke();
    context.beginPath();
    context.strokeStyle = l4;
    context.lineWidth = 3;
    context.moveTo(250, 0);
    context.lineTo(250, 298);
    context.stroke();
}

leg1.addEventListener("focus", () => { colorChanger("yellow", "white", "white", "white") });
leg1.addEventListener("blur", () => colorChanger("white", "white", "white", "white"));
leg1.addEventListener("input", (e) => leg1Val = e.target.value);
leg2.addEventListener("focus", () => { colorChanger("white", "white", "yellow", "white") });
leg2.addEventListener("blur", () => colorChanger("white", "white", "white", "white"));
leg2.addEventListener("input", (e) => leg2Val = e.target.value);
base.addEventListener("focus", () => { colorChanger("white", "yellow", "white", "white") });
base.addEventListener("blur", () => colorChanger("white", "white", "white", "white"));
base.addEventListener("input", (e) => baseVal = e.target.value);
hypotenuse.addEventListener("focus", () => { colorChanger("white", "white", "white", "yellow") });
hypotenuse.addEventListener("blur", () => colorChanger("white", "white", "white", "white"));
hypotenuse.addEventListener("input", (e) => hypotenuseVal = e.target.value);

try {
    function calPerimeter() {
        leg1Val = parseFloat(leg1Val);
        leg2Val = parseFloat(leg2Val);
        baseVal = parseFloat(baseVal);
        hypotenuseVal = parseFloat(hypotenuseVal);
        let sum = leg1Val + leg2Val + baseVal;
        return sum.toString();
    }
    function calArea() {
        let product = (baseVal * hypotenuseVal) / 2;
        return product.toString();
    }
}
catch (err) {
    console.log(err);
}
calBtn.addEventListener("click", () => { area.innerHTML = calArea(); perimeter.innerHTML = calPerimeter() });