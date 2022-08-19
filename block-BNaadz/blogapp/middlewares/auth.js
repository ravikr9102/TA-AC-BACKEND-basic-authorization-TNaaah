module.exports = {
    loggedInUser: (req, res, next) => {
      if (req.session && req.session.userId) {
        next();
      } else {
        res.redirect('/users/login');
      }
    },
  };