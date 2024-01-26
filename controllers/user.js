const { User } = require('../models');
const { handleResponse, handleError } = require("../utils/responses");


exports.getUsersofAgent = async (req, res) => {  
    const agent = req.agent;
    const users = await User.findAll({
        where: {
            agent_id: agent.id
        }
    });
    handleResponse(res, {users: users})
       
}