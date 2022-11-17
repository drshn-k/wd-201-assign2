const http = require('http');
const  fs = require('fs');

const home = fs.readFileSync('home.html');
const registration = fs.readFileSync('registration.html');
const project = fs.readFileSync('project.html');


const PORT = +process.argv[2].split('=')[1];

const server = http.createServer(function(req, res){
    console.log(req.url);
    switch(req.url){

        case "/home.html" :
            res.write(home)
             break;
        case "/project.html" :
            res.write(project)
             break;
        case "/registration.html" : 
        res.write(registration)
        break;
        default:
            

    }
    res.end()
});



server.listen(PORT || 5000)