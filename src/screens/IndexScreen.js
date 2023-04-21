import React, { useContext } from "react";
import { View, StyleSheet, Text, Button, TouchableOpacity} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import {Context as BlogContext, Provider} from "../context/BlogContext";
import {Feather} from '@expo/vector-icons';

export default function IndexScreen ({navigation}) {

    const {state , addBlogPost, deleteBlogPost} = useContext(BlogContext);

    return (<View>
        <FlatList data={state}
        keyExtractor={(blogPosts) => blogPosts.title}
        renderItem={({item}) =>{
            return <TouchableOpacity onPress={() => navigation.navigate('Show', {id : item.id})}>
              <View style={styles.row}>
                <Text style={styles.title}>{item.title} - {item.id}</Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                    <Feather style={styles.icon} name="trash"/>
                </TouchableOpacity>
            </View>
            </TouchableOpacity>
        } 
    }
        />
    </View>);
}

IndexScreen.navigationOptions = ({navigation}) =>{
  return {
    headerRight: () => <TouchableOpacity onPress={() => navigation.navigate("Create")}>
      <Feather name="plus" size={30} style={styles.plus}/>
    </TouchableOpacity>,
    title: <Text style={styles.container}>Blogs</Text>
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
      plus: {
        marginRight:20
      }
});