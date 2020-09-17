const solrService = require('../services/solr.service');

const GithubController = () => {

  const getGithubSummary = async (req, res) => {
    const summary = await solrService().getGithubSummary()
    return res.status(200).json(summary);
  }

  return {
    getGithubSummary,
  };
};

module.exports = GithubController;
