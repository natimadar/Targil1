# שלב 1: בסיס
FROM node:20

# שלב 2: תיקיית עבודה
WORKDIR /app

# שלב 3: העתקת package.json
COPY package*.json ./

# שלב 4: התקנת חבילות
RUN npm install

# שלב 5: העתקת כל הקוד
COPY . .

# שלב 6: בנייה של הפרויקט
RUN npm run build

# שלב 7: התקנת שרת פשוט להצגת האתר
RUN npm install -g serve

# שלב 8: פורט
EXPOSE 3000

# שלב 9: הרצה
CMD ["serve", "-s", "dist", "-l", "3000"]