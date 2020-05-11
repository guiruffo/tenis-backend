const express = require('express');
const server = express();
var tenis = [
    {id: 1, marca: 'nike', preco: 450.50, numero: 42},
    {id: 2, marca: 'adidas', preco: 350.90, numero: 44},
    {id: 3, marca: 'all star', preco: 50.00, numero: 40},
];

server.use(express.json());
server.get('/modelos', function(request, response){
    return response.json(tenis);
})

server.get('/modelos/:id', function(request, response){
    const id = request.params.id;
    const modelos = tenis.filter(m => m.id == id);
    return response.json(modelos);
})

server.post('/modelos', function(request, response){
    const modelos = request.body;
    tenis.push(modelos);
    return response.status(201).send();
})

server.delete('/modelos/:id', function(request, response){
    const id = request.params.id;
    tenis = tenis.filter(m => m.id != id);
    return response.status(200).send();
})
server.put('/modelos/:id', function(request, response){
    const id = request.params.id;
    const modelos = request.body;

    tenis.forEach(m =>{
        if(m.id == id) {
            m.marca = modelos.marca;
            m.preco = modelos.preco;
            m.numero = modelos.numero;
            return;
        }
    })
    return response.send();
})
server.listen(process.env.PORT || 3000);