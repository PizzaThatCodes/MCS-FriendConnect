node --es-module-specifier-resolution=node file.js
:restart
@timeout /t 3 /nobreak >nul
start run.bat
@echo restart complete
@goto exit

:error
@echo Please specify a program...
@goto exit

:exit