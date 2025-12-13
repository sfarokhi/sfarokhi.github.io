# GitHub Pages Compatibility Fixes

## Issue
The site was failing to build on GitHub Pages due to `jekyll-scholar` not being supported. GitHub Pages has a restricted set of plugins that can be used.

## Fixes Applied

### 1. Removed jekyll-scholar from Gemfile
- Commented out `gem 'jekyll-scholar'` in `Gemfile`
- This plugin is not supported by GitHub Pages

### 2. Updated Publications Page
- Removed `{% bibliography %}` tag from `_pages/publications.md`
- Added informative message about using GitHub Actions for bibliography support

### 3. Commented Out Scholar Configuration
- Commented out the `scholar:` section in `_config.yml`
- Removed `jekyll/scholar` from the plugins list

### 4. Fixed Layout Files
- Updated `_layouts/post.liquid` to handle bibliography tags gracefully
- Updated `_layouts/page.liquid` to handle bibliography tags gracefully
- Updated `_includes/selected_papers.liquid` to show message instead of bibliography tag

## Result
The site should now build successfully on GitHub Pages without the bibliography error.

## Alternative: Using GitHub Actions

If you want to use `jekyll-scholar` for automatic bibliography generation, you can:

1. Create `.github/workflows/jekyll.yml`:
```yaml
name: Jekyll site builder

on:
  push:
    branches:
      - main

jobs:
  github-pages:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: ruby/setup-ruby@v1
        with:
          ruby-version: '3.1'
          bundler-cache: true
      - name: Build Jekyll Site
        run: bundle exec jekyll build
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./_site
```

2. Uncomment `jekyll-scholar` in `Gemfile`
3. Uncomment the scholar configuration in `_config.yml`
4. Restore the bibliography tags in the files

## Other Plugins to Watch

Some other plugins in your Gemfile might also not be fully supported by GitHub Pages:
- `jekyll-archives-v2` (GitHub Pages supports v1)
- `jekyll-imagemagick` (requires system dependencies)
- `jekyll-jupyter-notebook` (may have issues)
- `jekyll-paginate-v2` (GitHub Pages supports v1)
- `jekyll-terser` (custom git source)

If you encounter errors with these, consider:
1. Using GitHub Actions for building
2. Replacing with supported alternatives
3. Removing if not essential

