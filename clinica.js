function mostrarMenu() {
    console.log("\nSelecione uma das opções: ");
    console.log("opção (1): Adicionar uma nova consulta");
    console.log("opção (2): Listar todas as consultas");
    console.log("opção (3): Cancelar uma consulta");
    console.log("opção (4): Atualizar uma consulta existente");
}
let opcao
let consultas = []
let consulta = {
    nome_paciente: "",
    medico: "",
    hora: "",
    data: ""
}
mostrarMenu()

process.stdin.on("data", function (data){
    let entrada = data.toString().trim()
if(!opcao){
    opcao = entrada
  if(opcao == "1"){
    console.log("Já que deseja adicionar uma nova consulta, precisarei das seguintes informações:")
    console.log("Qual o nome do paciente?")

  } else if (opcao == "3"){
    console.log("Qual consulta você quer remover? (digite o índice)")
    console.log(consultas)
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
        consulta = {}
        opcao = undefined
        console.log("Consulta marcada com sucesso! ")
        console.log("Caso queira continuar com o processo escolha uma das opções abaixo, caso não, digite sair")
        mostrarMenu()
    } 
} else if(opcao == "2"){
    console.log("Consultas existentes: \n")
    console.log(consultas)
    console.log("Caso queira continuar com o processo escolha uma das opções abaixo, caso não, digite sair")
    mostrarMenu()
    opcao = undefined

} else if(opcao == "3"){
   
    console.log(consultas)
    let indice_remocao = entrada
    consultas[indice_remocao].removido = true
    console.log("Remoção feita com sucesso!!")
    mostrarMenu()
    opcao = undefined


} else if(opcao == "4"){
    consulta_indice = -1
    for (let i = 0; i < consultas.length; i ++){
        if (!(consultas[i].nome_paciente === entrada))
            nome_paciente = entrada
    }


} else if(opcao.toLowerCase == "sair"){
    console.log("Encerrando o processo..")
    process.exit()
}else {
    console.log("Digite uma opção válida: ")
    mostrarMenu()
    opcao = undefined
}
})