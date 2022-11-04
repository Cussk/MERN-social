import mongoose from 'mongoose';
import PostMessage from '../models/postMessage.js'

//logic for all routes

//FETCH
export const getPosts = async (req, res) => {
    //tries to find any existing posts
    try {
        const postMessages = await PostMessage.find(); 
        //when successful returns 200 status code and json object posts
        res.status(200).json(postMessages);
    } 
    //if request fails returns 404(not found) status code and error message
    catch (error) {
        res.status(404).json({message: error.message});
    }
}

//CREATE
export const createPost = async (req, res) => {
    const {title, message, selectedFile, creator, tags} = req.body;

    //constant for newly created posts
    const newPostMessage = new PostMessage({title, message, selectedFile, creator, tags});

    try {
        //saves new post
        await newPostMessage.save();

        //returns 201(successful creation) and object post
        res.status(201).json(newPostMessage);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}

//UPDATE
export const updatePost = async (req,res) => {
    //requests parameters for specific id
    const {id: _id} = req.params;

    //requests post content
    const post = req.body;

    //if not valid mongoose id return 404 error
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');

    //updates post in database by finding its id
     const updatedPost = await PostMessage.findByIdAndUpdate(_id, {...post, _id}, {new: true});

     //returns updated post json object
     res.json(updatedPost);
}

// DELETE
export const deletePost = async (req,res) => {
    const {id} = req.params;

    //if not valid mongoose id return 404 error
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');

    //deletes post based on id
    await PostMessage.findByIdAndRemove(id);

    //returns message confirming post deletion
    res.json({message: 'Post deleted successfully'})
}

//LIKES
export const likePost = async (req,res) => {
    const {id} = req.params;

    //if not valid mongoose id return 404 error
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');

    //find specific post
    const post = await PostMessage.findById(id);
    //updated post with increased like count
    const updatedPost = await PostMessage.findByIdAndUpdate(id, {likeCount: post.likeCount + 1}, {new: true});

    //returns post with updated like count
    res.json(updatedPost);
}
