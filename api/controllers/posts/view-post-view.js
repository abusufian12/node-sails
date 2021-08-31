//const Post = require("../../models/Post");

module.exports = {


  friendlyName: 'View post view',


  description: 'Display "Post view" page.',

  inputs: {
    id: {
      type: 'string',
      description: 'post id',
    }
  },

  exits: {

    success: {
      viewTemplatePath: 'pages/posts/post-view'
    }

  },


  

  fn: async function ({id}) {
    console.log(id);
    console.log(this.req.params.id);
    console.log(this.req.url);

    // var postRecord = await Post.findOne({ "id": this.req.params.id });
    var postRecord = await Post.findOne({ "id": id });
    console.log(postRecord);
    return {post: postRecord};

  }


};
