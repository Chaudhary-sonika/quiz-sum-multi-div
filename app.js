var inputA = document.querySelector("#input1");
var inputB = document.querySelector("#input2");
var btnSum = document.querySelector("#sum");
var btnSub = document.querySelector("#sub");
var btnMulti = document.querySelector("#multi");
var btnDiv = document.querySelector("#divide");
var output = document.querySelector(".output");

function calSum() {
  var sum = Number(inputA.value) + Number(inputB.value);
//   output.style.display = "block";
  output.innerHTML = sum;
  console.log("working");
};
function calSub() {
    var sub = Number(inputA.value) - Number(inputB.value); 
console.log("working");
output.innerHTML = sub;
}
function calMulti() {
    var multi = Number(inputA.value) * Number(inputB.value);
    output.innerHTML = multi;
}
function calDiv() {
    var divide = Number(inputA.value) / Number(inputB.value);
    output.innerHTML = divide;
}

btnSum.addEventListener("click", calSum);
btnSub.addEventListener("click", calSub);
btnMulti.addEventListener("click", calMulti);
btnDiv.addEventListener("click", calDiv);