import PostMessage from '../models/postMessage.js'

//logic for all routes
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