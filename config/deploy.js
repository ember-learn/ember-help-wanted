module.exports = function(deployTarget) {  
  return {
    pagefront: {
      app: 'help-wanted',
      key: process.env.PAGEFRONT_KEY
    }
  };
};
