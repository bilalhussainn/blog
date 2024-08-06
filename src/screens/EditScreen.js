import { StyleSheet,  View } from 'react-native'
import React, { useContext } from 'react'
import { Context } from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm'

const EditScreen = ({navigation, route}) => {

    const id = route.params.id
    const {state, editBlogPost} = useContext(Context)
    const blog = state.find((item) => item.id === id)

  return (
    <View>
        <BlogPostForm initialValues={{title: blog.title, content: blog.content}} 
            onSubmit={(title, content) => {
                editBlogPost(id, title, content, () => {
                    navigation.pop()
                })
            }}/>
    </View>
  )
}

const styles = StyleSheet.create({
    input: {
        fontSize: 18, borderWidth: 1,
        borderColor: 'black',
        marginBottom: 15,
        padding: 5,
        margin: 5
    },
    label: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5,

    },
    save: {
        margin: 5
    }
})

export default EditScreen