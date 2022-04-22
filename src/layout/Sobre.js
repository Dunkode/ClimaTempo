import { View, Text, StyleSheet, Linking } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import IconGit from 'react-native-vector-icons/Octicons';
import IconEmail from 'react-native-vector-icons/MaterialCommunityIcons';
import IconLinkedin from 'react-native-vector-icons/MaterialCommunityIcons';
import IconSair from 'react-native-vector-icons/AntDesign';

export default function Sobre({ navigation }) {
  return (
    <View style={styles.container}>
      

      <View style={styles.subcontainer}>
        <Text style={styles.tittle}>App by</Text>
        <Text style={styles.pan}>Éderson Vidal Junior</Text>

        <View style={styles.touchableContainer}>
          <TouchableOpacity style={styles.touchable} 
            onPress={() => Linking.openURL('https://github.com/Dunkode')}>
            <IconGit name='mark-github' size={60} color= 'white' style={{paddingRight: 10}}>

            </IconGit>
          </TouchableOpacity>

          <TouchableOpacity style={styles.touchable}
            onPress={() => Linking.openURL('mailto:edersonvidal137@gmail.com')}>
            <IconEmail name='email-multiple' size={60} color= 'white' style={{paddingRight: 10}}>

            </IconEmail>

          </TouchableOpacity>
          
          <TouchableOpacity style={styles.touchable}
            onPress={() => Linking.openURL('https://www.linkedin.com/in/edersonvidal/')}>
            <IconLinkedin name='linkedin' size={60} color= 'white' style={{paddingRight: 10}}>

            </IconLinkedin>

          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity onPress={() => navigation.replace('Menu')}>
        <IconSair name='leftcircleo' size={60} color= 'white' style={{paddingRight: 10}}/>
      </TouchableOpacity>
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
    subcontainer: {
      margin: 40,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#0d66fc',
      borderRadius: 20,

  },
  tittle:{
    color:'#43CBFF',
    fontSize: 42,
    paddingBottom: 35,
    fontWeight: 'bold'
    
  },
  pan: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold'
  },
  touchableContainer: {
    flexDirection: 'row',
    justifyContent:'center',
    padding: 30
  },
  touchable:{
    padding: 10
  }
})