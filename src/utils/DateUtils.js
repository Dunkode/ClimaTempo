const date = require('date-and-time')

export const getProximosDias = (qtdDias) => {
    
    
    const diaAtual = new Date()

    const listaDias = []

    listaDias.push(date.format(diaAtual, 'DD/MM/YYYY'))

    for (var i = 0; i < qtdDias-1 ; i++){

        diaAtual.setDate(diaAtual.getDate() + 1)

        listaDias.push(date.format(diaAtual, 'DD/MM/YYYY'))
    }

  return listaDias;
}