const express = require('express');
const app = express();
const port = 4000;

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());

require('./connect');
const User = require('./model/user');
const Admin = require('./model/admin');
const Service = require('./model/service');

const bcrypt = require('bcrypt');
const saltRounds = 10;

const jwt = require('jsonwebtoken');

app.use(express.static('uploads'));

const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './uploads')
    },
    filename: function(req, file, cb){
        cb(null, file.originalname)
    }
});

const upload = multer({storage});

app.get('/', (req, res) => {
    res.send('<h2>Home page of server app</h2>');
})


// admin api
app.post('/admin/register', upload.single('img'), async(req, res) => {
    const {name, email, password, conpassword, mobile} = req.body;

    const preAdmin = await Admin.findOne({email})
    if(!preAdmin){
        const photo = typeof req.file != 'undefined' ? req.file.filename: null;
        
        const hashPass = await bcrypt.hash(password, saltRounds)
        const hashConPass = await bcrypt.hash(conpassword, saltRounds)

        const adminData = new Admin({name, email, password: hashPass, conpassword: hashConPass, mobile, img: photo})
        const saveData = await adminData.save()
        res.send({msg:'Admin registered successfully', data: saveData});
    }
    else {
        res.send({msg:'Already registered with this id'});
    }
});

app.post('/admin/login', async(req, res) => {
    const {email, password} = req.body;

    const findAdmin = await Admin.findOne({email})
    if(findAdmin !== null){
        const passMatch = await bcrypt.compare(password, findAdmin.password)
        
        if(passMatch === true && email === findAdmin.email){
            var token = jwt.sign({findAdmin}, 'sdfghjkjhgf', {expiresIn: '1hr'})
            res.send({msg: 'Admin logged in successfully', adminData: findAdmin, token});
        }
        else {
            res.send({msg: 'Invalid admin id or password'});
        }
    }
    else {
        res.send({msg: 'Not a admin user'});
    }
});


// user api
app.post('/user/register', async(req, res) => {
    const {name, email, password, conpassword, mobile, address} = req.body;

    const preUser = await User.findOne({email})
    if(!preUser){
        const userData = new User({name, email, password, conpassword, mobile, address});
        const saveData = await userData.save()
        res.send({msg:'Registered successfully', data:saveData});
    }
    else {
        res.send({msg:'Already registered with this id'})
    }
});

app.get('/users/data', async(req, res) => {
    const data = await User.find()
    res.send(data);
});

app.delete('/delete/:id', async(req, res) => {
    await User.deleteOne({_id: req.params.id})
    res.send({msg:'User deleted'});
});

app.get('/user/:id', async(req, res) => {
    const userData = await User.findOne({_id: req.params.id})
    res.send(userData);
});

app.put('/update/user/:id', async(req, res) => {
    const {name, email, password, conpassword, mobile, address} = req.body;
    const updateData = await User.findByIdAndUpdate({_id: req.params.id},{$set:{name, email, password, conpassword, mobile, address}})
    res.send({msg:'User data updated'});
});

app.post('/user/login', async(req, res) =>{
    const {email, password} = req.body;

    const findUser = await User.findOne({email})
    if(findUser){
        if(findUser.email === email && findUser.password === password){
            var token = jwt.sign({findUser}, 'dfghjkhgfd', {expiresIn: '1hr'});
            res.send({msg:'User logged in successfully', userData: findUser, token});
        }
        else {
            res.send({msg:'Invalid user id or password'});
        }
    }
    else {
        res.send({msg:'Not a registered id'});
    }
});


// service api
app.post('/service/records', async(req, res) => {
    const {name, service, date, address, password, bookingDate} = req.body;

    const serviceData = new Service({name, service, date, address, password, bookingDate})
    const saveData = await serviceData.save()
    res.send({msg:'Service booked successfully', data: saveData});
});

app.get('/service/data', async(req, res) => {
    const serviceData = await Service.find()
    res.send(serviceData);
});

app.listen(port, () => {
    console.log('server app is running on port -- http://localhost:4000/');
})