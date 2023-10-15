import React from 'react'
import {StyleSheet, View, TextInput, Button, TouchableNativeFeedbackBase, Text} from 'react-native';
const styles = {
    textinput : {
    backgroundColor : 'white',
    marginTop : 100,
    marginLeft: 20,
    marginRight: 20,
    height: 50,
    borderColor: 'blue',
    borderWidth: 1,
    paddingLeft: 15,
    borderRadius :15,
    },
    
    header:{
        flex:1,
    },
    footer:{
        flex:1,
    },
    container:{
        color:'pink',
        backgroundColor:'black',
        flex:1
    },
    SignIn:{
        flex:2
    },
    Search:{
        flex:2
    },
    View:{
        flex:1
    }
    
}

class Accueil extends React.Component{
    render() {
    return (
    <View style = {styles.view}>
        <View style = {styles.header}></View>
        <View style = {styles.container}>
            <View style = {styles.SignIn}>
                <Text style={styles.textinput}>{"S'enregistrer : "}</Text>
                <Button color = 'red' title='SEARCH' onPress={() => {}}/>
            </View>
            <View style = {styles.Search}>
                <Text style={styles.textinput}>{"Rechercher :"}</Text>
                <Button color = 'blue' title='SIGN UP' onPress={() => {}}/>
            </View>
        </View>
        <View style = {styles.footer}>
        </View>
    </View>
    )
    }
}

export default Accueil;