let express = require("express");
const app = express();
app.use(express.static('public'));
let users = require('./state').users;


app.use(function (request, response, next) {
    if(request.path === '/user'){
    return response.send(users);
    } else if(request.path === '/user/1') {
        return response.send(users[0]);
    }else{
        return response.send('<h1>Nope!<h1>')
    }
});



app.listen(3002, (err) => {
    if (err) {
        return console.log("Error", err);
    }
    console.log("Web server is now living in apartment 3002");
});
