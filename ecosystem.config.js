module.exports = {
  apps: [
    {
      name: "watcher",
      script: "yarn run start",
    },
    {
      name: "prices",
      script: "yarn run update_prices",
      cron_restart: "0 * * * *",
      instances: 1,
      exec_mode: "fork",
      autorestart: false,
    },
  ],
};
