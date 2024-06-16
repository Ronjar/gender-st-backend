@echo off
set "SOURCE_DIR=..\gender-st-frontend\build"
set "TARGET_DIR=src\main\resources\frontend"

del /Q "%TARGET_DIR%\*"
xcopy /S /I /Y "%SOURCE_DIR%\*" "%TARGET_DIR%\"
echo Vorgang abgeschlossen.
pause >nul

echo Starte den Build-Prozess für das Backend-Projekt...
gradlew.bat shadowJar -PshadowJarConf=apply
pause >nul
pause >nul
