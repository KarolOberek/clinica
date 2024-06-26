console.log("Selecione uma das opções: ");
console.log("opção (1): Adicionar uma nova consulta");
console.log("opção (2): Listar todas as consultas");
console.log("opção (3): Atualizar uma consulta existente");
console.log("opção (4): Cancelar uma consulta");

let opcao
let consultas = []
let consulta = {
    nome_paciente: "",
    medico: "",
    hora: "",
    data: ""
}
function mostrarMenu() {
    console.log("\nSelecione uma das opções: ");
    console.log("opção (1): Adicionar uma nova consulta");
    console.log("opção (2): Listar todas as consultas");
    console.log("opção (3): Atualizar uma consulta existente");
    console.log("opção (4): Cancelar uma consulta");
}
process.stdin.on("data", function (data){
    let entrada = data.toString().trim()
if(!opcao){
    opcao = entrada
  if(opcao == "1"){
    console.log("Já que deseja adicionar uma nova consulta, precisarei das seguintes informações:")
    console.log("Qual o nome do paciente?")

  } else if (opcao == "3"){
        console.log("Qual o nome do paciente que deseja excuir? ")
    }

} else if(opcao == "1"){
    if (!consulta.nome_paciente){
        consulta.nome_paciente = entrada
        console.log("Qual será o médico que vai atender o paciente?")
    } else if (!consulta.medico){
        consulta.medico = entrada
        console.log("Qual o horário da consulta?")
    } else if (!consulta.hora){
        consulta.hora = entrada
        console.log("Qual vai ser o dia da consulta? (dia e mês apenas)")
    } else if (!consulta.data){
        consulta.data = entrada
        consultas.push(consulta)
        opcao = undefined; 
        console.log("Consulta marcada com sucesso! ")
        console.log("Caso queira continuar com o processo escolha uma das opções abaixo, caso não, digite sair")
        mostrarMenu()
    } 
} else if(opcao == "2"){
    console.log(consultas)
    opcao = undefined
    console.log("Caso queira continuar com o processo escolha uma das opções já fornecidas anteriormente, caso não, digite sair")
} else if(opcao == "3"){
    let consulta_indice = -1;
    for (let i = 0; i < consultas.length; i++) {
      if (consultas[i].nome_paciente === entrada) {
        consulta_indice = i;
        break;
      }
    }

    if (consulta_indice !== -1) {
      let consultaEncontrada = consultas[consulta_indice];
      console.log("Consulta encontrada. Informe os novos dados.");
      console.log("Qual o novo nome do paciente?");
      process.stdin.once("data", function (novoNome) {
        consultaEncontrada.nome_paciente = novoNome.toString().trim();
        console.log("Qual o novo médico?");
        process.stdin.once("data", function (novoMedico) {
          consultaEncontrada.medico = novoMedico.toString().trim();
          console.log("Qual o novo horário?");
          process.stdin.once("data", function (novoHorario) {
            consultaEncontrada.hora = novoHorario.toString().trim();
            console.log("Qual a nova data? (dia e mês apenas)");
            process.stdin.once("data", function (novaData) {
              consultaEncontrada.data = novaData.toString().trim();
              consultas[consulta_indice] = consultaEncontrada;
              console.log("Consulta atualizada com sucesso!");
              opcao = undefined;
              mostrarMenu();
            });
          });
        });
      });
    } else {
        console.log("Dado não encontrado")
        opcao = undefined
        mostrarMenu()
    }
} else if(opcao == "4"){
    console.log("4")

} else if(opcao == "sair"){
    console.log("Encerrando o processo..")
    process.exit()
}else {
    console.log("Digite uma opção válida: ")
    mostrarMenu()
    opcao = undefined
}
})