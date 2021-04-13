const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve('../public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.status(200).sendFile('index.html', {
    root: path.resolve('../public')
})});

// str.charCodeAt(0) -> Unicode value
// String.fromCharCode() -> back to a char
function rotate(s) {
//TODO:
    return s;
}

app.get('/encrypt', (request, response)  => {
    
    //TODO: var key = request.query.key;
    var plaintext = request.query.plaintext;
    var ciphertext = "";

    for(var n=0; n < plaintext.length; n++) {
        ciphertext += rotate(plaintext[n].toLowerCase())
    }

    response.status(200).send( ciphertext );
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
