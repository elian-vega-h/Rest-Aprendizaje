import { request, response } from "express";



const usuarioGet=(req= request, res= response) => {
    
    const query= req.query;
    res.json({
        msg:'get API - control',
        query
    });
}

const usuarioPost=(req, res= response) => {
    
    const body = req.body;
    res.json({
        msg:'post API - control',
        body
    });
};

const usuarioPut=(req, res= response) => {
    
    const {id} = req.params.id;
    res.json({
        msg:'put API - control'
    });
}

const usuarioDelete=(req, res= response) => {
    res.json({
        msg:'delete API - control'
    });
}

export {usuarioGet, usuarioPost, usuarioPut, usuarioDelete}



