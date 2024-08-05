import { StyleSheet } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm'

const CreateScreen = ({navigation}) => {
    
    const {state, addBlogPost} = useContext(Context)

    // useEffect(() => {
    //     addBlogPost("NNN","BBB")
    // }, [])
    
    //console.log(state);

    // useEffect(() => {
    //     console.log("TITLE");
    //     console.log(title);

    //     console.log("Content");
    //     console.log(content);
        
    // }, [title, content])

    return <BlogPostForm onSubmit={(title, content) => {
        addBlogPost(title, content, () => {
            navigation.navigate("Index")
        })
    }} />
    


}

export default CreateScreen

const styles = StyleSheet.create({

})