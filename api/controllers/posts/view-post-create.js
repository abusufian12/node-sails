module.exports = {


  friendlyName: 'View post create',


  description: 'Display "Post create" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/posts/post-create'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
