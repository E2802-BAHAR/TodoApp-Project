import React,{useState} from 'react';
import {View, Text, StyleSheet, KeyboardAvoidingView, FlatList, Alert,Image, Dimensions,ImageBackground, TouchableOpacity} from 'react-native';
import MyToDoInputs from './components/MyToDoInputs'
import MyToDoButtons from './components/MyToDoButtons'
import TodoCard from './components/TodoCard'

const App = (props) => {
const[entry, setEntry] =useState("");
const[todoList,setTodoList] =useState([])

 const changeText = (userText) => setEntry(userText);

 const addTodo = () => {
     setTodoList([...todoList,entry])}
 const itemRemove =() =>{
     setTodoList(todoList.filter((e) => (e !== entry)))
 }





    return(
<View style ={styles.container}>
    <KeyboardAvoidingView style={styles.container} behavior='height'>
    <View style ={{flex:1,justifyContent:'space-between'}}>

        <View style={styles.headerContainer}>
        <ImageBackground source={require('./images/orman.jpg')} style={styles.image} imageStyle= 
{{opacity:0.8}}>
        <Image style={styles.tinyLogo}
        source={require('./images/userMan.jpg')} />    
        <Text style={styles.headerTodo}>Welcome, Alex</Text>
        </ImageBackground>
        </View>
        
        <View style={{flex:0.2,backgroundColor:'#9e9d24',width:Dimensions.get("window").width*0.4,alignItems:'center',justifyContent:'center',borderTopRightRadius:30,}}>
        <Text style={styles.todoCount}>You have {todoList.length} todos</Text> 
        </View>



        <View style={styles.todoContainer}>
        <FlatList
        keyExtractor={(item,index) => item.toString()}
        data={todoList}
        renderItem={({item}) => <TodoCard todo={item} delete={itemRemove}/>}
        /> 

        <View style={styles.panel}>
        <MyToDoInputs textChange={changeText}></MyToDoInputs>
        <MyToDoButtons title='ADD TO DO' myPress={addTodo}></MyToDoButtons>
        </View>


        </View>

    </View>
    </KeyboardAvoidingView>
</View>

    )
}

export default App;

const styles = StyleSheet.create({
    container:{flex:1,backgroundColor:'#414865'},
    headerContainer:{flexDirection:'row',alignItems:'center',justifyContent:'space-evenly',flex:1},
    headerTodo:{fontSize:20,fontWeight:'bold',color:'white'},
    todoContainer:{flex:2,padding:10, backgroundColor:'#f1f8e9',borderTopRightRadius:50},
    todoCount:{fontSize:15,color:'white',fontWeight:'bold'},
    tinyLogo:{width: 100,height: 100,borderRadius:50},
    panel:{backgroundColor:'#aed581',borderRadius:20,padding:5,height:150},
    image:{width:410,justifyContent: "center",height:400,alignItems:'center'}
})