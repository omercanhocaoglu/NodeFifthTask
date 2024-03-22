const http = require('http');
const server = http.createServer( (req, res) => {
    const url = req.url;
    if ( url === "/" ) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(`<h2> NodeJS Sayfasina hosgeldiniz </h2>`);
    } else if ( url === "/hakkimda" ) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(`<h2> Hakkimda Sayfasi </h2>`);
    } else if ( url === "/iletisim" ) {
       res.writeHead(200, { 'Content-Type': 'text/html' });
       res.write(`<h2> iletisim Sayfasi </h2>`) 
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write(`<h2> 404 Not Found </h2>`);
    };
    
    res.end();
} );

const port = 5000;
server.listen( port, () => {
    console.log(`Sonucu port ${port}'de başlatıldı.`)
});