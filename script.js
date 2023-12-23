// Carne - 400g por pessoa + de 6 horas - 650
// Cerveja - 1200ml por pessoa + 6 horas - 2000ml
// Refri/água = 1000ml por pessoa + 6 horas 1500ml
// Crianças valem por 0,5

let InputAdultos = document.querySelector('.InputAdultos')
let InputCrianças = document.querySelector('.InputCrianças')
let Duração = document.querySelector('.Duração')
let ButtonCalc = document.querySelector('.ButtonCalc')
let Result = document.querySelector('.Resultados')

ButtonCalc.addEventListener('click', () => {
    // Valores dos inputs
    var adultos = InputAdultos.value
    var criancas = InputCrianças.value
    var duracao = Duração.value

    // Carnes
    var qtdCarnes = CarnePP(duracao) * adultos + (CarnePP(duracao) / 2 * criancas)

    // Cervejas
    var qtdCervejas = CervejaPP(duracao) * adultos

    // Água/Refri
    var qtdBebidas = BebidasPP(duracao) * adultos + (BebidasPP(duracao) / 2 * criancas)

    // Resultados
    Result.innerHTML = `<p>${qtdCarnes / 1000} Kg de carne`
    Result.innerHTML += `<p>${Math.ceil(qtdCervejas / 350)} Latas de cervejas`
    Result.innerHTML += `<p>${Math.ceil(qtdBebidas / 2000)} L de bebidas`
})

function CarnePP(duracao) {
    if (duracao >= 6) {
        return 650
    }
    else {
        return 400
    }
}
function CervejaPP(duracao) {
    if (duracao >= 6) {
        return 2000
    }
    else {
        return 1200
    }
}
function BebidasPP(duracao) {
    if (duracao >= 6) {
        return 1500
    }
    else {
        return 1000
    }
}