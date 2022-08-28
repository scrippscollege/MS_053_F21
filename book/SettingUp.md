## Setting up Git + collaborative writing local respository
### Get git
1. check if Git has already been installed in your computer
```
git --version
```

2. If not, then download git here: <https://git-scm.com/book/en/v2/Getting-Started-Installing-Git>

### Create a work local directory and setting up the remote directory
1. Create a working folder
- find/create a directory
- In the terminal, navigate to the folder. Then:
```
git init
```
2. Setting up the account
```
git config --global user.name "YOUR_USERNAME"
```
```
git config --global user.email "your_email_address@example.com"
```

### Download the latest respository
1. Download/Pull the specific respository  
```
//if you are using your own git, please check your path
git pull <https://gitlab.com/aesthetic-programming/book.git>
```

### Updated files and Push to git respository
1. add all modified files to staging
```
git add .
```
OR
```
git add *
```

```
git add SPECIFIC FILE
//e.g git add Readme.md
```
2. Confirm by committing the launch
```
git commit -m "Your own description"
```
3. Upload/Push the files to the right respository 
```
//if you are using your own git, please check your path
git push --set-upstream <https://gitlab.com/aesthetic-programming/book.git> master
```

### Other useful commmands
1. Check the local and remote difference (cmd+z exit)
```
git diff
```
2. check status
```
git status
```
3. Escape from terminal via pull + merge
ESC button > type 
```
:wq
```

