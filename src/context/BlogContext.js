import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
    switch(action.type) {
        case 'ADD':
            return [...state, 
                {id: Math.floor(Math.random() * 99999), 
                 title : `Blog Post #${state.length + action.payload}`
                }]
        case 'DELETE':
            return state.filter((item) => item.id !== action.payload)
        default:
            return state;

    }
}

const addBlogPost = (dispatch) => {
  return () => dispatch({type: "ADD", payload : 2})
}

const deleteBlogPost = (dispatch) => {
    return (id) => dispatch({type: "DELETE", payload : id})
}



// it works if createDataContext returns as array [Context, Provider]
// export const [Context, Provider] = createDataContext(
//     blogReducer, 
//     {addBlogPost}, 
//     [] 
// )

export const {Context, Provider} = createDataContext(
    blogReducer, 
    {addBlogPost, deleteBlogPost}, 
    [] 
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