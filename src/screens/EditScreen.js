import React, { useContext, useState } from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";
import { Context } from "../context/BlogContext";


export default EditScreen = ({navigation}) => {

    const {state} = useContext(Context);
    
    const blogpost = state.find(
        blogpost => blogpost.id === navigation.getParam('id') 
    );

    const [title,setTitle] = useState(blogpost.title);
    const [content,setContent] = useState(blogpost.content);

    return <View>
    <Text style={styles.output} >Enter Title</Text>
    <TextInput style={styles.input} value={title} onChangeText={text => setTitle(text)}/>
    <Text style={styles.output} >Enter Content</Text>
    <TextInput style={styles.input} value={content} onChangeText={text => setContent(text)}/>
    <Button title="Save" onPress={() => {
        addBlogPost(title,content, () =>{
            navigation.navigate('Index');
        });
    }}/>
</View>
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      row: {
        flexDirection : 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        borderTopWidth: 1,
        borderColor: 'gray',
        paddingHorizontal: 20,
      },
      title : {
        fontSize: 18
      },
      icon: {
        fontSize: 24
      },
      input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 15,
        marginLeft: 5,
        marginRight: 5,
      },
      output: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
        marginLeft: 5,
        marginRight: 5,
      }
});