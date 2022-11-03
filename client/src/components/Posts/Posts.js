import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";
import Post from "./Post/Post";
import useStyles from "./styles";

const Posts = ({setCurrentId}) => {
    const posts = useSelector((state) => state.posts);
    const classes = useStyles();

    console.log(posts);
    
    return (
        //if no posts to retrieve display loading spinner
        !posts.length ? <CircularProgress /> : (
            //else display grid of posts
            <Grid className={classes.container} container alignItems='stretch' spacing={3}>
                {/* display post array */}
                {posts.map((post) => (
                    <Grid key={post._id} item xs={12} sm={6}>
                        {/* display individual posts */}
                        <Post post={post} setCurrentId/>
                    </Grid>
                ))}   
            </Grid>
        )
    );
}

export default Posts;