function calc() {
    let num01 = new Number(document.getElementById("textNum01").value);
    let num02 = new Number(document.getElementById("textNum02").value);
    let op = document.getElementById("operator").value;

    let output;
    switch (op) {
        case "+":
            output = num01+num02;
            break;
        case "-":
            output = num01-num02;
            break;
        case "*":
            output = num01*num02;
            break;
        case "/":
            output = num01/num02;
            break;
        default:
            output = "Invalid operation";
            break;
    }
    document.getElementById("output").innerHTML = "Answer = "+output;
}