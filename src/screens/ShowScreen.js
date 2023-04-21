import React, { useContext } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Context } from "../context/BlogContext";
import {Feather, EvilIcons} from '@expo/vector-icons';


export default ShowScreen = ({navigation}) => {
    const {state} = useContext(Context);
    
    const blogpost = state.find(
        blogpost => blogpost.id === navigation.getParam('id') 
    );

    return <View>
        <Text style={styles.title}>{blogpost.title}</Text>
        <View style={styles.row}>
            <Text>
                {blogpost.content}
            </Text>
        </View>
    </View>
}


ShowScreen.navigationOptions = ({navigation}) =>{
    return {
      headerRight: () => <TouchableOpacity onPress={() => navigation.navigate("Edit", {id: navigation.getParam('id') })}>
        <EvilIcons name="pencil" size={30} style={styles.plus}/>
      </TouchableOpacity>,
      title: <Text style={styles.container}>Show Screen</Text>
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
        fontSize: 22,
        fontWeight: 'bold',
      },
      icon: {
        fontSize: 24
      }
});