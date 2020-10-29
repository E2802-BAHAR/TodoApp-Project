import React from 'react';
import {View, Text, StyleSheet, Dimensions, TouchableOpacity} from "react-native";

const TodoCard = (props) => {

    return(
<View style={{flex:1}}>
    <View style={styles.container}>
        <Text style={styles.todoText}>{props.todo}</Text>
        <TouchableOpacity style={styles.bttn} onPress={props.delete}><Text style={{alignSelf:'center',color:'white'}}>DONE</Text></TouchableOpacity>
    </View>
</View>



    )
};
    
export default TodoCard;

const styles =StyleSheet.create({
    container:{
        backgroundColor:'#afb42b',
        height:Dimensions.get("window").height*0.05,
        borderTopRightRadius:18,
        borderTopLeftRadius:5,
        borderBottomLeftRadius:18,
        borderBottomRightRadius:5,
        margin:7,
        padding:5,
        justifyContent:'center',
        padding:10,
        flex:1,
        flexDirection:'row'
    
    },
    todoText:{
        color:'white',
        fontSize:15,
        flex:3
        
    },
    bttn:{
        width:40,
        flex:1,
        backgroundColor:'#558b2f',
        borderRadius:20,
        height:25,
        padding:2
    }
    

})