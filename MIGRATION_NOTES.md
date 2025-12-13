# Website Migration Summary

Your website has been successfully restructured to use the al-folio Jekyll theme while preserving all your content.

## ✅ Completed Tasks

1. **Theme Structure**: Copied all al-folio theme files (layouts, includes, sass, plugins, etc.)
2. **Configuration**: Updated `_config.yml` with your personal information:
   - Name: Sallar Farokhi
   - GitHub: sfarokhi
   - URL: https://sfarokhi.github.io
   - Base URL: (root)
3. **About Page**: Created `_pages/about.md` with your bio and research interests
4. **Social Links**: Updated `_data/socials.yml` with:
   - GitHub: sfarokhi
   - LinkedIn: sallar-farokhi
   - CV PDF: /assets/pdf/Sallar_Farokhi_Resume.pdf
5. **Projects**: Created 5 project pages in `_projects/`:
   - KubeFlex (carbon-aware scheduler)
   - Locker (oblivious datastore)
   - Moderation and Misinformation
   - SADE (Safety Aligned Dataset Engine)
   - Speedly (stream processing)
6. **PDFs**: All PDFs are now in `assets/pdf/` directory
7. **CV Page**: Configured `_pages/cv.md` to display your resume
8. **CV Data**: Created `_data/cv.yml` template (needs to be filled with details from your resume)

## 📝 Next Steps

### 1. Fill in CV Details
Edit `_data/cv.yml` and add your:
- Education history
- Work experience
- Skills
- Awards/honors
- Other relevant information from your resume PDF

### 2. Add Email Address
Update `_data/socials.yml` with your email address:
```yaml
email: your.email@example.com
```

### 3. Add Profile Image (Optional)
If you have a profile photo:
1. Add it to `assets/img/` (e.g., `bio-self.jpg`)
2. Update `_pages/about.md` to reference it:
```yaml
profile:
  image: bio-self.jpg
```

### 4. Add Publications (Optional)
If you have publications:
1. Add them to `_bibliography/papers.bib` in BibTeX format
2. The publications page will automatically display them

### 5. Remove Old Files (Optional)
The following old website files can be removed:
- `index.html` (old static HTML site)
- `assets/css/style.css` (old custom styles - now using theme styles)
- `assets/js/main.js` (old custom JavaScript - now using theme JS)
- `pdfs/` directory (PDFs are now in `assets/pdf/`)

**Note**: Keep the `pdfs/` directory if you want to maintain a backup, or remove it after verifying everything works.

### 6. Test Locally
Before deploying:
```bash
bundle install
bundle exec jekyll serve
```
Visit `http://localhost:4000` to preview your site.

### 7. Deploy to GitHub Pages
1. Commit and push your changes
2. GitHub Pages will automatically build and deploy your site
3. Your site will be available at `https://sfarokhi.github.io`

## 📁 Key Files to Customize

- `_config.yml` - Site-wide configuration
- `_pages/about.md` - Your bio and introduction
- `_data/socials.yml` - Social media links
- `_data/cv.yml` - CV/resume information
- `_projects/*.md` - Individual project pages
- `_bibliography/papers.bib` - Publications (BibTeX format)

## 🎨 Theme Features

The al-folio theme includes:
- Dark mode support
- Responsive design
- Search functionality
- Publication management (via Jekyll Scholar)
- Project showcase
- CV/Resume page
- Blog support (if needed)

## 📚 Documentation

- al-folio theme: https://github.com/alshedivat/al-folio
- Jekyll documentation: https://jekyllrb.com/docs/
- Jekyll Scholar (for publications): https://github.com/inukshuk/jekyll-scholar

## ⚠️ Important Notes

1. **Email Protection**: The theme uses `jekyll-email-protect` to obfuscate email addresses. Make sure your email in `_data/socials.yml` is correct.

2. **Base URL**: If your site is not at the root (e.g., `https://username.github.io/repo-name`), update the `baseurl` in `_config.yml`.

3. **PDF Links**: All project PDFs are referenced as `/assets/pdf/filename.pdf`. Make sure all PDFs are in the `assets/pdf/` directory.

4. **GitHub Pages**: Ensure your repository has GitHub Pages enabled in Settings → Pages.

## 🐛 Troubleshooting

If the site doesn't build:
1. Check that all required gems are installed: `bundle install`
2. Verify `_config.yml` syntax is correct
3. Check Jekyll build logs for errors
4. Ensure all file paths are correct (especially PDF references)

## ✨ Customization Tips

- Modify `_sass/` files to customize colors and styling
- Add custom pages in `_pages/`
- Use `_includes/` for reusable components
- Check `CUSTOMIZE.md` in the al-folio directory for more customization options

---

**Migration completed on**: $(date)
**Theme version**: al-folio (latest from repository)

