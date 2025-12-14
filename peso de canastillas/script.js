function calcular() {
    const pesoBruto = parseFloat(document.getElementById('pesoBruto').value) || 0;
    const canBase = parseInt(document.getElementById('canBase').value) || 0;
    const canPeq = parseInt(document.getElementById('canPeq').value) || 0;
    const canGra = parseInt(document.getElementById('canGra').value) || 0;

    const pesoBase = canBase * 1.8;
    const pesoPeq = canPeq * 1.9;
    const pesoGra = canGra * 2.2;

    const taraTotal = pesoBase + pesoPeq + pesoGra;
    const pesoNeto = pesoBruto - taraTotal;

    const resultado = document.getElementById('resultado');
    resultado.style.display = 'block';

    if (pesoNeto < 0) {
        resultado.innerHTML = `<p style="color:red"><strong>Error:</strong> La tara es mayor que el peso bruto</p>`;
        return;
    }

    resultado.innerHTML = `
        <p><strong>Tara total:</strong> ${taraTotal.toFixed(2)} kg</p>
        <p><strong>Peso neto del producto:</strong> ${pesoNeto.toFixed(2)} kg</p>
    `;
}
