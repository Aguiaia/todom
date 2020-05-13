let tarefas = [{
        id: 1,
        texto: "Escovar os dentes",
        prioridade: 3,
        feito: true
    },
    {
        id: 2,
        texto: "Dormir",
        prioridade: 3,
        feito: true
    },
    {
        id: 3,
        texto: "Estudar",
        prioridade: 1,
        feito: false
    },
    {
        id: 4,
        texto: "Ler",
        prioridade: 2,
        feito: false
    }
]

const render = (tarefas) => {

    // Capturar o elemento que contém a lista de tarefas
    let table = document.getElementById("table");

    // Alternativa para o document.getElementById("table");
    // table = document.querySelector(".azul div");

    // Limpar a lista
    table.innerHTML = "";
    // Essa tag tem um irmãozinho que é o textContent, o qual não processa HTML. 
    // Temos também o innerText.

    // Criando a lista de tarefas
    for (const tarefa of tarefas) {

        // Criando
        let row = document.createElement('tr');

        // Criar o input checkbox
        let checkbox = document.createElement('input');
        checkbox.setAttribute("type", "checkbox");

        // Criar a célula que vai conter o checkbox
        let tdCheck = document.createElement('td');
        tdCheck.appendChild(checkbox);

        // Adicionar esse tdCheckbox à row
        row.appendChild(tdCheck)

        // Criar a td de texto
        let tdTexto = document.createElement('td');
        tdTexto.innerText = tarefa.texto;
        row.appendChild(tdTexto);

        // Criar td de ações
        let tdAcoes = document.createElement('td');
        let i = document.createElement('i');
        i.className = "material-icons";
        i.innerText = "delete";
        tdAcoes.appendChild(i);
        row.appendChild(tdAcoes);

        // Adicionar conteúdo dessa linha
        table.appendChild(row);
    }
}

// Criar função create (texto, prioridade) que recebe um texto  e prioridade como parâmetros
// Essa função deve retornar um objeto literal com os seguintes campos
// texto: com o texto passado por parâmetro
// prioridade: com base no texto passado por parâmetro
// feito: false
const create = (texto, prioridade) => {
    let tarefa = {
        texto,
        prioridade,
        feito: false
    }
}


let form = document.getElementById('form'); //Capturar o form
// FORMA 1 = = = = = = = = = = = = = = = 
// form.onsubmit = () => (evt) => {
//     evt.prevetDefault("teste");
// }

// FORMA 2 = = = = = = = = = = = = = = =
form.addEventListener('submit', () => {
    evt.prevetDefault("teste");
    console.log("teste");
});

render(tarefas);