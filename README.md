# Sallar Farokhi - Academic Portfolio

A modern academic portfolio website built with the [al-folio](https://github.com/alshedivat/al-folio) Jekyll theme, showcasing research projects, publications, and professional experience.

## Features

- **Research Projects**: Showcase of 5 research projects in distributed systems, security, and data analytics
- **CV/Resume**: Professional curriculum vitae with downloadable PDF
- **Publications**: Academic publications and research papers
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with dark mode support
- **Jekyll-based**: Easy to maintain and customize

## Structure

This website uses the al-folio Jekyll theme structure:

```
sfarokhi.github.io/
├── _config.yml          # Site configuration
├── _pages/              # Page content (about, projects, cv, etc.)
├── _projects/           # Research project pages
├── _data/               # Data files (socials, cv, etc.)
├── _layouts/            # Page layouts
├── _includes/           # Reusable components
├── _sass/               # SCSS stylesheets
├── assets/              # Static assets (images, PDFs, etc.)
└── Gemfile              # Ruby dependencies
```

## Setup

### Prerequisites

- Ruby (2.7 or higher)
- Bundler gem
- Jekyll

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/sfarokhi/sfarokhi.github.io.git
   cd sfarokhi.github.io
   ```

2. Install dependencies:
   ```bash
   bundle install
   ```

3. Build and serve locally:
   ```bash
   bundle exec jekyll serve
   ```

4. Visit `http://localhost:4000` in your browser

## Customization

### Update Personal Information

- Edit `_config.yml` for site-wide settings
- Edit `_data/socials.yml` for social media links
- Edit `_pages/about.md` for your bio
- Edit `_data/cv.yml` for CV information

### Add Projects

Create new markdown files in `_projects/` directory following the existing format.

### Add Publications

Add publications to `_bibliography/papers.bib` in BibTeX format.

## Deployment

This site is configured for GitHub Pages. Simply push to the `main` branch and GitHub Pages will automatically build and deploy the site.

For manual deployment:
```bash
bundle exec jekyll build
# Deploy the _site/ directory to your web server
```

## Research Projects

1. **KubeFlex**: Carbon-aware Kubernetes scheduler with live migration
2. **Locker**: Oblivious datastore for protecting data access patterns
3. **Moderation and Misinformation**: Content moderation on social media
4. **SADE**: Safety Aligned Dataset Engine
5. **Speedly**: Stream processing for traffic analysis

## License

This website uses the [al-folio](https://github.com/alshedivat/al-folio) theme, which is licensed under the MIT License.

## Contact

- GitHub: [@sfarokhi](https://github.com/sfarokhi)
- LinkedIn: [sallar-farokhi](https://www.linkedin.com/in/sallar-farokhi)
