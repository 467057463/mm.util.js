module.exports = {
  apps : [
    {
      name: 'blog_front',
      // script: 'npm',
      // args: 'run start:prod',
      env: {
        "COMMON_VARIABLE": "true"
      },
      env_production: {
        "NODE_ENV": "production" // 环境变量
      }
    }
  ],

  deploy : {
    production : {
      user : 'root',
      host : '80.240.22.42',
      ref  : 'origin/master',
      repo : 'git@github.com:467057463/mm.util.git',
      path : '/var/www/mm.util',
      'pre-deploy-local': '',
      'post-deploy' : 'npm --production=false install && npm run docs:build',
      'pre-setup': '',
      "env": {
        "NODE_ENV": "production"
      }
    }
  }
};
