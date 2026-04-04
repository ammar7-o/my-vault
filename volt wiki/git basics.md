---
banner: https://tarunbatra.com/data/images/git-before-github/cover.png
aliases:
  - git ,  Github
---

# 🧠 Git & GitHub Full Cheat Sheet

---

## 🔹 1. First Time Setup (only once)

```bash
# Set your identity
git config --global user.name "Ammar"
git config --global user.email "ammar@gmail.com"

# Set default branch name (fix warning)
git config --global init.defaultBranch main

# Check config
git config --list
```

---

## 🔹 2. Create Project & Repository

```bash
# Create project folder
mkdir my-project
cd my-project

# Initialize git repo
git init
```

---

## 🔹 3. Create Files

```bash
# Create files
touch index.html style.css script.js

# Check files
ls
```

---

## 🔹 4. Add & Commit

```bash
# Add all files
git add .

# First commit
git commit -m "Initial commit"
```

---

## 🔹 5. Connect to GitHub 🔗

👉 First create empty repo on GitHub (no README)

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# Check connection
git remote -v
```

---

## 🔹 6. Push to GitHub 🚀

```bash
git branch -M main
git push -u origin main
```

---

## 🔹 7. Normal Workflow (daily use)

```bash
# Check changes
git status

# Add changes
git add .

# Commit
git commit -m "Update something"

# Push
git push
```

---

## 🔹 8. Get Updates from GitHub

```bash
git pull origin main
```

---

# 🌿 9. Branches (FULL WORKFLOW)

---

### ✅ Create branch

```bash
git branch feature-login
```

---

### ✅ Switch branch

```bash
git checkout feature-login
```

👉 Modern:

```bash
git switch feature-login
```

---

### ✅ Create + switch (BEST 🔥)

```bash
git checkout -b feature-login
```

👉 Modern:

```bash
git switch -c feature-login
```

---

### ✅ Show branches

```bash
git branch
```

---

### ✅ Work & commit

```bash
git add .
git commit -m "Add feature"
```

---

### ✅ Push branch

```bash
git push -u origin feature-login
```

---

### ✅ Merge into main

```bash
git checkout main
git merge feature-login
```

---

### ✅ Delete branch

```bash
# Local
git branch -d feature-login

# Remote
git push origin --delete feature-login
```

---

# 🔹 10. Useful Commands

```bash
# History
git log
git log --oneline

# Files
ls
ls -a

# Clear terminal
clear
```

---

# 🔹 ⚠️ Fixes & Common Mistakes

❌ Wrong:

```bash
git init "my project"
```

✔ Correct:

```bash
git init
```

---

❌ Wrong:

```bash
git remote rm origine
```

✔ Correct:

```bash
git remote rm origin
```

---

❌ Wrong way to remove commit:

```bash
git checkout <commit>
```

✔ Correct:

```bash
git reset --soft HEAD~1
```

---

# 🔐 11. GitHub Authentication

If asked for password:

👉 Use **Personal Access Token (PAT)** instead

Create it in:

- GitHub → Settings → Developer Settings → Tokens
    

---

# 💡 12. Best Practices

```bash
# Create gitignore
touch .gitignore
```

Example:

```
node_modules/
.env
```

---

# 🔥 13. FULL QUICK START (copy & go)

```bash
git config --global user.name "Ammar"
git config --global user.email "ammar@gmail.com"
git config --global init.defaultBranch main

mkdir my-project
cd my-project
git init

touch index.html style.css
git add .
git commit -m "first commit"

git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

---

# 🧠 Final Tips

✔ Use branches for every feature  
✔ Keep `main` clean  
✔ Commit often  
✔ Push regularly

---

