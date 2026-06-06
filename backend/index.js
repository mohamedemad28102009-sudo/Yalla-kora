const app = require('./app');
const logger = require('./utils/logger');

const PORT = process.env.PORT || 3001;

if (require.main === module) {
  app.listen(PORT, () => {
    logger.info(`✅ Yalla Kora V4 backend running on port ${PORT}`);
  });
}

module.exports = app;
