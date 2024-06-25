console.log("Selecione uma das opções: ")
console.log("opcão (1): Adicionar uma nova consulta")
console.log("opcão (2):Listar todas as consultas")
console.log("opcão (3):Atualizar uma consulta existente")
console.log("opcão (4):Cancelar uma consulta")

let opcao
let consultas = []

let consulta = {
    nome_paciente: "",
    medico: "",
    hora: "",
    data: ""
}

process.stdin.on("data", function (data){
    let entrada = data.toString().trim()
if(!opcao){
    opcao = entrada

  if(opcao == "1"){
    console.log("Já que deseja adicionar uma nova consulta, precisarei das seguintes informações:")
    console.log("Qual o nome do paciente?")
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
        console.log("Caso queira continuar com o processo escolha uma das opções já fornecidas anteriormente, caso não, digite sair")
    
    } 

} else if(opcao == "2"){
    console.log(consultas)
    opcao = undefined
    console.log("Caso queira continuar com o processo escolha uma das opções já fornecidas anteriormente, caso não, digite sair")

} else if(opcao == "3"){
    console.log("3")

} else if(opcao == "4"){
    console.log("4")

} else if(opcao == "sair"){
    console.log("Encerrando o processo..")
    process.exit()
}else {
    console.log("Digite uma opção válida: ")
    console.log("opcão (1): Adicionar uma nova consulta")
    console.log("opcão (2):Listar todas as consultas")
    console.log("opcão (3):Atualizar uma consulta existente")
    console.log("opcão (4):Cancelar uma consulta")
    opcao = undefined
}
})