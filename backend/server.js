import express from 'express';

const app = express();
const PORT = 8080;

app.get('/', (req, res)=>{
    console.log('Server rodando!!')
});


app.listen(PORT, ()=>{
    console.log(`Servidor estar rodando em ${PORT}`);
})

