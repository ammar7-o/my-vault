# Volt MD - Setup & Troubleshooting Guide

## 🚀 Quick Setup (5 minutes)

### Step 1: Prepare Files
1. Extract the Volt MD files to your desired location
2. Keep the file structure intact:
```
your-folder/
├── index.html
├── core/
│   ├── volt-md-core.js
│   ├── volt-md-core.css
│   └── base.json
└── your-markdown-files/
```

### Step 2: Index Your Files
If you have markdown files in subdirectories, update the index:

**On Linux/Mac:**
```bash
chmod +x make.sh
./make.sh
```

**On Windows:**
```bash
python3 make.sh  # Or run manually
```

**Manual (Any OS):**
Simply edit `core/base.json` to add your files in this format:
```json
{
  "tree": [{
    "type": "folder",
    "name": "root",
    "children": [
      {
        "type": "file",
        "name": "filename.md",
        "path": "path/to/filename.md"
      }
    ]
  }]
}
```

### Step 3: Open in Browser
- Local: Open `index.html` directly in your browser
- Server: Upload to your web server and navigate to it
- Live Server: Use VS Code Live Server extension

✅ **You're ready to go!**

---

## 🎮 First Time User Guide

### Opening a File
1. Look at the **left sidebar** (File Explorer)
2. **Click any folder** to expand it
3. **Click any .md file** to open it
4. The file appears in the **main area**

### Navigating
- Use **Table of Contents** (right sidebar) to jump to sections
- Click any heading to scroll to it
- Use **Backlinks** tab to see related files

### Searching
- **Search files:** Type in the sidebar search box
- **Search in file:** Press `Ctrl+F` (or `Cmd+F` on Mac)
- **Clear search:** Press `Escape`

### Customizing
1. Click the **Settings icon** (gear) in the TOC sidebar
2. Adjust any settings - they apply instantly
3. They automatically save - reload and they persist

---

## ⚙️ Configuration

### Default Settings
Edit these in `volt-md-core.js` line 71-81:

```javascript
this.settings = {
    fontSize: 16,              // 14, 16, 18, or 20
    lineNumbers: false,        // true or false
    wordWrap: true,            // true or false
    autoFold: false,           // true or false
    showBacklinks: true,       // true or false
    syntaxHighlight: true,     // true or false
    copyCode: true,            // true or false
    autoRtl: true,             // true or false
    fullWidth: false           // true or false
};
```

### Default Theme
Edit line 23 in `volt-md-core.js`:

```javascript
theme: localStorage.getItem('volt-md-theme') || 'light'
// Change to: theme: localStorage.getItem('volt-md-theme') || 'dark'
```

---

## 🔍 Troubleshooting

### Problem: Files don't appear in sidebar

**Solution 1: Update base.json**
```bash
./make.sh  # Linux/Mac
python3 make.sh  # Windows (with Python installed)
```

**Solution 2: Manual index**
1. Open `core/base.json`
2. Find the `"children"` array under `"root"`
3. Add your files in this format:
```json
{
  "type": "file",
  "name": "my-note.md",
  "path": "my-note.md"
}
```

**Solution 3: Check file extension**
- Ensure files end with `.md` (not `.markdown`, `.txt`, etc.)
- Files are case-sensitive on some systems

---

### Problem: Files won't load/show error

**Solution 1: Check browser console**
- Press `F12` or `Ctrl+Shift+I`
- Look for red error messages
- Common errors:
  - `404 Not Found` → File path incorrect in JSON
  - `CORS error` → Server issue (use local or proper web server)

**Solution 2: Verify file paths**
- In `base.json`, paths must be relative to `index.html`
- Example structure:
```
index.html
notes/
├── note1.md (path: "notes/note1.md")
├── subfolder/
│   └── note2.md (path: "notes/subfolder/note2.md")
```

**Solution 3: Use proper web server**
- Don't open directly with `file://` in Chrome (CORS issues)
- Use:
  - Python: `python3 -m http.server`
  - Node: `npx http-server`
  - VS Code: Live Server extension

---

### Problem: Search not working

**Solution 1: Files might not be indexed**
```bash
./make.sh  # Regenerate index
```

**Solution 2: Clear browser cache**
- Press `Ctrl+Shift+Delete`
- Select "All time"
- Check "Cookies and other data"
- Clear

**Solution 3: Clear application data**
In browser console:
```javascript
localStorage.removeItem('volt-md-state');
localStorage.removeItem('volt-md-settings');
location.reload();
```

---

### Problem: Dark mode not working

**Solution 1: Enable in settings**
1. Click Settings tab (gear icon)
2. Toggle "Dark Mode" on
3. Should switch immediately

**Solution 2: Hard refresh**
- `Ctrl+Shift+R` (Chrome/Firefox)
- `Cmd+Shift+R` (Mac)
- `Ctrl+F5` (Windows)

**Solution 3: Clear localStorage**
```javascript
// In browser console:
localStorage.clear();
location.reload();
```

---

### Problem: Code blocks don't copy

**Solution 1: Check setting**
- Go to Settings → Preview
- Enable "Copy Code Buttons"
- Reload page

**Solution 2: Browser permissions**
- Some browsers need permission for clipboard
- Check browser permissions settings
- Allow clipboard access

**Solution 3: Use web server**
- Clipboard API requires HTTPS or localhost
- Don't use `file://` URLs

---

### Problem: Slow loading with many files

**Solution 1: Reduce file count**
- Keep under 500 files for best performance
- Move inactive files to archive folder
- Create separate indexes for different sections

