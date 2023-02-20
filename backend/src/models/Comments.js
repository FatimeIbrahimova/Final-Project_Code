const mongoose = require ('mongoose');
const {Schema} = mongoose;
const commentSchema = new Schema (
  {
    commentProfile:{
        type:String,
      },
      commentUser:{
        type:String
      },
      commentDate:{
        type:String
      },
      comment:{
        type:String
      }
  },
  {timestamps: true}
);
const Comments = mongoose.model('comments', commentSchema);
module.exports = Comments;