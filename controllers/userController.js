const db = require("../db/queries");

async function usersListGet(req,res) {
    const searchQuery = req.query.search;
    let usernames;
    if(searchQuery){
        usernames = await db.getFilteredUsernames(searchQuery);
        console.log("Usernames: ", usernames);
    }else{
        usernames = await db.getAllUsernames();
        console.log("Usernames: ", usernames);
    }
    res.send("Usernames: " + usernames.map(user => user.username).join(", "));
}

async function usersCreateGet(req,res) {
    res.render('form');
}

async function usersCreatePost(req,res) {
    const {username} = req.body;
    await db.insertUsername(username);
    res.redirect('/');
}

async function usersDeleteGet(req, res) {
    await db.deleteUsernames();
    res.redirect('/');
}

module.exports = {
    usersListGet,
    usersCreateGet,
    usersCreatePost,
    usersDeleteGet
}