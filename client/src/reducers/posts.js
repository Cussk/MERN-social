export default (posts = [], action) => {
    switch(action.type) {
        case "FETHCH ALL":
            return action.payload;
        case "CREATE":
            return posts;
        default:
            return posts;
    }
}