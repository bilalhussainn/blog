import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import BlogContext from '../context/BlogContext'

const IndexScreen = () => {
    const blogPosts = useContext(BlogContext)

    return (
        <View>
        <Text>gjhg</Text>
        <FlatList data={blogPosts} 
            keyExtractor={(item) => item.title}
            renderItem={({item}) => {
                return <Text>{item.title}</Text>
            }}
        />
        </View>
    )
}

export default IndexScreen

const styles = StyleSheet.create({})