# ⚽ Yalla Kora V4 - تطبيق كرة القدم الشامل

## نظرة عامة
تطبيق ويب حديث لعرض المباريات والأخبار الرياضية والترتيبات وتفاصيل الفرق. مبني بـ React + Node.js/Express.

## 🎯 الميزات الرئيسية
- ✅ عرض المباريات (اليوم، المباشرة، القادمة، المنتهية)
- ✅ جدول الترتيب والترتيب
- ✅ بيانات الفرق والمباريات الأخيرة
- ✅ أخبار كرة القدم
- ✅ بحث متقدم (فرق، بطولات، مباريات)
- ✅ تحديثات مباشرة SSE
- ✅ Rate limiting وأمان محسّن

## 📁 هيكل المشروع
```
yalla-kora/
├── backend/
│   ├── api/              # Routes API
│   ├── services/         # منطق البيانات
│   ├── middleware/       # Auth, validation, security
│   ├── utils/            # Helpers
│   ├── index.js          # Server main
│   └── package.json
└── frontend/
    ├── src/
    │   ├── components/   # React components
    │   ├── pages/        # صفحات التطبيق
    │   ├── api/          # API client
    │   ├── styles/       # CSS
    │   └── App.jsx
    ├── index.html
    └── package.json
```

## 🚀 البدء السريع

### Backend
```bash
cd yalla-kora/backend
npm install
cp .env.example .env
# ضع API keys في .env
npm run dev
```

### Frontend
```bash
cd yalla-kora/frontend
npm install
cp .env.example .env
npm run dev
```

الآن تطبيقك يعمل على `http://localhost:5173`

## 🔑 متطلبات API Keys
- **FOOTBALL_API_KEY**: من [api-football.com](https://api-football.com)
- **NEWS_API_KEY**: من [newsapi.org](https://newsapi.org)

## 📊 Endpoints الرئيسية
- `GET /api/football/matches/today` - مباريات اليوم
- `GET /api/football/matches/live` - المباريات المباشرة
- `GET /api/football/matches/upcoming?page=1&limit=10` - المباريات القادمة
- `GET /api/football/standings/:leagueId` - جدول الترتيب
- `GET /api/football/team/:teamId` - بيانات الفريق
- `GET /api/news/football` - أخبار كرة القدم
- `GET /api/search?q=query&type=team` - البحث

## 🛡️ الأمان
- Rate limiting: 100 طلب/دقيقة
- CORS مُحمَّي
- Helmet لـ HTTP headers

## 📝 الملاحظات
- جميع الاستجابات مُخزَّنة في الذاكرة (caching)
- معالجة الأخطاء شاملة
- واجهة مستخدم RTL (العربية)

## 📄 الترخيص
MIT
