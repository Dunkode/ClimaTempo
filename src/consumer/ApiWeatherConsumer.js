import axios from "axios"


export const getClimaPorCidade = (geocode) => {
    return new Promise(async (resolve, reject) => {
        try{
            var url = `https://apiprevmet3.inmet.gov.br/previsao/${geocode}`
            console.log(url)
            const response = await axios.get(url)
            resolve(response.data)
        }catch (error){
            reject(error)
        }
    })
}

export const getViaCep = (cep) => {
    return new Promise(async (resolve, reject) => {
        try{
            var url = `https://viacep.com.br/ws/${cep}/json/`
            console.log(url)
            const response = await axios.get(url)
            resolve(response.data)
        }catch (error){
            reject(error)
        }
    })
}