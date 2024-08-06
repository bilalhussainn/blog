import jsonServer from "../api/jsonServer";
import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
    switch(action.type) {
        case 'GET':
            return action.payload
        case 'DELETE':
            return state.filter((item) => item.id !== action.payload)
        case 'EDIT':
            return state.map((blog) => {
                return blog.id === action.payload.id ? action.payload : blog
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

export const {Context, Provider} = createDataContext(
    blogReducer, 
    {addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts}, 
    [{title: 'Bilal', content: 'Hussain', id: 1}] 
)
