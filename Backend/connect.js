const mongoose = require('mongoose');
var dbname = 'INANCE';

mongoose.connect('mongodb://127.0.0.1:27017/'+dbname)
.then(() => {
    console.log('database is connected successfully');
})
.catch(() => {
    console.log('database is not connected');
})