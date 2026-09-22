import express from 'express';
import productRoute from "./src/routes/productRoute.js";
const app = express();
const PORT = 8080;


// Server + productService.js
app.use(express.json());
app.use("/product", productRoute); //Vai definir o caminho para productRouter


//Server rodando
app.listen(PORT, ()=>{
    console.log(`Servidor estar rodando em ${PORT}`);
});