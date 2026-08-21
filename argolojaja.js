function calcularTroco() {
    const inputPreco = document.getElementById("preco");
    const inputQuantidade = document.getElementById("quantidade");
    const inputDinheiro = document.getElementById("dinheiro");
    const paragrafoResultado = document.getElementById("resultado");

    let preco = Number(inputPreco.value);
    let quantidade = Number(inputQuantidade.value);
    let dinheiro = Number(inputDinheiro.value);

    let total = preco * quantidade;

    if (dinheiro >= total) {
        var troco = dinheiro - total;
        paragrafoResultado.textContent = "TROCO = " + troco.toFixed(2);
    } else {
        var falta = total - dinheiro;
        paragrafoResultado.textContent = "DINHEIRO INSUFICIENTE. FALTAM " + falta.toFixed(2) + " REAIS";
    }
}