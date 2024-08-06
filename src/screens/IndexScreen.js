import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { Context } from '../context/BlogContext'
import Feather from '@expo/vector-icons/Feather';

const IndexScreen = ({navigation}) => {

    const {state, addBlogPost, deleteBlogPost, getBlogPosts}  = useContext(Context)

    useEffect(() => {
        getBlogPosts();
        //below code returns a listener . So we need to clean that when the screen/component unmounts.
        const listener = navigation.addListener('focus',() =>{
            getBlogPosts();
        })

        return () => {
            listener.remove();
        }
    }, [])

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => ( <TouchableOpacity onPress={() => navigation.navigate("Create")}>
                    <Feather name="plus" size={24} color="black" />
                </TouchableOpacity>
            )
        })
    },[])

    return (
        <View>
            <FlatList data={state} 
                keyExtractor={(item) => item.id}
                renderItem={({item}) => {
                    return <TouchableOpacity onPress={() => navigation.navigate("Show", {id: item.id})}>
                        <View style={styles.itemContainer} >
                            <Text style={styles.title}>{item.title} - {item.content} -{item.id}</Text>
                            <TouchableOpacity onPress={() => {
                                console.log(item.id);
                                deleteBlogPost(item.id)
                            }}>
                                <Feather style={styles.icon} name="trash" color="black" />
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                }}
            />
        </View>
    )
}

/** Deprecated */   // Check the  navigation.setOptions code above which is from latest navigation/native package
//whenever our index screen is about to be displayed by React navigation, React Navigation will automatically call this function called navigationOptions 
// and then it will inspect the object that it is returning.
// IndexScreen.navigationOptions = () => {
//     //use can use this object to customize different things that are displayed inside our header and what happens when a user taps on them.
//     return {
//         headerTitle: 'Blog',
//         title: "Hello",
//         headerRight: <Text>+afasf</Text>
//     }
// }

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 15,
        //borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: 'gray'
    },
    title: {
        fontSize: 18,
    },
    icon: {
        fontSize: 24,
    }
})

export default IndexScreen