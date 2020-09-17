const publicRoutes = {
  'POST /user': 'UserController.register',
  'POST /register': 'UserController.register', // alias for POST /user
  'POST /login': 'UserController.login',
  'POST /validate': 'UserController.validate',
  'GET /test': 'UserController.test',
  'GET /github/summary': 'GithubController.getGithubSummary'
};

module.exports = publicRoutes;
