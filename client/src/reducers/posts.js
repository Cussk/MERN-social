export default (posts = [], action) => {
    switch(action.type) {
        case "UPDATE": 
            // if the post id is equal to the updated post return the updated post, else return original post
            return posts.map((post) => post._id === action.payload._id ? action.payload : post);
        case "FETHCH ALL":
            return action.payload;
        case "CREATE":
            return [...posts, action.payload]; //spreads existing posts and new one
        default:
            return posts;
    }
}