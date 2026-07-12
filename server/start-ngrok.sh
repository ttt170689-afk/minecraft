#!/usr/bin/env bash
set -e
cd "$(dirname "$0")"

echo "============================================"
echo " BrowserCraft + ngrok"
echo "============================================"
echo "Сначала в другом терминале: npm start"
echo "Токен 1 раз: ngrok config add-authtoken YOUR_TOKEN"
echo "https://dashboard.ngrok.com/get-started/your-authtoken"
echo "============================================"

if ! command -v ngrok >/dev/null 2>&1; then
  if [ -x ./ngrok ]; then
    NGROK=./ngrok
  elif [ -x /tmp/ngrok ]; then
    NGROK=/tmp/ngrok
  else
    echo "ngrok не найден. Установи: https://ngrok.com/download"
    exit 1
  fi
else
  NGROK=ngrok
fi

exec "$NGROK" http 8080
