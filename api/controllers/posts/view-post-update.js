module.exports = {


  friendlyName: 'Post-Store',


  description: 'Store User Post.',


  extendedDescription: `Store User Post`,


  inputs: {

    id: {
      required: true,
      type: 'string',
      description: 'post id',
    },
    
    emailAddress: {
        required: true,
        type: 'string',
        isEmail: true,
        description: 'user email address as a username',
        extendedDescription: 'Must be a valid email address.',
      },

    postTitle: {
      required: true,
      type: 'string',
      maxLength: 200,
      example: 'post title',
      description: 'post title'
    },

    postDescription:  {
      required: true,
      type: 'string',
      example: 'post description',
      description: 'post description',
    }

  },


  exits: {

    success: {
      description: 'New post created successfully.'
    },

    invalid: {
      responseType: 'badRequest',
      description: 'The provided email, title and/or description are invalid.',
      extendedDescription: 'If this request was sent from a graphical user interface, the request '+
      'parameters should have been validated/coerced _before_ they were sent.'
    },

  },

  fn: async function ({id, emailAddress, postTitle, postDescription}) {
    var newEmailAddress = emailAddress.toLowerCase();
     console.log(emailAddress);
       var newPostRecord = await Post.updateOne({ "_id": id })
       .set({
        postTitle:postTitle,
        postDescription:postDescription
       });
 
     return this.res.redirect('/posts');
  }

//   fn: async function (req, res) {
//     console.log(req.emailAddress);
//     let emailAddress = req.emailAddress;
//     let postTitle = req.postTitle;
//     let postDescription = req.postDescription;
//     var newEmailAddress = emailAddress.toLowerCase();
//     console.log(emailAddress);
//     var newPostRecord = await Post.create(_.extend({
//       emailAddress: newEmailAddress,
//       postTitle,
//       postDescription,
//       tosAcceptedByIp: this.req.ip
//     }));

//     return this.res.redirect('/posts');
//   }


};
