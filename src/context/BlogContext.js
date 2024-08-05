import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
    switch(action.type) {
        case 'ADD':
            return [...state, 
                {id: Math.floor(Math.random() * 99999), 
                 title : action.payload.title,    //`Blog Post #${state.length + action.payload}`
                 content: action.payload.content
                }]
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

const addBlogPost = (dispatch) => {
  return (title, content, callback) => {
    // console.log("SOME TEST HERE-------");
    // console.log(title);
    // console.log(content);
    // console.log("SOME TEST HERE++++++++");


    dispatch({type: "ADD", payload : {title, content}})

    if(callback){
        callback()    
    }

  }
}

const deleteBlogPost = (dispatch) => {
    return (id) => dispatch({type: "DELETE", payload : id})
}

const editBlogPost = (dispatch) => {
    return (id, title, content, callback) => { dispatch({type: "EDIT", payload : {id, title, content}})
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
    {addBlogPost, deleteBlogPost, editBlogPost}, 
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