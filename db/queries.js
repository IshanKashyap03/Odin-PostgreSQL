const pool = require("./pool");

async function getAllUsernames(){
    const {rows} = await pool.query("SELECT * FROM usernames");
    return rows;
}

async function getFilteredUsernames(searchQuery){
    const {rows} = await pool.query("SELECT * FROM usernames WHERE username LIKE ($1)", [`%${searchQuery}%`]);
    return rows;
}

async function insertUsername(username){
    await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
}

async function deleteUsernames(){
    await pool.query("DELETE FROM usernames");
}

module.exports = {
    getAllUsernames,
    insertUsername,
    deleteUsernames,
    getFilteredUsernames
}

