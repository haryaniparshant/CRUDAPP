import React, { useContext } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";


export default EditScreen = ({navigation}) => {

    const {state, editBlogPost} = useContext(Context);
    
    const blogpost = state.find(
        blogpost => blogpost.id === navigation.getParam('id') 
    );

    return <BlogPostForm
    initialvalues={{
      id: blogpost.id,
      title: blogpost.title,
      content: blogpost.content
    }}
    onSubmit={(title,content) =>{ 
      editBlogPost(blogpost.id, title, content, () => navigation.pop())
    }}
    />
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