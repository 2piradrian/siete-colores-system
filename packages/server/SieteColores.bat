@echo off

REM Lanzador para sietecolores-sys

REM Ejecutar "npm start" en la carpeta server
cd /d "%~dp0siete-colores-backend"
start cmd /k npm start

REM Esperar unos segundos para que el servidor se inicie
timeout /t 10

REM Ejecutar "npm start" en la carpeta client
cd /d "%~dp0siete-colores-system"
start cmd /k npm start

REM Abrir el navegador en "localhost:3000"
start "" "http://localhost:3000"