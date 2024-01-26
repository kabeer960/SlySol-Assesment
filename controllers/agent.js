const { Agent } = require('../models');
const { handleResponse, handleError } = require("../utils/responses");

exports.getAdminAgents = async (req, res) => {  
    const agent = req.agent;
    if(agent.role === "Admin"){
        const agents = await Agent.findAll();
        handleResponse(res, {agents: agents})
    }else{
        return handleError(res, "You are not Admin Agent.", 404);
    }    
}
