const bcrypt = require('bcryptjs');
const mysql = require('mysql2/promise');
const bluebird = require('bluebird');
// create the connection, specify bluebird as Promise

const salt = bcrypt.genSaltSync(10);

const hashUserPassword = (userPassword) => {
    let hashPassword = bcrypt.hashSync(userPassword, salt);
    return hashPassword;
}
const createNewUser = async (email, password, username) => {
    let hashPass = await hashUserPassword(password);
    const connection = await mysql.createConnection({ host: 'localhost', user: 'root', database: 'fullstack', Promise: bluebird });
    try {
        const [rows, fields] = await connection.execute('INSERT INTO users (email, password, username) VALUES (?, ?, ?)', [email, hashPass, username]);
        return rows;
    } catch (error) {
        console.log("check: ", error)
    }
}
const getUserList = async () => {
    const connection = await mysql.createConnection({ host: 'localhost', user: 'root', database: 'fullstack', Promise: bluebird });
    let users = [];
    try {
        const [rows, fields] = await connection.execute('Select * from users ');
        return rows;
    } catch (error) {
        console.log("check: ", error)
    }
}
const deleteUser = async (id) => {
    const connection = await mysql.createConnection({ host: 'localhost', user: 'root', database: 'fullstack', Promise: bluebird });
    try {
        const [rows, fields] = await connection.execute('DELETE FROM users WHERE id = ?', [id]);
        return rows;
    } catch (error) {
        console.log("check: ", error)
    }
}
const getUserById = async (id) => {
    const connection = await mysql.createConnection({ host: 'localhost', user: 'root', database: 'fullstack', Promise: bluebird });
    try {
        const [rows, fields] = await connection.execute('Select * from users WHERE id = ?', [id]);
        return rows;
    } catch (error) {
        console.log("check: ", error)
    }
}
const updateUserInfor = async (email, username, id) => {
    const connection = await mysql.createConnection({ host: 'localhost', user: 'root', database: 'fullstack', Promise: bluebird });
    try {
        const [rows, fields] = await connection.execute('UPDATE users SET email = ?, username = ? WHERE id = ?', [email, username, id]);
        return rows;
    } catch (error) {
        console.log("check: ", error)
    }
}
module.exports = { createNewUser, getUserList, deleteUser, getUserById, updateUserInfor }