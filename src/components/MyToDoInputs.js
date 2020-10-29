import React from 'react';
import {View, Text,TextInput, StyleSheet, Dimensions} from "react-native";

const MyInputs = (props) => {

    return(
     <TextInput style={style.inputBox}  onChangeText={props.textChange}></TextInput>

)
};
    
export default MyInputs;

const style = StyleSheet.create({
    inputBox:{
        backgroundColor:'#eceff1',
        borderRadius:10,
        width:Dimensions.get("window").width*0.85,
        margin:10
 }

})