import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import React, { useLayoutEffect, useState } from 'react'

export default function ButtonWithNoData(props) {
    const [modalVisible, setModalVisible] = useState(false);
    const data = props.data

    useLayoutEffect(() => {
    
    }, [])

    return (
      <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
        { !modalVisible ?
            <View style={styles.box1}>

              <View style={styles.line}>
              
                  <View style={{flexDirection: "row", alignItems: 'center'}}>
                    
                    <Text style={styles.titleDate}>
                      {data}
                    </Text>
                    
                    <Text style={{textAlign:'right'}}>
                      ▶
                    </Text>
                  </View>
      
              </View>

            </View>
            :
            <View style={styles.box2}>

              <View style={styles.line}>
              
                <Text style={styles.titleDate}>
                  {data}
                </Text>
                
                <Text style={{textAlign:'right', alignItems:'center'}}>
                  ▼
                </Text>
              
              </View>
      
              <View>

                <Text>Selecione uma cidade para que seus dados</Text>
                <Text>sejam mostrados aqui!</Text>

              </View>
            </View>
        }
      </TouchableOpacity>

    )}

const styles = StyleSheet.create({
  box1:{
      marginHorizontal:20,
      marginBottom: 20,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderRadius: 20,
      borderColor: "#9E9E9E",
      backgroundColor:'white'
      
    },
    box2:{
      marginHorizontal:20,
      marginBottom: 20,
      paddingHorizontal: 10,
      paddingBottom:10,
      borderWidth: 1,
      borderRadius: 20,
      borderColor: "#9E9E9E",
      backgroundColor:'white'
    },
    line:{
      flexDirection: "row",
      alignItems:'center'
    },
    titleDate:{
      flex:1,
      fontSize: 30,
      color: 'black',
      textAlign: 'left',
      marginEnd: 20,
      fontWeight: 'bold'
      
    },
  })