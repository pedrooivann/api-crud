import express from 'express';
import {
    createProduct,
    deleteProduct,
    getProduct,
    getProducts,
    updateProduct
} from "../services/productService.js";


const router =  express.Router();


// Seria utilizado Async e Await caso fosse feito com Banco de Dados: Postgre, Mongo, Mysql.. etc

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

        const newProduct = createProduct(
            productData.name,
            productData.price);

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

        const updatedProduct = updateProduct(
            id, 
            productData.name, 
            productData.price);
            
        res.json(updatedProduct);
    }catch(error){
        res.status(500).json({message: 'Erro ao atualizar produto', error: error.message});
    }
});


export default router;
