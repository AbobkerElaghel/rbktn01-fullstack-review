const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');
mongoose.Promise = global.Promise;
let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  id:{ //repo ID
    type:Number,

},
  name:String, // the name of the repo
  full_name:String, //the owner of the repo //login
  html_url:String,   //the link to the repo
  description:String, //description for the repo
});

let Repo = mongoose.model('Repo', repoSchema);

let _find = callback => {
  Repo.find().limit(2).exec((err,data) => {
    if(err)
    callback(err,null);
    else{

      callback(null,data)}

  } );
}

let save = (repoObj) => {

  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  // repoObj should contian the object repo that we want to save on our database, it should be the exact same Structure as the schema above
  Repo.create(repoObj).then( function(e){console.log('SAVED TO DATABASE')} ); // this well return a promis//

}

module.exports.save = save;
module.exports._find = _find;