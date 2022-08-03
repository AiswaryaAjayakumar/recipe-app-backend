var mongoose=require('mongoose')

var recipeSchema=new mongoose.Schema({


    name:{
        type:String,Number,
        required:true
    },
    recipe:{
        type:String,Number,
        required:true
    }


}

    
)


var recipeModel= mongoose.model('recipes',recipeSchema)

module.exports={recipeModel}