import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo';

export default function Menu({navigation}) {
  return (
    <View style={styles.container}>
        <Text style={styles.tittle}
        >
            Clima tempo
        </Text>

        <View style={styles.secView}>
            <TouchableOpacity style={styles.button}
                onPress={() =>{navigation.push('MostraClima')}}
            >
                <Icon name='thunder-cloud' size={60} color= '#2376DD' style={{paddingRight: 10}}>

                </Icon>
                
                <Text style={styles.buttonText}>
                    Clima
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}
                onPress={() => navigation.push('Sobre')}>
            <Icon name='user' size={60} color= '#2376DD' style={{paddingRight: 10}}/>

                <Text style={styles.buttonText}>
                    Sobre
                </Text>
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
    secView:{
        flexDirection:'row',
    },
    tittle:{
        color:'#43CBFF',
        fontSize: 42,
        paddingBottom: 35,
        textShadowColor: "#00f2fe",
        textShadowRadius: 10

    },
    button: {
        alignItems: "center",
        flexDirection:'row',
        backgroundColor: "#1E2AD2",
        padding: 10,
        borderRadius: 10,
        margin:10,
    },
    buttonText: {
        color: '#6B73FF',
        fontSize: 30,
    }
    
});