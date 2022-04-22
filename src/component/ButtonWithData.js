import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import ShowTemperatures from './ShowTemperatures';

export default function ButtonWithData(props) {
    const [modalVisible, setModalVisible] = useState(false);

    const clima = props.data

    useLayoutEffect(() => {
      console.log('Dia button data: ', clima.id)
    }, [])

    return (
      <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
        { !modalVisible ?
            <View style={styles.box1}>

              <View style={styles.line}>
              
                  <View style={{flexDirection: "row", alignItems: 'center'}}>
                    
                    <Text style={styles.titleDate}>
                      {clima.id}
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
                  {clima.id}
                </Text>
                
                <Text style={{textAlign:'right', alignItems:'center'}}>
                  ▼
                </Text>
              
              </View>
              
              <ShowTemperatures
                data={clima}
              >

              </ShowTemperatures>

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

  },
  box2:{
      marginHorizontal:20,
      marginBottom: 20,
      paddingHorizontal: 10,
      paddingBottom:10,
      borderWidth: 1,
      borderRadius: 20,
      borderColor: "#9E9E9E",
  },
  line:{
      flexDirection: "row",
      alignItems:'center'
  },
  titleDate:{
    fontSize: 30,
    color: 'black',
    textAlign: 'left',
    marginEnd: 20,
    fontWeight: 'bold'

  },
})