**Solution 2: Optimize files**
- Remove very large files (>1MB)
- Split 10,000+ line files
- Remove unnecessary images

**Solution 3: Browser optimization**
- Close other tabs
- Clear browser cache
- Update browser to latest version
- Use modern browser (Chrome, Firefox, Edge)

---

### Problem: Wiki links not working

**Format must be exact:**
```markdown
✓ Correct:
[[filename]]
[[path/to/filename]]
[[my-note]]

✗ Wrong:
[filename]
[[filename.md]]
[[ filename ]]
```

**Ensure:**
- File exists in sidebar
- Filename matches exactly (case-sensitive)
- No extra spaces or special characters

---

### Problem: RTL text not working

**Solution 1: Enable auto-RTL**
- Settings → Preview
- Enable "Auto RTL"

**Solution 2: Verify text content**
- Must contain Arabic (U+0600-U+06FF) or Hebrew (U+0590-U+05FF)
- Mixing with English might not trigger auto-detection
- Apply manual direction if needed

**Solution 3: Manual CSS**
Add to your markdown file:
```html
<div style="direction: rtl; text-align: right;">
Your Arabic/Hebrew text here
</div>
```

---

## 📋 Checklist for Common Issues

- [ ] Files have `.md` extension
- [ ] `make.sh` has been run (if files were added)
- [ ] Using web server (not file:// URL)
- [ ] Browser is modern (Chrome, Firefox, Edge, Safari)
- [ ] JavaScript is enabled
- [ ] localStorage is enabled
- [ ] No CORS errors in console
- [ ] File paths in JSON are correct
- [ ] Folder structure matches what's in JSON

---

## 🚀 Advanced Setup

### Using with Git
```bash
# Initialize repository
git init

# Create .gitignore
echo "node_modules/" > .gitignore

# Track Volt MD files
git add index.html core/ make.sh README.md
git commit -m "Add Volt MD"

# Track markdown files
git add *.md
git commit -m "Add notes"
```

### Using on GitHub Pages
1. Fork or create repository
2. Upload Volt MD files
3. Ensure `core/base.json` is updated
4. Enable GitHub Pages in settings
5. Access at: `https://username.github.io/repo`

### Using with Python Server
```bash
# Python 3
python3 -m http.server 8000

# Then visit: http://localhost:8000
```

### Using with Node
```bash
# Install http-server
npm install -g http-server

# Run server
http-server

# Visit: http://localhost:8080
```

### Docker Deployment
```dockerfile
FROM nginx:alpine
COPY . /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

---

## 🔒 Browser Storage Info

Volt MD uses browser localStorage to save:

```javascript
// Check what's saved
localStorage.getItem('volt-md-state')      // Current file + state
localStorage.getItem('volt-md-settings')   // User preferences
localStorage.getItem('volt-md-theme')      // Light/dark mode
```

### Clear All Data
```javascript
// In browser console:
localStorage.clear();
location.reload();
```

### Export Settings
```javascript
// Copy to backup:
const settings = localStorage.getItem('volt-md-settings');
console.log(settings);  // Copy this JSON
```

### Import Settings
```javascript
// Paste your saved JSON:
localStorage.setItem('volt-md-settings', 'YOUR_SAVED_JSON');
location.reload();
```

---

## 📞 Getting Help

### Check Browser Console
Press `F12` or `Ctrl+Shift+I`, go to Console tab.

Common messages:
- `Failed to fetch 'path/file.md'` → File not found
- `Uncaught SyntaxError` → JavaScript issue
- `Refused to load the script` → CORS issue

### Test Markdown Locally
Visit https://marked.js.org/ to test markdown parsing.

### Test File Paths
Use browser Network tab to verify URLs are correct:
1. Open DevTools (`F12`)
2. Go to Network tab
3. Look for red (404) files
4. Fix paths in `base.json`

---

## ✅ Verification Checklist

After setup, verify everything works:

- [ ] `index.html` opens in browser
- [ ] File tree shows in left sidebar
- [ ] Click file opens it
- [ ] TOC appears in right sidebar
- [ ] Table of Contents updates
- [ ] Search files works (Ctrl+F in sidebar)
- [ ] Search content works (Ctrl+F in file)
- [ ] Dark mode toggles (Ctrl+D)
- [ ] Settings save and persist
- [ ] Copy button works on code blocks
- [ ] Wiki links work `[[file]]`
- [ ] Keyboard shortcuts respond

If all checks pass, you're all set! 🎉

---

## 🆘 Still Having Issues?

1. **Clear everything:**
   ```javascript
   localStorage.clear();
   sessionStorage.clear();
   ```

2. **Hard refresh browser:**
   - `Ctrl+Shift+R` (Chrome/Firefox)
   - `Cmd+Shift+R` (Mac)

3. **Check console for errors:**
   - `F12` → Console tab
   - Screenshot the errors

4. **Verify server is running:**
   - Open browser console
   - Type: `fetch('core/base.json').then(r => r.json()).then(console.log)`
   - Should see file structure

5. **Test with simple HTML:**
   - Create test file: `test.md`
   - Add to `base.json`
   - Try loading it

---

## 📊 System Requirements

- **Browser:** Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **RAM:** 100MB minimum
- **Storage:** ~50MB for 1000 markdown files
- **Internet:** Only for external scripts (CDN libraries)
- **Permissions:** localStorage enabled

---

**Happy note-taking with Volt MD!** 🚀
