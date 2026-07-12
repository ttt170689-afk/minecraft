@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo ============================================
echo  BrowserCraft PUBLIC (сначала сервер)
echo ============================================
echo Установи Node.js: https://nodejs.org
echo.
if not exist node_modules (
  echo npm install...
  call npm install
)
echo.
echo Запускаю сервер на http://localhost:8080
echo ВТОРОЕ окно: start-ngrok.bat  (после authtoken)
echo ============================================
call npm start
