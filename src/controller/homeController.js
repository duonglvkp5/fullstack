const { createNewUser, getUserList, deleteUser, getUserById, updateUserInfor } = require('../service/userService');
const handleHelloWord = (req, res) => {
    return res.render("home.ejs");
}
const handleUserPage = async (req, res) => {
    let userList = await getUserList();
    return res.render("user.ejs", { userList });
}
const handleCreateNewUser = (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    let username = req.body.username;
    // A simple SELECT query
    createNewUser(email, password, username);
    return res.redirect("/user");
}
const handleDeleteUser = async (req, res) => {
    await deleteUser(req.params.id);
    return res.redirect("/user");
}
const getUpdateUser = async (req, res) => {
    let id = req.params.id;
    let user = await getUserById(id)
    let userData = {}
    if (user && user.length > 0) {
        userData = user[0];
    }
    return res.render("user-update.ejs", { userData });
}
const handleUpdateUser = async (req, res) => {
    let email = req.body.email;
    let username = req.body.username;
    let id = req.body.id;
    await updateUserInfor(email, username, id);
    return res.redirect("/user");
}
module.exports = {
    handleHelloWord, handleUserPage, handleCreateNewUser, handleDeleteUser, getUpdateUser, handleUpdateUser
}
