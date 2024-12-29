function calc(op) {
    var n1 = parseFloat(document.getElementById("n1").value);
    var n2 = parseFloat(document.getElementById("n2").value);
    var result = 0;

    switch(op) {
        case '+' : result = n1 + n2;
        break;

        case '-' : result = n1 - n2;
        break;

        case '*' : result = n1 * n2;
        break;

        case '/' : result = n1 / n2;
        break;
    }

    document.getElementById("result").value = result;

}