@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo ============================================
echo  BrowserCraft + ngrok
echo ============================================
echo.
echo 1) В ЭТОМ окне должен быть запущен сервер?
echo    Если нет - сначала открой другое окно и:
echo       npm install
echo       npm start
echo.
echo 2) Нужен authtoken (1 раз):
echo       https://dashboard.ngrok.com/get-started/your-authtoken
echo       ngrok config add-authtoken ТВОЙ_ТОКЕН
echo.
echo Запускаю: ngrok http 8080
echo Скопируй https://....ngrok-free.app и кидай друзьям
echo Адрес в игре оставляй ПУСТЫМ
echo ============================================
echo.

where ngrok >nul 2>&1
if errorlevel 1 (
  if exist "%~dp0ngrok.exe" (
    "%~dp0ngrok.exe" http 8080
  ) else (
    echo [ОШИБКА] ngrok не найден.
    echo Скачай: https://ngrok.com/download
    echo Или: winget install ngrok.ngrok
    pause
    exit /b 1
  )
) else (
  ngrok http 8080
)

pause
