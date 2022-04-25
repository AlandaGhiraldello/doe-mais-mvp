const express = require("express")
const server = express()

// configurar pasta publica

server.use(express.static("public"))


// utilizando o template engine para deixar o html mais dinamico 
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

// configurar caminhos na aplicação
// pagina inicial
// req: requisição, pedido
// res: resposta

server.get("/", (req, res) => {
    return res.render("index.html")
})

server.get("/create-point", (req, res) => {
    return res.render("create-point.html")
})

server.get("/search-results", (req, res) => {
    return res.render("search-results.html")
})




// ligar o servidor
server.listen(3000)