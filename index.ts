import * as express from 'express'
import * as multer from 'multer'
import uploads from './upload'

const app = express();


app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.post('/', uploads.single('avatar'), (req, res) => {
    try {
        res.send('Arquivo enviado com sucesso: ' + req.file.filename);
    } catch (error) {
        console.log(error);
    }

})

app.listen(3000, function () {
    console.log('listening on port 3000!');
});