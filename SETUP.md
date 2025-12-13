# Quick Setup Guide for GitHub Pages

## Step 1: Initialize Git Repository

```bash
cd portfolio
git init
git add .
git commit -m "Initial portfolio website"
```

## Step 2: Create GitHub Repository

1. Go to [GitHub](https://github.com/new)
2. Create a new repository (e.g., `portfolio` or `sallar-farokhi.github.io`)
3. **Do NOT** initialize with README, .gitignore, or license (we already have these)

## Step 3: Push to GitHub

```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub username and repository name.

## Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
4. Click **Save**

## Step 5: Access Your Site

- If repository name is `username.github.io`: `https://username.github.io`
- If repository name is anything else: `https://username.github.io/repository-name`

Wait a few minutes for GitHub Pages to build and deploy your site.

## Customization

### Update GitHub Links

Edit `assets/js/main.js` and update the `github` property for each project in the `projects` array.

### Update Contact Information

Edit `index.html` and update the contact links in the contact section (GitHub, LinkedIn, Email).

### Update Project Descriptions

Edit `assets/js/main.js` and modify the `description` field for each project.

