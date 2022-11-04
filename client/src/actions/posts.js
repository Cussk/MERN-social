import {FETCH_ALL, CREATE, UPDATE, DELETE} from '../constants/actionTypes';
import * as api from '../api';

//Action Creators
export const getPosts = () => async (dispatch) => {
    try {
        //requests data from backend
        const {data} = await api.fetchPosts();

        //retrieved data from backend and dispatches
        dispatch({type: FETCH_ALL, payload: data})
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
        dispatch({type: CREATE, payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
        //request updated post data
        const {data} = await api.updatePost(id, post);

        //receives request and dispatches update to post
        dispatch({type: UPDATE, payload: data})
    } catch (error) {
        console.log(error);
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        //requests to delete post by id
        await api.deletePost(id);

        //receives request and dispatches delete action to post
        dispatch({type: DELETE, payload: id})
    } catch (error) {
        console.log(error);
    }
}

export const likePost = (id) => async (dispatch) => {
    try {
        //request updated post data
        const {data} = await api.likePost(id);

        //receives request and dispatches update to post
        dispatch({type: UPDATE, payload: data})
    } catch (error) {
        console.log(error);
    }
}