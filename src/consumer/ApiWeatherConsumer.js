import axios from "axios"


export const getClimaPorCidade = (geocode) => {
    return new Promise(async (resolve, reject) => {
        try{
            const response = await axios.get(`https://apiprevmet3.inmet.gov.br/previsao/${geocode}`)
            resolve(response.data)
        }catch (error){
            reject(error)
        }
    })
}
