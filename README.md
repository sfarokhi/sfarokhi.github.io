# Portfolio Website

A modern, responsive portfolio website showcasing research papers, reports, and professional resume. Built for GitHub Pages.

## Features

- **Resume Display**: Interactive PDF viewer for resume
- **Project Showcases**: Preview cards for each research paper/report
- **GitHub Integration**: Direct links to GitHub repositories for each project
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations

## Structure

```
portfolio/
├── index.html          # Main HTML file
├── assets/
│   ├── css/
│   │   └── style.css  # Stylesheet
│   └── js/
│       └── main.js    # JavaScript functionality
├── pdfs/              # PDF files (resume and papers)
└── README.md          # This file
```

## Setup for GitHub Pages

1. Create a new repository on GitHub (e.g., `portfolio` or `sallar-farokhi.github.io`)

2. If using a custom repository name (not `username.github.io`):
   - Go to repository Settings → Pages
   - Set Source to `main` branch and `/ (root)` folder
   - The site will be available at `https://username.github.io/repository-name`

3. If using `username.github.io`:
   - The site will automatically be available at `https://username.github.io`

4. Push all files to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio website"
   git branch -M main
   git remote add origin https://github.com/username/repository-name.git
   git push -u origin main
   ```

## Customization

### Update Project Information

Edit `assets/js/main.js` to update project details, GitHub links, and descriptions.

### Modify Styling

Edit `assets/css/style.css` to customize colors, fonts, and layout. CSS variables are defined at the top for easy theming.

### Add/Remove Projects

Add or remove project objects in the `projects` array in `assets/js/main.js`.

## PDF Files

Ensure all PDF files are placed in the `pdfs/` directory:
- `Sallar_Farokhi_Resume.pdf` - Main resume
- Other research paper PDFs

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This portfolio template is open source and available for personal use.

