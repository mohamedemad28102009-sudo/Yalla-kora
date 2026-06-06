require('dotenv').config();
const express = require('express');
const rateLimit = require('express-rate-limit');
const securityMiddleware = require('./middleware/security');
const footballRouter = require('./api/football');
const newsRouter = require('./api/news');
const searchRouter = require('./api/search');
const sseRouter = require('./api/sse');
const logger = require('./utils/logger');

// تحذيرات بدلاً من إيقاف السيرفر
if (!process.env.FOOTBALL_API_KEY) {
  logger.warn('⚠️ FOOTBALL_API_KEY غير موجودة - بعض الخدمات قد لا تعمل');
}
if (!process.env.NEWS_API_KEY) {
  logger.warn('⚠️ NEWS_API_KEY غير موجودة - خدمة الأخبار معطلة');
}

const app = express();

// الأمان
app.use(securityMiddleware);
app.use(express.json());

// Rate limiting
const limiter = rateLimit({
  windowMs: 60 * 1000, // دقيقة
  max: 100,            // 100 طلب في الدقيقة كحد أقصى
  message: { error: 'تم تجاوز الحد الأقصى للطلبات. حاول مرة أخرى لاحقاً.' }
});
app.use('/api', limiter);

// Routes
app.use('/api/football', footballRouter);
app.use('/api/news', newsRouter);
app.use('/api/search', searchRouter);
app.use('/api/sse', sseRouter);

// Error handling
app.use((err, req, res, next) => {
  logger.error(err.stack);
  res.status(500).json({ error: 'حدث خطأ داخلي في الخادم' });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  logger.info(`✅ Yalla Kora V4 backend running on port ${PORT}`);
});

module.exports = app;
