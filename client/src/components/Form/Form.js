import React, {useState} from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from 'react-file-base64';
import useStyles from "./styles";

const Form = () => {
    const [postData, setPostData] = useState({
        creator: '',
        title: '',
        message: '',
        tags: '',
        selectedFile: ''
    });

    const classes = useStyles();

    const handleSubmit = () => {

    };

    const clear = () => {

    };
    
    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">Creating a Memory</Typography>
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