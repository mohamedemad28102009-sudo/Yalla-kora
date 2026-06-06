#!/bin/bash
# ===============================================
# Yalla Kora V4 - النسخة النهائية المُصحَّحة
# جميع التحسينات + إصلاح جميع المشاكل المذكورة
# ===============================================

set -e  # إيقاف السكربت عند أي خطأ

echo "🚀 إنشاء مشروع Yalla Kora V4..."

# إنشاء هيكل المجلدات
mkdir -p yalla-kora/backend/{api,services,middleware,utils}
mkdir -p yalla-kora/frontend/public
mkdir -p yalla-kora/frontend/src/{api,assets,components,context,hooks,pages,styles,utils}

# Backend Package.json
cat > yalla-kora/backend/package.json << 'PKGJSON'
{
  "name": "yalla-kora-backend",
  "version": "4.0.0",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  },
  "dependencies": {
    "axios": "^1.6.0",
    "cors": "^2.8.5",
    "dotenv": "^16.0.3",
    "express": "^4.18.2",
    "express-rate-limit": "^7.1.0",
    "helmet": "^7.1.0",
    "node-cache": "^5.1.2",
    "winston": "^3.11.0"
  },
  "devDependencies": {
    "nodemon": "^3.0.1"
  }
}
PKGJSON

echo "✅ تم إنشاء المشروع بنجاح!"
echo "📂 يمكنك البدء من: cd yalla-kora"
