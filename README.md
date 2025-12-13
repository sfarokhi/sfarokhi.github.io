# Sallar Farokhi - Research Portfolio

A modern, static portfolio website showcasing research projects, publications, and professional experience. Built with pure HTML, CSS, and JavaScript for maximum compatibility and simplicity.

## Features

- **Research Projects**: Showcase of 5 research projects in distributed systems, security, and data analytics
- **CV/Resume**: Professional curriculum vitae with downloadable PDF viewer
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **No Build Step**: Pure static HTML - works directly with GitHub Pages
- **Fast Loading**: Optimized for performance

## Structure

```
sfarokhi.github.io/
├── index.html          # Homepage with about section
├── projects.html       # Research projects page
├── cv.html            # CV/Resume page
├── assets/
│   ├── css/
│   │   └── style.css  # Main stylesheet
│   ├── js/
│   │   └── main.js    # JavaScript functionality
│   └── pdf/           # PDF files (resume and papers)
└── README.md          # This file
```

## Setup

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/sfarokhi/sfarokhi.github.io.git
   cd sfarokhi.github.io
   ```

2. Open `index.html` in your browser or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve
   ```

3. Visit `http://localhost:8000` in your browser

## Deployment

This site is configured for GitHub Pages and works without any build step:

1. Push your changes to the `main` branch
2. GitHub Pages will automatically serve the static files
3. Your site will be available at `https://sfarokhi.github.io`

**Note**: The `.nojekyll` file tells GitHub Pages not to use Jekyll, so your static HTML files are served directly.

## Customization

### Update Personal Information

- Edit `index.html` to update your bio and contact information
- Edit `projects.html` to add or modify projects
- Edit `cv.html` to change the CV page

### Modify Styling

- Edit `assets/css/style.css` to customize colors, fonts, and layout
- CSS variables are defined at the top for easy theming

### Add Projects

1. Add a new project card in `projects.html` following the existing format
2. Add the project PDF to `assets/pdf/` if needed
3. Update the project links and descriptions

## Research Projects

1. **KubeFlex**: Carbon-aware Kubernetes scheduler with live migration
2. **Locker**: Oblivious datastore for protecting data access patterns
3. **Moderation and Misinformation**: Content moderation on social media
4. **SADE**: Safety Aligned Dataset Engine
5. **Speedly**: Stream processing for traffic analysis

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Advantages of Static HTML

- ✅ **No Build Step**: Works directly with GitHub Pages
- ✅ **Fast**: No server-side processing needed
- ✅ **Simple**: Easy to understand and modify
- ✅ **Reliable**: No dependency issues or build failures
- ✅ **Compatible**: Works with any static hosting service

## License

This portfolio template is open source and available for personal use.

## Contact

- GitHub: [@sfarokhi](https://github.com/sfarokhi)
- LinkedIn: [sallar-farokhi](https://www.linkedin.com/in/sallar-farokhi)
