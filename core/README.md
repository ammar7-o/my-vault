# Volt MD - Advanced Markdown Viewer

A powerful, Obsidian-like markdown viewer with modern UI/UX, advanced features, and full settings support.

## ✨ Features

### Core Features
- **File Explorer** - Browse and organize markdown files in tree structure
- **Smart File Search** - Search files by name and path with instant results
- **Content Search** - Search within the current file with highlighting
- **Markdown Preview** - Beautiful rendering with GitHub-flavored markdown
- **Table of Contents** - Auto-generated headings with smooth scrolling
- **Backlinks** - View which files reference the current document
- **Wiki Links** - Navigate between files using `[[filename]]` syntax

### Advanced Features
- **Syntax Highlighting** - Highlight code blocks with 60+ languages
- **Copy Code Buttons** - One-click code block copying
- **Dark Mode** - Beautiful dark theme with smooth transitions
- **Auto RTL Detection** - Automatic direction for Arabic/Hebrew text
- **Full Width Mode** - Toggle between constrained and full-width content
- **Word Wrap** - Control text wrapping in documents
- **Auto-fold Headings** - Automatically fold sections on load
- **Font Size Control** - 4 font size options (14px - 20px)

### Settings & Customization
- **Persistent Settings** - All settings save to browser storage
- **Theme Persistence** - Dark/light mode preference saved
- **Scroll Position Memory** - Remembers last scroll position
- **Expandable Folders** - Folder expansion state is preserved
- **Keyboard Shortcuts** - Quick navigation with keyboard commands

## 🚀 Quick Start

### Setup
1. Extract all files to your web server or local directory
2. Ensure the folder structure is:
```
├── index.html
├── core/
│   ├── volt-md-core.js
│   ├── volt-md-core.css
│   └── base.json
└── [your markdown files]
```

3. Open `index.html` in a modern web browser

