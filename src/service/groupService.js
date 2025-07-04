import db from "../models/index";

const getGroup = async () => {
    try {
        let data = await db.Group.findAll({
            order: [['name', 'ASC']]
        });
        return {
            EM: 'Get group success',
            EC: 0,
            DT: data
        }
    } catch (error) {
        console.log(error)
        return {
            EM: 'error from services',
            EC: 1,
            DT: []
        }
    }
}
module.exports = {
    getGroup
}