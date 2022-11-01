

export default (posts = [], action) => {
    switch(action.type) {
        case "FETHCH ALL":
            return action.payload;
        case "CREATE":
            return [...posts, action.payload]; //spreads existing posts and new one
        default:
            return posts;
    }
}