function validarFormulario(event) {
    event.preventDefault(); // Impedir a ação padrão do formulário

    var nome = document.forms["cadastro"]["nome"].value;
    var matricula = document.forms["cadastro"]["matricula"].value;
    var cpf = document.forms["cadastro"]["cpf"].value;
    var email = document.forms["cadastro"]["email"].value;
    var turma = document.forms["cadastro"]["turma"].value;

    // Validar se os campos obrigatórios estão preenchidos
    if (nome === "" || matricula === "" || cpf === "" || email === "" || turma === "") {
        alert("Todos os campos obrigatórios devem ser preenchidos.");
        return false;
    }

    // Validar o formato do CPF
    var cpfPattern = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    if (!cpf.match(cpfPattern)) {
        alert("O CPF deve estar no formato XXX.XXX.XXX-XX.");
        return false;
    }

    // Validar o formato do email
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email.match(emailPattern)) {
        alert("O email deve estar em um formato válido.");
        return false;
    }

    // Se todos os campos estiverem corretos, salvar as informações localmente
    salvarInformacoesLocalmente();
}

function salvarInformacoesLocalmente() {
    var nome = document.forms["cadastro"]["nome"].value;
    var matricula = document.forms["cadastro"]["matricula"].value;
    var cpf = document.forms["cadastro"]["cpf"].value;
    var email = document.forms["cadastro"]["email"].value;
    var turma = document.forms["cadastro"]["turma"].value;

    // Salvar as informações localmente (por exemplo, no LocalStorage)
    var cadastro = {
        nome: nome,
        matricula: matricula,
        cpf: cpf,
        email: email,
        turma: turma
    };

    // Converter o objeto para uma string JSON
    var cadastroJSON = JSON.stringify(cadastro);

    // Armazenar os dados localmente
    localStorage.setItem("cadastro", cadastroJSON);

    // Exibir uma mensagem de inscrição bem-sucedida
    alert("Inscrição efetuada com sucesso");
}

// Verificar se já existe a chave "total_inscritos" no Local Storage
if (localStorage.getItem("total_inscritos") === null) {
    // Se não existir, criar a chave "total_inscritos" com valor inicial 0
    localStorage.setItem("total_inscritos", 0);
}

// Ao efetuar uma nova inscrição, aumentar o valor da chave "total_inscritos" em 1
var totalInscritos = parseInt(localStorage.getItem("total_inscritos"));
totalInscritos = isNaN(totalInscritos) ? 0 : totalInscritos;
totalInscritos++;
localStorage.setItem("total_inscritos", totalInscritos);

// Para recuperar o número total de inscritos:
var numeroTotalInscritos = localStorage.getItem("total_inscritos");

console.log("Número total de inscritos: " + numeroTotalInscritos);