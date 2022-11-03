import React, {useEffect, useState} from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from 'react-file-base64';
import {useDispatch, useSelector} from 'react-redux';
import useStyles from "./styles";
import { createPost, updatePost } from "../../actions/posts";

const Form = ({currentId, setCurrentId}) => {
    const [postData, setPostData] = useState({
        creator: '',
        title: '',
        message: '',
        tags: '',
        selectedFile: ''
    });

    //fetches a post if id matches found id else return nothing
    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);

    const classes = useStyles();
    const dispatch = useDispatch();

    //uses post data from id to populate the form for updating
    useEffect(() =>{
        if(post) setPostData(post);
    }, [post])

    //submits POST request
    const handleSubmit = (e) => {
        e.preventDefault(); //prevents page refresh
        
        //if there is a current post dispatch request to reducer to update post data 
        if(currentId) {
            dispatch(updatePost(currentId, postData));
        } else {
        //dispatches request to post reducer to create a post
        dispatch(createPost(postData));
        }
        //clears form after submit
        clear();
    };

    //clears form when clicking clear button
    const clear = () => {
        setCurrentId(null);
        setPostData({
            creator: '',
            title: '',
            message: '',
            tags: '',
            selectedFile: ''
        })
    };
    
    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">{currentId ? 'Editing' : 'Creating'} a Memory</Typography>
                <TextField 
                name="creator" 
                variant="outlined" 
                label="Creator" 
                fullWidth 
                value={postData.creator}
                onChange={(e) => setPostData({...postData, creator: e.target.value})} //allows data to persist only updated stated target, in this case 'creator'
                />           
                <TextField 
                name="title" 
                variant="outlined" 
                label="Title" 
                fullWidth 
                value={postData.title}
                onChange={(e) => setPostData({...postData, title: e.target.value})} //allows data to persist only updated stated target, in this case 'title'
                />           
                <TextField 
                name="message" 
                variant="outlined" 
                label="Message" 
                fullWidth 
                value={postData.message}
                onChange={(e) => setPostData({...postData, message: e.target.value})} //allows data to persist only updated stated target, in this case 'message'
                />           
                <TextField 
                name="tags" 
                variant="outlined" 
                label="Tags" 
                fullWidth 
                value={postData.tags}
                onChange={(e) => setPostData({...postData, tags: e.target.value})} //allows data to persist only updated stated target, in this case 'tags'
                />
                <div className={classes.fileInput}>
                    <FileBase 
                        type="file"
                        multiple={false}
                        onDone={({base64}) => setPostData({...postData, selectedFile: base64})} //allows input of images and changes to base64
                    />
                </div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>      
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>      
            </form>
        </Paper>
    );
}

export default Form;