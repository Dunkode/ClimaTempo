import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { Divider } from '@rneui/base'

export default function ShowTemperatures(props) {
    const dados = props.data

    const manha = dados.manha
    const tarde = dados.tarde
    const noite = dados.noite

    const temPeriodos = manha && tarde && noite

    var list = [manha, tarde, noite]
    var listPeriodos = ['Manhã', 'Tarde', 'Noite']

    useLayoutEffect(() => {
        if (temPeriodos){
            var listAux = []
            var i = 0
            
            list.map((periodo) => {
                periodo['id'] = i
                i++
                list.push(periodo)
            })
            list = listAux
        }
    }, [])
    
    return (
        <View style={styles.container}>
        { temPeriodos ?
            <View>

                <View  style={{flexDirection:'column'}}>
                    {list.map((periodo, index) => {
                        return<View key={periodo.id} 
                        style={{flexDirection:'column'}}
                        >

                        <Divider orientation="horizontal" />

                            <Text style={styles.titlePeriodo}>{listPeriodos[index]}</Text>
                            
                            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                                <Image
                                    style={{width:10, height:13,}}
                                        source={{uri:periodo.temp_min_tende_icone}}
                                        />
                                <Text>Temp. Mínima: {periodo.temp_min}°</Text>

                                <Text>|</Text>

                                <Image
                                    style={{width:10, height:13,}}
                                    source={{uri:periodo.temp_max_tende_icone}}
                                    />
                                <Text>Temp. Máxima: {periodo.temp_max}°</Text>
                            </View>
                               
                            <View>
                                <Text style={styles.bold}>Resumo do dia: </Text>
                                <Text>  {periodo.resumo}</Text>
                            </View>

                            <View style={{flexDirection:'row'}}>
                                <Text style={styles.bold}>Estação: </Text>
                                <Text>{periodo.estacao}</Text>
                            </View>
                            
        
                        </View>
                    })}
                </View>
            </View>
            :
            <View  style={{flexDirection:'column'}}>
                <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                    <Image
                        style={{width:10, height:13,}}
                            source={{uri:dados.temp_min_tende_icone}}
                    />
                    <Text>Temp. Mínima: {dados.temp_min}°</Text>

                    <Text>|</Text>

                    <Image
                        style={{width:10, height:13,}}
                        source={{uri:dados.temp_max_tende_icone}}
                        />
                    <Text>Temp. Máxima: {dados.temp_max}°</Text>
                    
                </View>
                
                <View>
                    <Text style={styles.bold}>Resumo do dia: </Text>
                    <Text>  {dados.resumo}</Text>
                </View>

                <View style={{flexDirection:'row'}}>
                    <Text style={styles.bold}>Estação: </Text>
                    <Text>{dados.estacao}</Text>
                </View>
                
            </View>    

        }
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'column',
        justifyContent: 'center',
        
    },
    titlePeriodo: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    bold:{
        fontWeight:'bold'
    }
})