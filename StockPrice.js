function randomStockValueGenerator(){
    const randomNumber1 = Math.floor(Math.random() * 100000) + 1;

    const numberElement1 = document.getElementById("stock-1");
    numberElement1.textContent = '₹' + randomNumber1;

    const randomNumber2 = Math.floor(Math.random() * 100000) + 1;

    const numberElement2 = document.getElementById("stock-2");
    numberElement2.textContent = '₹' + randomNumber2;

    const randomNumber3 = Math.floor(Math.random() * 100000) + 1;

    const numberElement3 = document.getElementById("stock-3");
    numberElement3.textContent = '₹' + randomNumber3;

    const randomNumber4 = Math.floor(Math.random() * 100000) + 1;

    const numberElement4 = document.getElementById("stock-4");
    numberElement4.textContent = '₹' + randomNumber4;

    const randomNumber5 = Math.floor(Math.random() * 100000) + 1;

    const numberElement5 = document.getElementById("stock-5");
    numberElement5.textContent = '₹' + randomNumber5;
}

randomStockValueGenerator();

setInterval(randomStockValueGenerator, 2000);
