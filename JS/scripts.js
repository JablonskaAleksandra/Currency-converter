{
const form = document.querySelector(".js-form");
const formAmount = document.querySelector(".js-formAmount");
const formResult = document.querySelector(".js-formResult");
const formValue = document.querySelector(".js-formValue");

const EUR = 4.6530;
const GBP = 5.4545;
const USD = 4.5046;
const CHF = 4.7685;

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const amount = formAmount.value;
    const currency = formValue.value;
    let result = formResult.value;

    switch (currency) {
        case "EUR":
            result = amount * EUR;
            break;
        case "GBP":
            result = amount * GBP;
            break;
        case "USD":
            result = amount * USD;
            break;
        case "CHF":
            result = amount * CHF;
            break;
    };

    formResult.innerText = result.toFixed(2);
})
}
