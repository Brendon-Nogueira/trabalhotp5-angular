/*const express = require('express');
const path = require('path');
const appName = 'trabalho1';
const app = express();

app.use(express.static(__dirname + `/dist/${appName}`))

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + `/dist/${appName}/index.html`))
});

app.listen(process.ENV.port || 8080)
*/



const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + '/dist/trabalho1'))

app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/dist/trabalho1/index.html');
})

app.listen(PORT,() => {
    console.log("Servidor iniciado na porta " + PORT);
})