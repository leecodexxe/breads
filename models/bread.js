// 


const mongoose = require('mongoose')


const {Schema} = mongoose


const breadSchema = new Schema({
  name: { type: String, required: true },
  hasGluten: Boolean,
  image: { type: String, default: 'http://placehold.it/500x500.png'},
  // this id is associated with a document in the baker collection
  baker: {type: Schema.Types.ObjectID, ref: 'Baker'}
  }, {
    toJSON: {
      virtuals: true
    }
  })




  //helper methods

  //instance method
  breadSchema.methods.getBakedBy = function(){
    return `${this.name} was baked with love by ${this.baker.name}, who has been with us since ${this.baker.startDate.getFullYear()}.`
  }

  //static method

  breadSchema.statics.findBakersOtherBreads = function(bakersName){
    return this.find({baker: bakersName})
  }


const Bread = mongoose.model('Bread', breadSchema)

module.exports = Bread;