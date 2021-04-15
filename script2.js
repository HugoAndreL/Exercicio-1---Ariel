//SERVIÇO SAUDAÇÃO
var http = require('http');
var url = require('url');
const mat = require('./matematica');

//criando um objeto do tipo servidor
http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    var q = url.parse(req.url, true).query;
    switch ('op'){
        case "somar":
            var resultado = mat.soma(parseInt(q.n1), parseInt(q.n2));
        case "sub":
            var resultado = mat.sub(parseInt(q.n1), parseInt(q.n2));
        case "mult":
            var resultado = mat.mult(parseInt(q.n1), parseInt(q.n2));
        case "div":
            var resultado = mat.div(parseInt(q.n1), parseInt(q.n2));
        default:
            break;
    };
    var txt = resultado;
    var txt2 = resultado
    res.end(txt);
}).listen(4000);