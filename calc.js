function calc() {
    var n1 = parseFloat(document.getElementById("n1").value);
    var n2 = parseFloat(document.getElementById("n2").value);

    var result = n1 + n2;

    document.getElementById("result").value = result;

}