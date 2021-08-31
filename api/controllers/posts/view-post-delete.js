//const Post = require("../../models/Post");

module.exports = {


  friendlyName: 'post delete',


  description: 'Display "Post delete" page.',

  inputs: {
    id: {
      type: 'string',
      description: 'post id',
    }
  },

  exits: {

    success: {
      viewTemplatePath: 'pages/posts/post-index'
    }

  },


  

  fn: async function ({id}) {
    console.log(id);
    // console.log(this.req.params.id);
    // console.log(this.req.url);

    var deleteRecord = await Post.destroyOne({ "id": id });
    if (deleteRecord) {
        sails.log(`Deleted post with id: ${id}`);
      } else {
        sails.log(`The database does not have a post with id: ${id}`);
      }
    
      return this.res.redirect('/posts');  

  }


};
