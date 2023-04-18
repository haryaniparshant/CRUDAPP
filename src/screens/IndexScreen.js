import React, { useContext } from "react";
import { View, StyleSheet, Text, Button, TouchableOpacity} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import {Context as BlogContext, Provider} from "../context/BlogContext";
import {Feather} from '@expo/vector-icons';

export default function IndexScreen () {

    const {state , addBlogPost} = useContext(BlogContext);

    return (<View>
        <Button title="Add Post" onPress={() => addBlogPost()}/>
        <FlatList data={state}
        keyExtractor={(blogPosts) => blogPosts.title}
        renderItem={({item}) =>{
            return <View style={styles.row}>
                <Text style={styles.title}>{item.title} - {item.id}</Text>
                <TouchableOpacity onPress={() => console.log(item.id)}>
                    <Feather style={styles.icon} name="trash"/>
                </TouchableOpacity>
            </View>
        }
    }
        />
    </View>);
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
      }
});