FROM node:20-alpine

WORKDIR /app

# 1) Ставим зависимости
COPY package*.json ./
RUN npm ci

# 2) Копируем код
COPY . .

# 3) Генерим Prisma client (нужно, чтобы он был в node_modules/.prisma)
RUN npx prisma generate
RUN npm run build

# порт
EXPOSE 3000

CMD ["sh", "-c", "npx prisma migrate deploy && npm run start:prod"]
