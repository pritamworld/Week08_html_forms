const express = require('express');
const multer = require('multer');
const path = require('path')

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('views'));
//app.use("/profile", express.static('public'));
app.use(express.static('public'));

// multer requires a few options to be setup to store files with file extensions
// by default it won't store extensions for security reasons
const storage = multer.diskStorage({
    destination: "./public/photos/",
    filename: function (req, file, cb) {
      // we write the filename as the current date down to the millisecond
      // in a large web service this would possibly cause a problem if two people
      // uploaded an image at the exact same time. A better way would be to use GUID's for filenames.
      // this is a simple example.
      const newFileName = `PP_${Date.now()}${path.extname(file.originalname)}`;
      cb(null, newFileName);
    }
});
  
// tell multer to use the diskStorage function for naming files instead of the default.
const upload = multer({ storage: storage });

app.get('/', (req, res) => {
    res.send('Hello World');
    // + JSON.stringify(req.query));
});

app.post('/login', (req, res) => {
    console.log(req.body);
    res.send('Login Success');
})

app.post('/register-user', upload.single("photo"), (req, res) => {
    const formData = req.body;
    const formFile = req.file;
    
    const dataReceived = "Your submission was received:<br/><br/>" +
    "Your form data was:<br/>" + JSON.stringify(formData) + "<br/><br/>" +
    "Your File data was:<br/>" + JSON.stringify(formFile) +
    "<br/><p>This is the image you sent:<br/><img src='/photos/" + formFile.filename + "'/>";
    res.send(dataReceived);
})

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});