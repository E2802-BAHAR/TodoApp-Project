import React from 'react';
import {View, Text,TouchableOpacity, StyleSheet, Dimensions} from "react-native";

const MyButtons = (props) => {

    return(
<View >
    <TouchableOpacity style={styles.button} onPress={props.myPress}><Text style={styles.buttonTittle}>{props.title}</Text></TouchableOpacity>
</View>

    )
};
    
export default MyButtons;

const styles =StyleSheet.create({
    button:{ backgroundColor:'#558b2f',width:Dimensions.get("window").width*0.4,alignSelf:'center',height:50,margin:10,borderRadius:100,padding:10},
    buttonTittle:{color:'white',fontSize:15,alignSelf:'center'}
})