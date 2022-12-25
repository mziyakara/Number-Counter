let number = 1;
document.querySelector("#stop").disabled = true;
document.querySelector("#pause").disabled = true;

startCount = () => {
    document.querySelector("#start").disabled = true;
    document.querySelector("#stop").disabled = false;
    document.querySelector("#pause").disabled = false;
    function myLoop() {
        loopTimeOut = setTimeout(function () {
            document.querySelector(".number").innerHTML = number;
            number++;
            if (number <= 1000000000) {
                myLoop();
            }
        }, 1);
    }

    myLoop();
};

stopCount = () => {
    document.querySelector("#start").disabled = false;
    document.querySelector("#stop").disabled = true;
    document.querySelector("#pause").disabled = true;
    clearTimeout(loopTimeOut);
    document.querySelector(".number").innerHTML = 0;
    number = 0;
};

pauseCount = () => {
    document.querySelector("#pause").disabled = true;
    clearTimeout(loopTimeOut);
    number = document.querySelector(".number").innerHTML;
    document.querySelector("#start").disabled = false;
};
