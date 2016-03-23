module.exports = function(deployTarget) {  
  return {
    pagefront: {
      app: 'ember-hitlist',
      key: process.env.PAGEFRONT_KEY
    }
  };
};
