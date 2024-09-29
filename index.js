// const snakeNames = require ('snake-names')
// let namePicked =snakeNames.random()
// console.log ('You should name this snake:', namePicked)

// let femaleSnakeNames = snakeNames.female
// let randomIndex = Math.floor(Math.random() * femaleSnakeNames.lenght)
// console.log("A great female snake name is:", femaleSnakeNames[randomIndex])

let http = require ('http')
let server  = http.createServer(function(req, res){
    // this callback handles each incoming request
    res.write('<h1>Hola,FSD!</h1>')
    // This closes the connection
})

server.listen(3000, function (req, res) {
    console.log ('HOWDY')
})