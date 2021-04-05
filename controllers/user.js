const { response } = require('express');

const userGet = (req, res = response) => {

    const params = req.query;

    res.status(403).json({
        msg: 'get API - controller',
        params
    });
}

const userPost = (req, res = response) => {

    const {name, edad} = req.body;

    res.status(201).json({
        msg: 'post API - controller',
        name,
        edad
    });
}

const userPut = (req, res = response) => {

    const id = req.params.id

    res.status(500).json({
        msg: 'put API - controller',
        id
    });
}

const userPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - controller'
    });
}

const userDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - controller'
    });
}



module.exports = {
    userGet,
    userPost,
    userPatch,
    userPut,
    userDelete
}