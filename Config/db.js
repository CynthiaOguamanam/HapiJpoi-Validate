const mongoose = require ('mongoose')

const url = "mongodb://localhost/myDataBase"
mongoose.connect(url).then(()=> {
    console.log('connected successfully')
}).catch((error)=> {
    console.log(error.message)
})

module.exports = mongoose;