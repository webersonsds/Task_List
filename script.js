
const button = document.querySelector(".button-task")
const input = document.querySelector(".input-task")

const listaCompleta = document.querySelector(".list-tesks")

let minhaListaIntens = []

function adicionaNovaTarefa() {
    minhaListaIntens.push({
        tarefa: input.value,
        concluida: false
    })

    input.value = ""

    mostrarTarefas()


}
function mostrarTarefas() {

    let novaLi = ''

    minhaListaIntens.forEach((item, index) => {

        novaLi = novaLi + ` 
        
        <li class="task ${item.concluida && "done"}">
              <img src="./img/checked.png" onclick="concluirTarefa(${index})")>
                 <p>${item.tarefa}</p>
               <img src="./img//trash.png" onclick="detetarIten(${index})">
         </li>
`
    })

    listaCompleta.innerHTML = novaLi


    localStorage.setItem('lista', JSON.stringify(minhaListaIntens))
}

function concluirTarefa(index) {

    minhaListaIntens[index].concluida = !minhaListaIntens[index].concluida

    mostrarTarefas()
}


function detetarIten(index) {
    minhaListaIntens.splice(index, 1)

    mostrarTarefas()
}
function recarregarTarefas() {
    const tarefasDoLocalStorage = localStorage.getItem('lista')

    if (tarefasDoLocalStorage) {
        minhaListaIntens = JSON.parse(tarefasDoLocalStorage)
    }

    mostrarTarefas()

}

recarregarTarefas()

button.addEventListener('click', adicionaNovaTarefa)