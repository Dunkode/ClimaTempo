import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'

export default function ShowTemperatures(props) {
    const dados = props.data
    const manha = dados.manha
    const tarde = dados.tarde
    const noite = dados.noite

    const temPeriodos = manha && tarde && noite

    const list = [manha, tarde, noite]

    useLayoutEffect(() => {
        if (temPeriodos){
            listAux = []
            list.map((periodo) => {
                periodo['id'] = id
                list.push(periodo)
            })
            list = listAux
        }
    }, [])
  
    return (
    <View>
        { temPeriodos ?
            <View>

                <View>
                    {list.map((periodo) => {
                        return<View key={periodo.id}>

                            <Text>Manhã</Text>
        
                            <Text>Temperatura Mínima</Text>
                            <Text>{periodo.temp_min}</Text>
        
                            <Text>Temperatura Máxima</Text>
                            <Text>{periodo.temp_max}</Text>
        
                        </View>
                    })}
                </View>
                {/* <View>

                    <Text>Manhã</Text>

                    <Text>Temperatura Mínima</Text>
                    <Text>{manha.temp_min}</Text>

                    <Text>Temperatura Máxima</Text>
                    <Text>{manha.temp_max}</Text>

                </View>
                <View>

                    <Text>Tarde</Text>

                    <Text>Temperatura Mínima</Text>
                    <Text>{tarde.temp_min}</Text>

                    <Text>Temperatura Máxima</Text>
                    <Text>{tarde.temp_max}</Text>

                </View>
                <View>

                    <Text>Noite</Text>

                    <Text>Temperatura Mínima</Text>
                    <Text>{noite.temp_min}</Text>

                    <Text>Temperatura Máxima</Text>
                    <Text>{noite.temp_max}</Text>

                </View> */}
            </View>
            :
            <View>
                <Text>Temperatura Mínima</Text>
                <Text>{dados.temp_min}</Text>

                <Text>Temperatura Máxima</Text>
                <Text>{dados.temp_max}</Text>
            </View>
        }
    </View>
  )
}