const apiSideBar = require('./api-sidebar.json');

// Without groups
module.exports = {
  themeConfig: {
    sidebar: [...apiSideBar]
  }
};
