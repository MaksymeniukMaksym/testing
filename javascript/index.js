
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const operations = ['+', '*', '-', '/'];

function dis(val) {
    document.getElementById("result").value += val
}

var cal = document.getElementById("calcu");
cal.onkeyup = function (event) {
    if (event.keyCode === 13) {
        console.log("Enter");
        let x = document.getElementById("result").value
        console.log(x);
        solve();
    }
}

function solve() {
    let equation = document.getElementById("result").value
    let result = math.evaluate(equation)
    console.log(result)
    document.getElementById("result").value = result || 0;

    ;
}

function clr() {
    document.getElementById("result").value = ""
}


module.exports = {
    dis,
    solve,
    clr,
}