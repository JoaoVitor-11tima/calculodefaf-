const botao = document.querySelector("btn-calcular");
botao.addEventListener("click", calcularTroco);

function calcularTroco() {
    const inputPreco = document.querySelector("preco");
    const inputQuantidade = document.querySelector("quantidade");
    const inputDinheiro = document.querySelector("dinheiro");
    const paragrafoResultado = document.querySelector("resultado");

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