{
const calculateResult = (currency, amount) => {
    const EUR = 4.6530;
    const GBP = 5.4545;
    const USD = 4.5046;
    const CHF = 4.7685;

    switch (currency) {
        case "EUR":
            return amount * EUR;
        case "GBP":
            return amount * GBP;
        case "USD":
            return amount * USD;
        case "CHF":
            return amount * CHF;

    };
};

const updateResultText = (amount, result, currency) => {
    const formResult = document.querySelector(".js-formResult");
    formResult.innerText = result.toFixed(2);
};

const onFormSubmit = (event) => {
    event.preventDefault();

const formAmount = document.querySelector(".js-formAmount");
const formValue = document.querySelector(".js-formValue");

const amount = +formAmount.value;
const currency = formValue.value;

const result = calculateResult(currency, amount);

updateResultText(amount, result, currency);

};

const init = () => {
    const form = document.querySelector(".js-form");
    form.addEventListener("submit", onFormSubmit);
};

init();

};