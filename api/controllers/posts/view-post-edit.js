module.exports = {


  friendlyName: 'View post edit',


  description: 'Display "Post edit" page.',

  inputs: {
    id: {
      type: 'string',
      description: 'post id',
    }
  },

  exits: {

    success: {
      viewTemplatePath: 'pages/posts/post-edit'
    }

  },


  fn: async function ({id}) {

    console.log(id);
    console.log(this.req.url);

    // var postRecord = await Post.findOne({ "id": this.req.params.id });
    var postRecord = await Post.findOne({ "id": id });
    console.log(postRecord);
    return {post: postRecord};

  }


};
