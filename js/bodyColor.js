var body = document.querySelector("body");
var SliderRadioElements = document.querySelectorAll('.slider-radio');
var firstBodyColor = '#849d8f';
var secondBodyColor = '#8996A6';
var thirdBodyColor = '#9D8B84';


var onFirstRadioClick = function () {
    body.style.backgroundColor = firstBodyColor;
};

var onSecondRadioClick = function () {
    body.style.backgroundColor = secondBodyColor;
};

var onThirdRadioClick = function () {
    body.style.backgroundColor = thirdBodyColor;
};


SliderRadioElements.forEach(function(radio) {
    if (radio.id === "product-1") {
        radio.addEventListener('change', onFirstRadioClick);
    } else if (radio.id === "product-2") {
        radio.addEventListener('change', onSecondRadioClick);
    } else {
        radio.addEventListener('change', onThirdRadioClick);
    }
})
