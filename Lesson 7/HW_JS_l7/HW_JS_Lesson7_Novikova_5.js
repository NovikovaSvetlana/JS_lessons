function getDataFromUser(message) {
    return prompt(message);
}
        
function isNumber(n) {
    n = +n;
    if (isNaN(n)) {
        return false;
    }
    return true;
}
function numberConrolAction(n) {
    var k1 = 0;
    while (k1 == 0) {
        if (numberControl == false) {
            alert("Игра невозможна, введено не число.   Повторите ввод.")
            
            number = getDataFromUser("Повтор ввода. Введите число");
            numberControl = isNumber(number);
        }
        else {
            k1++;
        }
    }
    return number;
}
function getRandomNumber() {
    var z = Math.round(Math.random() * 100);
    return z;
}