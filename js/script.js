//*variables ===================================




//* DOM ========================================
var displayEl = document.getElementById('number');
var addBtnEl = document.getElementById('add');
var inputEl = document.getElementById('input');
var minusBtnEl = document.getElementById('minus');

//* Event =======================================
addBtnEl.addEventListener('click', function() {
    console.log('add clicked', inputEl.value.length);
    if (!inputEl.value.length) {
        return;
    }
    let result = parseInt(displayEl.textContent) + parseInt(inputEl.value);
    if (result >= 0 && parseInt(displayEl.textContent) < 0) {
        console.log('remove red');
        displayEl.classList.remove('red');
    } 
    console.log(result);
    displayEl.textContent = "";
    displayEl.textContent = result;
});

minusBtnEl.addEventListener('click', function() {
    console.log('minus clicked', );
    if (!inputEl.value.length) {
        return;
    }
    let result = parseInt(displayEl.textContent) - parseInt(inputEl.value);
    if (result < 0 && parseInt(displayEl.textContent) >= 0) {
        console.log('add red');
        displayEl.classList.add('red');
    } 
    displayEl.textContent ="";
    displayEl.textContent = result;
});





//* function ======================================
