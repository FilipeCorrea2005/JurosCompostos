document.getElementById('calculate').addEventListener('click', function() {
    const value = parseFloat(document.getElementById('value').value);
    const aporte = parseFloat(document.getElementById('aporte').value);
    const fee = parseFloat(document.getElementById('fee').value) / 100;
    const time = parseInt(document.getElementById('time').value);

    // Verificar se todos os campos têm valores válidos
    if (isNaN(value) || isNaN(aporte) || isNaN(fee) || isNaN(time) || value <= 0 || aporte < 0 || fee < 0 || time <= 0) {
        alert('Por favor, preencha todos os campos corretamente.');
        return;
    }


    let total = value * (1 + fee) ** time;
    if (time > 1) { 
        total += aporte * (((1 + fee) ** (time - 1) - 1) / fee);
    }

    document.getElementById('total').innerHTML = "R$ " + total.toFixed(2).replace('.', ',');
});
