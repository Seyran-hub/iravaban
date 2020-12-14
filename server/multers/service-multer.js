const multer = require('multer');
const path = require('path')
const fs = require('fs');
let count

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const directoryPath = path.join('images');
        fs.readdir(directoryPath, function (err, files) {
            if (err) {
                return console.log('Unable to scan directory: ' + err);
            }
            cb(null, __dirname + '/../images/service')
        });

    },
    filename: function (req, file, cb) {
        if (req.method === 'POST') {
            cb(null, new Date().getTime().toString() + file.originalname)
        } else if (req.method === 'PUT') {
            cb(null, new Date().getTime().toString() + file.originalname)
        }
    }
});

var fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/svg') {
        cb(null, true);
    } else {
        cb(null, true); // false error depq
    }
};



const upload = multer({
    fileFilter: fileFilter,
    storage: storage
});

module.exports = upload;