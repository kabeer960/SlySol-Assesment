var jwt = require("jsonwebtoken");
const { handleResponse, handleError } = require("../utils/responses");
const { Agent } = require('../models');

exports.login = async (req, res) => { 
    const body = req.body;
    console.log(body.email)
    const agent = await Agent.findOne({
        where: {
            email: body.email
        }
    });
    if(agent){
        if(body.password !== agent.password){
            return handleError(res, "Invalid Password!", 401)
        }
        var token = jwt.sign({ id: agent.id }, process.env.JWT_SECRET, {
            expiresIn: 86400, // 24 hours
        });
        if(token){
            handleResponse(res, {
                agent,
                accessToken: token,
            })
        }
    }else{
        return handleError(res, "Agent Not found.", 404);
    }
}