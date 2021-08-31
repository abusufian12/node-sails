module.exports = {


  friendlyName: 'View post index',


  description: 'Display "Post index" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/posts/post-index'
    }

  },


  fn: async function (req, res) {
    
    let allPosts = await Post.find();
    // let allPosts = await Post.findOne({
    //   or: [
    //     { emailAddress: newEmailAddress },
    //     { postTitle: postTitle }
    //   ]
    // });

    //console.log(allPosts);
    // Respond with view.
    return {allPosts: allPosts};

  }


};
