function calcularIdade() {
    let idade = document.getElementById("idadeCachorro").value;
    let resultado = document.getElementById("resultado");
    let idadeHumana = idade * 7;
    resultado.innerText = `A idade equivalente em anos humanos é: ${idadeHumana} anos.`;
}
