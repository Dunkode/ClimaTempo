import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import {getClimaPorCidade} from '../consumer/ApiWeatherConsumer'
import {getProximosDias} from '../utils/DateUtils'
import { Button } from '@rneui/base';
import { Dialog } from '@rneui/themed'
import { getObjectInList, isEmpty, transformObjectInList } from '../utils/ObjectAnaliser';
import DropDownPicker from 'react-native-dropdown-picker';
import ButtonWithNoData from '../component/ButtonWithNoData';
import ButtonWithData from '../component/ButtonWithData';
import IconSair from 'react-native-vector-icons/AntDesign';



export default function MostraClima({navigation}) {
    
    const [visible, setVisible] = useState(true)
    const [messageDialog, setMessageDialog] = useState("Consultando dados da previsão.")
    const [tittleDialog, setTittleDialog] = useState("Atenção!")

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState();
    const [geocodes, setGeocodes] = useState([
        {label: 'Passo Fundo', value: '4314100'},
        {label: 'Marau', value: '4304705'},
        {label: 'Soledade', value: '4320800'},
        {label: 'Erechim', value: '4307005'},
        {label: 'Marau', value: '4311809'}
      ]);
    
    const climasList = []

    const [climaCidades ,setClimaCidades] = useState([])
    const [climaCidadeSelecionada, setClimaCidadeSelecionada] = useState([])
    const [dias, setDias] = useState(getProximosDias(5))    
    
    
    const getCidadeEscolhida = (geocode) => {
        console.log(geocode)
        var climaSelecionadoTemp = getObjectInList(climaCidades, geocode)
        climaSelecionadoTemp = transformObjectInList(climaSelecionadoTemp[geocode])
        setClimaCidadeSelecionada(climaSelecionadoTemp)
        // console.log('getCidadeEscolhida:', climaSelecioandoTemp)
    
    }

    useLayoutEffect(() => {        
        geocodes.map(item => {
            getClimaPorCidade(item.value)
            .then((data) => {

                data["id"] = item.value
                climasList.push(data)
                setClimaCidades(climasList)
                if (climasList.length == 5){
                    setVisible(false)
                }
                
                // setMessageDialog(`Consultando dados da previsão.\nCidades: ${climasList.length}/5`)
                // console.log('Dados recebidos com sucesso!:', data[item.value][dias[0]].manha.entidade,
                // 'Tamanho lista: ', climasList.length,
                // 'compar: ', !(climasList.length == 5))
            })

            .catch((erro) => {console.log(erro)
                setTittleDialog('Erro!')
                setMessageDialog('Erro ao requisitar dados!:\n' + erro)
                // setVisible(false)
            })
            }
        )

    }, [])
        
    return (
        <View style={styles.container}>
            {/* <Dialog 
            isVisible={visible}
            >
                <Dialog.Title title="Aguarde!"/>
                <Text>{messageDialog}</Text>
                <Dialog.Actions>
                <Dialog.Button title="Sair" onPress={() => navigation.replace('Menu')}/>
                <Dialog.Button title="testeconect" onPress={() => console.log(getClimaPorCidade('4314100'))}/>
                </Dialog.Actions>
            </Dialog> */}

            <View style={styles.internalView}>

                <Text style={styles.tittle}>MostraClima</Text>

                <DropDownPicker
                    placeholder='Selecione um cidade!'
                    loading={true}
                    open={open}
                    value={value}
                    items={geocodes}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setGeocodes}
                    style={styles.dropdownStyle}
                    dropDownContainerStyle={{
                        width: 200,
                    }}
                    activityIndicatorColor="red"
                    activityIndicatorSize={100}
                />


                <View style={{justifyContent:'center', margin: 20}}>
                    {isEmpty(climaCidadeSelecionada) ?
                        dias.map((dia) => {                    
                            return(
                                <ButtonWithNoData
                                    key={dia.toString()}
                                    data={dia}
                                >
                                </ButtonWithNoData>    
                                
                            )
                        })
                    :
                    <View style={{alignItems:'center', justifyContent: 'center'}}>
                        <FlatList
                        data={climaCidadeSelecionada}
                        renderItem={ ({item}) =>
                            <ButtonWithData
                            data={item}
                            />
                        }
                        keyExtractor={item => item.id}
                        />
                        <Button onPress={() => {
                        console.log(climaCidadeSelecionada)
                        }} title='butioness'>

                        </Button>
                    </View>
                    }

                </View> 

                <Button onPress={() => {
                    if ( climasList == 5 && value){
                        getCidadeEscolhida(value)  

                    } else {
                        setTittleDialog('Erro!')
                        setMessageDialog('Não há dados para montar a previsão, ou não foi selecionada uma cidade!')
                        setVisible(true)
                    }
                    
                }}
                    title='Pesquisar cidade selecioanda!'
                    style={{justifyContent:'center', alignContent:'center'}}
                />

                <TouchableOpacity onPress={() => navigation.replace('Menu')}>
                    <IconSair name='leftcircleo' size={60} color= 'white' style={{padding: 20}}/>
                </TouchableOpacity>
            </View>
           
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2575fc'
        
    },
    dropdownStyle:{
        width: 200,
        backgroundColor:'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 20,
        borderColor: "#9E9E9E",
    },
    internalView: {
        flex:1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    tittle:{
        color:'#43CBFF',
        fontSize: 42,
        paddingBottom: 10,
        textShadowColor: "#00f2fe",
        textShadowRadius: 10

    },
    
});