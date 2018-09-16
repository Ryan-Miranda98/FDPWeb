@ECHO OFF
SET /P message=Please enter commit message:
ECHO "Pushing..."
git add .
git commit -m %message%
git push origin master
ECHO "Push Successful"
pause