module.exports = {
  apps: [
    {
      name: "watcher",
      script: "yarn run build && yarn run start",
    },
    {
      name: "prices",
      script: "yarn run update_prices",
      cron_restart: "0 * * * *",
      instances: 1,
    },
  ],
};
