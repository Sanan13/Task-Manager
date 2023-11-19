const mongoose = require('mongoose')

const connecttoDB = (url)=>{
return mongoose.connect(url);
}

module.exports = connecttoDB
