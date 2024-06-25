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

} else if(opcao == "1" || opcao == 1){
    
    if (!consulta.nome_paciente){
        console.log("Já que deseja adicionar uma nova consulta, precisarei das seguintes informações: ")
        console.log("Qual o nome do paciente?")
        consulta.nome_paciente = entrada
        
    } else if (!consulta.medico){
        console.log("Qual será o médico que vai atender o paciente?")
        consulta.medico = entrada

    } else if (!consulta.hora){
        console.log("Qual o horário da consulta? ")
        consulta.hora = entrada

    } else if (!consulta.data){
        console.log("Qual vai ser o dia da consulta? (dia e mês apenas)")
        consulta.data = entrada
    
    } else {
        consultas.push(consulta)
        opcao = undefined; 
        console.log("Consulta marcada com sucesso! ")
        console.log("Caso queira continuar com o processo escolha uma das opções abaixo, caso não, digite sair")
        console.log("opcão (1): Adicionar uma nova consulta")
        console.log("opcão (2):Listar todas as consultas")
        console.log("opcão (3):Atualizar uma consulta existente")
        console.log("opcão (4):Cancelar uma consulta")

    }

} else if(opcao == "2" || opcao == 2){
    console.log(consultas)

} else if(opcao == "3" || opcao == 3){
    console.log("3")

} else if(opcao == "4" || opcao == 4){
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