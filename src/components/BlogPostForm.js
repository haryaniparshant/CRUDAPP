import React from "react";
import { Text, View, StyleSheet, Button, TextInput } from "react-native";
import { useState } from "react";



export default BlogPostForm = ({onSubmit, initialvalues}) => {

    const [title,setTitle] = useState(initialvalues.title);
    const [content,setContent] = useState(initialvalues.content);


    return <View>
    <Text style={styles.output} >Enter Title</Text>
    <TextInput style={styles.input} value={title} onChangeText={text => setTitle(text)}/>
    <Text style={styles.output} >Enter Content</Text>
    <TextInput style={styles.input} value={content} onChangeText={text => setContent(text)}/>
    <Button title="Save Blog Post" onPress={() => {
        onSubmit(title,content);
    }}/>
</View>

}

BlogPostForm.defaultProps = {
  initialvalues: {
    title: '',
    content: '',
  }
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