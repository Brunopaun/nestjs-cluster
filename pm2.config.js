module.exports = {
  apps: [
    {
      name: 'cluster',
      script: 'dist/main.js',
      ignore_watch: ['node_modules', 'logs'],
      instances: 1,
      exec_mode: 'fork',
      watch: false,
      env: {
        PORT: 3001,
      },
    },
  ],
};
