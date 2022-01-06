var screen_old = document.getElementById('screen-old');
var screen_new = document.getElementById('screen-new');
var ca = document.getElementById('caculation');
number = (num) => {

    // hiển thị số thứ nhất

    if (screen_old.innerHTML == "") {
        let numberContent = num.innerHTML;
        valueScreen = screen_old.innerHTML + numberContent;
        let formatNumber = Number(valueScreen);
        screen_old.innerHTML = formatNumber;
    } else {
        let numberContent = num.innerHTML;
        valueScreen = screen_new.innerHTML + numberContent;
        let formatNumber = Number(valueScreen);
        screen_new.innerHTML = formatNumber;
    }

}

caculation = (cacul) => {
    let caculContent = cacul.innerHTML;
    ca.innerHTML = caculContent;
}

var removeContent = () => {
    screen_old.innerHTML = "";
    screen_new.innerHTML = "";
    ca.innerHTML = "";
}
calculate = () => {
    number1 = Number(screen_old.innerHTML);
    number2 = Number(screen_new.innerHTML);
    cacula = ca.innerHTML
    switch (cacula) {
        case "+":
            {
                val = number1 + number2;
                break;
            }
        case "-":
            {
                val = number1 - number2;
                break;
            }
        case "*":
            {
                val = number1 * number2;
                break;
            }
        case "/":
            {
                val = number1 / number2;
                break;
            }
    }
    screen_old.innerHTML = val;
    screen_new.innerHTML = "";
    ca.innerHTML = "";
}