const solrService = require('../services/solr.service');

const GithubController = () => {

  const getSummary = async (req, res) => {
    return solrService().getSummary()
  }

  return {
    getSummary,
  };
};

module.exports = GithubController;
