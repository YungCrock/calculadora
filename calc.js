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

    var newHistory = "<div>" + n1 + " " + op + " " + n2 + " = " + result + "</div>";
    var history = document.getElementById("history");

    history.innerHTML = newHistory + history.innerHTML;

    if(history.children.length > 10) {
        history.removeChild(history.childNodes[10]);
    }

}