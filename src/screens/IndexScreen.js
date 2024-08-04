import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
//import BlogContext from '../context/BlogContext'
//import {Context as BlogContext} from '../context/BlogContext'
//import {Context as ImageContext} from '../context/ImageContext' // if we import 2 different object/context with same name we can use 'as NewName' to differentiate 
import { Context, addBlogPost } from '../context/BlogContext'
import Feather from '@expo/vector-icons/Feather';

const IndexScreen = () => {
    // const blogContent  = useContext(BlogContext)

    // const blogPost = blogContent.data
    // const addBlogPost = blogContent.addBolgPost

    const {state, addBlogPost, deleteBlogPost}  = useContext(Context)

    return (
        <View>
            <Button title='Add Post' onPress={addBlogPost} />
            <FlatList data={state} 
                keyExtractor={(item) => item.id}
                renderItem={({item}) => {
                    return <View style={styles.itemContainer  }>
                            <Text style={styles.title}>{item.title}-{item.id}</Text>
                            <TouchableOpacity onPress={() => {
                                console.log(item.id);
                                deleteBlogPost(item.id)
                            }}>
                                <Feather style={styles.icon} name="trash" color="black" />
                            </TouchableOpacity>
                        </View>
                }}
            />
        </View>
    )
}

export default IndexScreen

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