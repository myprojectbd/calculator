

function calculator(NewValue) {
    document.getElementById("screen").value += NewValue;
   

}
function deleteMe() {
    document.getElementById("screen").value = " ";
}
function Answer() {
    const a = document.getElementById("screen").value;
    const b = eval(a);
    document.getElementById("screen").value = b;
}