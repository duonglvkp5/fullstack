const { getAllUser, createNewUser, updateUser, deleteUser } = require('../service/userApiService');

const readFunc = async (req, res) => {

    try {
        let data = await getAllUser();
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT,
        })
    } catch (e) {
        console.log(e)
    }
}
const createFunc = async (req, res) => {
    try {

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            EM: 'error from server',
            EC: '-1',
            DT: '',
        })
    }
}
const updateFunc = (req, res) => {
    try {

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            EM: 'error from server',
            EC: '-1',
            DT: '',
        })
    }
}
const deleteFunc = (req, res) => {
    try {

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            EM: 'error from server',
            EC: '-1',
            DT: '',
        })
    }
}
module.exports = {
    readFunc, createFunc, updateFunc, deleteFunc
}