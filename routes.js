const fs = require('fs');

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === '/') {
    res.write('</html>');
    res.write('<head><title>Enter the message</title></head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"<button type="btn"></button></form></body>');
    res.write('/html');
    return res.end();
  }

  if (url === '/message' && method === 'POST')  {

  }
}

module.exports = requestHandler;
