import express from 'express';
import {
    createProduct,
    deleteProduct,
    getProduct,
    getProducts,
    updateProduct
} from "../services/productService.js";

import Product from '../models/product';

const router =  express.Router();


// GET
router.get("/", (req, res)=>{
    const getterProducts = getProducts();
    res.json(getterProducts);
});
router.get("/:id", (req, res)=>{
    const id = Number(req.params.id);
    const getterProduct = getProduct(id);
    res.json(getterProduct);
});


//POST
router.post("/", (req, res)=>{
    try{
        const productData = req.body;
        const newProduct = createProduct(productData);
        res.status(201).json(newProduct);
    } catch(error) {
        res.status(500).json({message: 'Erro ao criar produto', error: error.message });
    }
    
});


//DELETE
router.delete("/:id", (req, res)=>{
    const id = Number(req.params.id);
    const deletedProduct = deleteProduct(id);
    res.json(deletedProduct);
});


//UPDATE
router.patch("/:id", (req, res)=>{
    try{    
        const id = Number(req.params.id);
        const productData = req.body;
        let updatedProduct = updateProduct(id, productData);
        res.json(updatedProduct);
    }catch(error){
        res.status(500).json({message: 'Erro ao atualizar produto', error: error.message});
    }
});


export default router;
