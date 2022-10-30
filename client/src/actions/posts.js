import * as api from '../api';

//ACtion Creators
export const getPosts = () => async (dispatch) => {
    try {
        //requests data from backend
        const {data} = await api.fetchPosts();

        //retrieved data from backend and dispatches
        dispatch({type: 'FETCH_ALL', payload: data})
        ;
    } catch (error) {
        console.log(error.message);
    }
    
}