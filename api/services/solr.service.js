const solr = require('solr-client');

const githubService = () => {
    
    const search = (q, start, row) => {
        let clientGithub = solr.createClient({
            host: "68.183.18.81",
            port: 8983,
            core: 'github'
        });
        let query = clientGithub.createQuery()
                                    .q(q)
                                    .start(start)
                                    .rows(row);
        return new Promise(function(resolve, reject) {
                                        clientGithub.search(query,function(err,obj){
                                                if(err){
                                                    reject(err);
                                                }else{
                                                    resolve(obj);
                                                }
                                        });
                        }).catch((error) => {});
    }

    const getGithubSummary = async () => {
        console.log("GET SUMMARY");
        let res = await search('*:*', 0, 100);
        return res.response.docs;
    }

  return {
    getGithubSummary,
  };
};

module.exports = githubService;