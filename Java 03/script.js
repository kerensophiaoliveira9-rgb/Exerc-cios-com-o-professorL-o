function adicionarTarefa() {

    let inputTarefa = document.getElementById("inputTarefa")
    let tarefa = inputTarefa.value.trim()
    
    if(tarefa == "") {
          let mensagemErro = "Digite uma tarefa para adicioná-la a sua lista!"
          mensagem.textContent = mensagemErro
    } else {
let mensagem ="Tarefa adicionada com sucesso!";

    document.getElementById("mensagem").textContent = mensagem;

    let listaTarefas= document.getElementById("listaTarefas")
    let novatarefa = document.createElement("li")

    novatarefa.textContent = tarefa

    listaTarefas.appendChild(novatarefa)

    }

    inputTarefa.value = ""
}
