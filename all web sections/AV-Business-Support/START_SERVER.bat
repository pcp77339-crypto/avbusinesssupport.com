@echo off
title AV Business Support - Local Server
color 0B

echo.
echo ==========================================
echo    AV BUSINESS SUPPORT - LOCAL SERVER
echo ==========================================
echo.

REM Check Python installation
python --version >nul 2>&1
if errorlevel 1 (
    echo Python is not installed or not added to PATH.
    echo.
    echo Please install Python from:
    echo https://www.python.org/downloads/
    echo.
    pause
    exit /b
)

echo Starting local server...
echo.
echo Website URL:
echo http://localhost:8000
echo.
echo IMPORTANT: Keep this window open while using the website.
echo Press CTRL+C to stop the server.
echo.

start "" http://localhost:8000
python -m http.server 8000

pause
