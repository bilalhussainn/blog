import jsonServer from "../api/jsonServer";
import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
    switch(action.type) {
        case 'GET':
            return action.payload
        // case 'ADD':
        //     return [...state, 
        //         {id: Math.floor(Math.random() * 99999), 
        //          title : action.payload.title,    //`Blog Post #${state.length + action.payload}`
        //          content: action.payload.content
        //         }]
        case 'DELETE':
            return state.filter((item) => item.id !== action.payload)
        case 'EDIT':
            return state.map((blog) => {
                //same code as below using ternary expression
                return blog.id === action.payload.id ? action.payload : blog

                // if(blog.id === action.payload.id){
                //     return action.payload

                //     //same code as above
                //     // return {
                //     //     id: blog.id,
                //     //     title: action.payload.title,
                //     //     content: action.payload.content
                //     // }
                // }
                // return blog
            } )
        default:
            return state;

    }
}

const getBlogPosts = dispatch => {
    return async () => {
        console.log("getBlogPosts called");
        
        const response = await jsonServer.get('/blogposts')
        // response.data = [ {}. {}]  "array of objects."
        
        dispatch({type: 'GET', payload : response.data})
    }
}

const addBlogPost = (dispatch) => {
  return async (title, content, callback) => {
    const response = await jsonServer.post('/blogposts', {title, content})
    console.log("Response : " );
    console.log(response);
    
    


    // // console.log("SOME TEST HERE-------");
    // // console.log(title);
    // // console.log(content);
    // // console.log("SOME TEST HERE++++++++");


    // dispatch({type: "ADD", payload : {title, content}})

    if(callback){
        callback()    
    }

  }
}

const deleteBlogPost = (dispatch) => {
    return async (id) => {
        
        const response = await jsonServer.delete(`/blogposts/${id}`)
        //better check weather the response is success and then locally dispatch for delete.
        dispatch({type: "DELETE", payload : id})

    }
}

const editBlogPost = (dispatch) => {
    return async (id, title, content, callback) => { 
        
        const response = await jsonServer.put(`/blogposts/${id}`, {title, content})

        //dispatch after api success. Need to add condition
        dispatch({type: "EDIT", payload : {id, title, content}})
 
        if(callback){
            callback()
        }
    }
}



// it works if createDataContext returns as array [Context, Provider]
// export const [Context, Provider] = createDataContext(
//     blogReducer, 
//     {addBlogPost}, 
//     [] 
// )

export const {Context, Provider} = createDataContext(
    blogReducer, 
    {addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts}, 
    [{title: 'Bilal', content: 'Hussain', id: 1}] 
)


//import React, { useReducer, useState } from "react";

//const BlogContext = React.createContext();

// const blogReducer = (state, action) => {
//     switch(action.type) {
//         case 'ADD':
//             return [...state, {title : `Blog Post #${state.length+ action.payload}`}]
//         default:
//             return state;

//     }
// }

// export const BlogProvider = ({children}) => {

//     // const [blogPosts, setBlogPosts] = useState([])

//     // const addBlogPost = () => {
//     //     setBlogPosts([...blogPosts, {title : `Blog Post #${blogPosts.length+1}`}])
//     // }

//     // // const blogPosts = [
//     // //     {title: "Blog Post #1"},
//     // //     {title: "Blog Post #2"},
//     // // ]

//     const [blogPosts, dispatch] = useReducer(blogReducer, [])

//     const addBlogPost = () => {dispatch({type: "ADD", payload : 1})}


//     return <BlogContext.Provider value={{data: blogPosts, addBlogPost}}>
//         {children}
//     </BlogContext.Provider>
// }

//export default BlogContext