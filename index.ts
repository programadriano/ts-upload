import * as bodyparser from 'body-parser';
import * as express from 'express'
import * as multer from 'multer'
import uploads from './upload'

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.post('/', uploads.single('avatar'), (req, res) => {


    if (!req.file) {
        console.log("No file received");
        return res.send({
            success: false
        });

    } else {
        console.log('file received');
        return res.send({
            success: true
        })
    }
})

app.listen(3000, function () {
    console.log('listening on port 3000!');
});