### Generate File Index
To automatically scan and index your markdown files:
```bash
./make.sh
```
This updates `core/base.json` with all `.md` files in your directory.

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl+F` / `Cmd+F` | Search in current file |
| `Ctrl+S` / `Cmd+S` | Toggle sidebar |
| `Ctrl+D` / `Cmd+D` | Toggle dark mode |
| `Esc` | Clear search results |
| `Enter` | Navigate to next search result |

## 🎨 Settings

### Appearance
- **Dark Mode** - Toggle between light and dark themes
- **Font Size** - Choose from Small (14px), Medium (16px), Large (18px), or Extra Large (20px)

### Editor
- **Line Numbers** - Show line numbers in code blocks
- **Word Wrap** - Enable/disable text wrapping

### Preview
- **Auto Fold Headings** - Automatically collapse h2/h3 headings on load
- **Show Backlinks** - Display links to other files
- **Syntax Highlighting** - Enable/disable code syntax highlighting
- **Copy Code Buttons** - Show copy buttons on code blocks
- **Auto RTL** - Automatically detect and apply RTL for Arabic/Hebrew text
- **Full Width** - Use full viewport width for content

## 📝 Markdown Features

### Supported Markdown Syntax
- Headings (h1-h6)
- Bold, italic, strikethrough
- Lists (ordered and unordered)
- Code blocks with language highlighting
- Tables
- Blockquotes
- Links and images
- Horizontal rules
- Inline code

### Wiki Links
Link to other files using wiki-style syntax:
```markdown
[[filename]]
[[path/to/filename]]
```

The file extension is optional. If the referenced file exists, it becomes a clickable link.

### Code Blocks
Specify language for syntax highlighting:
````markdown
```javascript
const hello = "world";
console.log(hello);
```
````

## 🔍 Search Features

### File Search
- Click the search icon in the sidebar
- Type to filter files by name or path
- Press Enter or click to open a file
- Clear to show full file tree again

### Content Search
- Use `Ctrl+F` or click the search icon in the header
- Highlights all matches in the document
- Navigate through matches with arrow keys
- Current match is highlighted in orange
- Press Escape to clear

## 🔗 Backlinks

The right sidebar shows files that reference the current document using wiki links.

Example:
- If `file-a.md` contains `[[file-b]]`
- When viewing `file-b.md`, it appears in the Backlinks panel
- Click on a backlink to navigate to that file

## 💾 Data Storage

All application data is stored in browser localStorage:
- `volt-md-state` - Current file, sidebar/TOC state, scroll positions
- `volt-md-settings` - All user preferences
- `volt-md-theme` - Selected theme (light/dark)

## 📱 Responsive Design

Optimized for all screen sizes:
- **Desktop** (1024px+) - Full layout with all panels
- **Tablet** (768px - 1023px) - Optimized panel sizing
- **Mobile** (< 768px) - Collapsible sidebar and TOC with overlay

## 🛠️ Customization

### Change Colors
Edit the CSS variables in `volt-md-core.css`:
```css
:root {
    --accent-color: #228be6;
    --bg-primary: #ffffff;
    /* ... more colors */
}
```

### Modify File Index
Edit `core/base.json` manually or use `make.sh` to auto-generate.

### Adjust Default Font Size
Edit the default in `volt-md-core.js`:
```javascript
fontSize: 16, // Change this value
```

## 🐛 Troubleshooting

### Files not appearing
- Run `./make.sh` to regenerate the file index
- Ensure markdown files have `.md` extension
- Check browser console for errors

### Search not working
- Verify files are properly indexed
- Clear browser cache and reload
- Check browser privacy settings

### Dark mode issues
- Clear localStorage and reload
- Check if browser supports CSS variables

### Performance on large files
- Split large documents into smaller files
- Reduce number of files in the tree
- Check browser resources

## 🔐 Browser Compatibility

Works best on:
- Chrome/Chromium 90+
- Firefox 88+
- Safari 14+
- Edge 90+

Requires:
- CSS Grid and Flexbox support
- ES6 JavaScript
- LocalStorage API
- fetch() API

## 📦 Dependencies

### External Libraries
- **marked** - Markdown parser and compiler
- **highlight.js** - Syntax highlighting for code blocks
- **github-markdown-css** - GitHub markdown styling

All loaded via CDN for maximum compatibility.

## 🎯 Advanced Usage

### Custom File Structure
The app supports nested folders. Use the auto-index feature:
```bash
./make.sh
```

It will create `core/base.json` with your entire directory structure.

### Performance Tips
1. Keep file count under 1000 for best performance
2. Split very large documents
3. Use appropriate heading levels
4. Optimize images for web

### Integration
The app is self-contained and can be embedded or integrated with other systems. It uses standard HTML/CSS/JS with no external dependencies except CDN libraries.

## 📄 File Format

### base.json Structure
```json
{
  "tree": [
    {
      "type": "folder",
      "name": "root",
      "children": [
        {
          "type": "file",
          "name": "example.md",
          "path": "example.md"
        },
        {
          "type": "folder",
          "name": "subfolder",
          "children": [...]
        }
      ]
    }
  ]
}
```

## 🚀 Future Enhancements

Planned features for future releases:
- File editing and creation
- Export to PDF/HTML
- Custom themes
- Plugin system
- Collaborative editing
- Cloud sync

## 📄 License

Free to use and modify for personal and commercial projects.

## 🤝 Support

For issues, suggestions, or improvements:
1. Check the troubleshooting section
2. Clear cache and reload
3. Check browser console for errors
4. Verify file structure

## 💡 Tips & Tricks

### Organize Your Knowledge
- Use consistent naming conventions
- Create topic folders for organization
- Link related documents with wiki links
- Use meaningful headings

### Efficient Navigation
- Use Ctrl+F for quick searching
- Bookmark frequently accessed files
- Use wiki links for navigation
- Pin important files

### Best Practices
- Keep markdown files under 5000 lines
- Use descriptive filenames
- Create index files for folder navigation
- Link related documents

---

**Volt MD** - Smart. Fast. Simple.
