// Conversion rates
const rates = {
    "M2": 1,
    "Sao": 360,
    "Mau": 3600,
    "Hecta": 3600
};

document.querySelector('.btn button').addEventListener('click', function() {
    const fromInput = document.querySelector('.input.one').value;
    const fromSelect = document.querySelector('#from').value;
    const toSelect = document.querySelector('#to').value;

    if (fromInput !== '' && !isNaN(fromInput)) {
        const fromM2 = fromInput * rates[fromSelect];
        const toValue = fromM2 / rates[toSelect];
        document.querySelector('.input.two').value = toValue;
    }
});