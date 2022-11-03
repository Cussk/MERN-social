import * as api from '../api';

//Action Creators
export const getPosts = () => async (dispatch) => {
    try {
        //requests data from backend
        const {data} = await api.fetchPosts();

        //retrieved data from backend and dispatches
        dispatch({type: 'FETCH_ALL', payload: data})
        ;
    } catch (error) {
        console.log(error);
    }
    
}

export const createPost = (post) => async (dispatch) => {
    try {
        //requesting a post from back end api 
        const {data} = await api.createPost(post);

        //receives request and dispatches post to create it
        dispatch({type: 'CREATE', payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
        //request updated post data
        const {data} = await api.updatePost(id, post);

        //receives request and dispatches update to post
        dispatch({type: 'UPDATE', payload: data})
    } catch (error) {
        console.log(error);
    }
}