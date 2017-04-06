@echo off  
%~d0
cd %~dp0
cd ../
@echo %~dp0  
fis3 release -w -c -d ./


 