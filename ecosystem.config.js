module.exports = {
  apps: [
    {
      name: 'cluster',
      script: 'dist/main.js',
      ignore_watch: ['node_modules', 'logs'],
      instances: 1,
      exec_mode: 'fork',
      watch: true,
    },
  ],

  deploy: {
    production: {
      user: 'SSH_USERNAME',
      host: 'SSH_HOSTMACHINE',
      ref: 'origin/master',
      repo: 'GIT_REPOSITORY',
      path: 'DESTINATION_PATH',
      'pre-deploy-local': '',
      'post-deploy':
        'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
    },
  },
};
