import React, { useContext } from "react";
import { Text, StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

export default CreateScreen = ({navigation}) => {
    const {state, addBlogPost} = useContext(Context);

    return <BlogPostForm
    onSubmit={(title,content) =>{
      addBlogPost(title,content, () => navigation.navigate('Index'))
    }}
    />
}

CreateScreen.navigationOptions = ({navigation}) =>{
    return {
      title: <Text style={styles.container}>Create Screen</Text>
    };
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