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
    const body = req.body;

    //constant for newly created posts
    const newPost = new PostMessage(post);

    try {
        //saves new post
        await newPost.save();

        //returns 201(successful creation) and object post
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}