FROM node:20-alpine AS builder

WORKDIR /app

# Копируем только package.json сначала для кеширования зависимостей
COPY package.json package-lock.json ./
RUN npm ci

# Затем копируем остальные файлы, но исключаем ненужное
COPY . .

# Билдим приложение
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app

# Копируем только необходимые файлы
COPY --from=builder /app/package.json /app/package-lock.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/next.config.ts ./

ENV NODE_ENV=production
EXPOSE 3000

CMD ["npm", "run", "start"]