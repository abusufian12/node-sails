module.exports = {


  friendlyName: 'View post',


  description: 'Display "Post" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/post'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
