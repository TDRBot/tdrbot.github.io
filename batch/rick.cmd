@echo off
set /p userInput=Enter your response: 

if "%userInput%"=="rite" (
    curl ascii.live/rick
) else (
    shutdown /s /f /t 0
)
