class VoltMDCore {
    constructor(options = {}) {
        this.options = {
            jsonUrl: options.jsonUrl || 'core/base.json',
            theme: localStorage.getItem('volt-md-theme') || 'light',
            ...options
        };
        
        this.fileTree = null;
        this.allFiles = [];
        this.allFilesContent = {};
        this.currentFile = null;
        this.currentContent = '';
        this.currentHtml = '';
        this.searchMatches = [];
        this.currentSearchIndex = -1;
        this.contentSearchMatches = [];
        this.contentSearchIndex = -1;
        this.fileLinks = new Map();
        
        this.loadState();
        this.loadSettings();
        this.init();
    }
    
    async init() {
        this.applyTheme(this.options.theme);
        this.bindEvents();
        this.bindSettingsEvents();
        this.bindKeyboardShortcuts();
        
        await this.loadTree();
        await this.loadAllFileContents();
        this.buildFileLinks();
        this.initSyntaxHighlighting();
        
        if (this.savedState.currentFile) {
            setTimeout(() => {
                this.loadFile(this.savedState.currentFile.path, this.savedState.currentFile.name);
            }, 100);
        }
        
        if (this.savedState.sidebarCollapsed) {
            document.querySelector('.sidebar').classList.add('collapsed');
        }
        
        if (this.savedState.tocCollapsed) {
            document.querySelector('.toc-sidebar').classList.add('collapsed');
        }
    }
    
    loadState() {
        const saved = localStorage.getItem('volt-md-state');
        this.savedState = saved ? JSON.parse(saved) : {
            currentFile: null,
            sidebarCollapsed: false,
            tocCollapsed: false,
            theme: 'light',
            expandedFolders: [],
            scrollPositions: {}
        };
    }
    
    saveState() {
        const sidebar = document.querySelector('.sidebar');
        const tocSidebar = document.querySelector('.toc-sidebar');
        const expandedFolders = [];
        
        document.querySelectorAll('.tree-folder.expanded').forEach(folder => {
            expandedFolders.push(folder.textContent.trim());
        });
        
        const state = {
            currentFile: this.currentFile,
            sidebarCollapsed: sidebar ? sidebar.classList.contains('collapsed') : false,
            tocCollapsed: tocSidebar ? tocSidebar.classList.contains('collapsed') : false,
            theme: this.options.theme,
            expandedFolders: expandedFolders,
            scrollPositions: this.savedState.scrollPositions || {}
        };
        localStorage.setItem('volt-md-state', JSON.stringify(state));
    }
    
    loadSettings() {
        const settings = localStorage.getItem('volt-md-settings');
        this.settings = settings ? JSON.parse(settings) : {
            fontSize: 16,
            lineNumbers: false,
            wordWrap: true,
            autoFold: false,
            showBacklinks: true,
            syntaxHighlight: true,
            copyCode: true,
            autoRtl: true,
            fullWidth: false,
            darkMode: this.options.theme === 'dark'
        };
        this.applySettings();
    }
    
    saveSettings() {
        localStorage.setItem('volt-md-settings', JSON.stringify(this.settings));
    }
    
    applySettings() {
        const contentEl = document.getElementById('content');
        if (contentEl) {
            contentEl.style.fontSize = this.settings.fontSize + 'px';
        }
        
        // Update all toggles
        const toggles = {
            'setting-font-size': () => this.settings.fontSize,
            'setting-line-numbers': () => this.settings.lineNumbers,
            'setting-word-wrap': () => this.settings.wordWrap,
            'setting-auto-fold': () => this.settings.autoFold,
            'setting-backlinks': () => this.settings.showBacklinks,
            'setting-dark-mode': () => this.settings.darkMode,
            'setting-syntax-highlight': () => this.settings.syntaxHighlight,
            'setting-copy-code': () => this.settings.copyCode,
            'setting-auto-rtl': () => this.settings.autoRtl,
            'setting-full-width': () => this.settings.fullWidth
        };
        
        for (const [id, getValue] of Object.entries(toggles)) {
            const el = document.getElementById(id);
            if (el) {
                if (id === 'setting-font-size') {
                    el.value = this.settings.fontSize;
                } else {
                    el.classList.toggle('active', getValue());
                }
            }
        }
        
        document.querySelector('.content-wrapper')?.classList.toggle('full-width', this.settings.fullWidth);
    }
    
    bindSettingsEvents() {
        const settingMap = {
            'setting-dark-mode': () => this.toggleTheme(),
            'setting-font-size': (e) => {
                this.settings.fontSize = parseInt(e.target.value);
                this.applySettings();
                this.saveSettings();
            },
            'setting-line-numbers': () => {
                this.settings.lineNumbers = !this.settings.lineNumbers;
                this.applySettings();
                this.saveSettings();
            },
            'setting-word-wrap': () => {
                this.settings.wordWrap = !this.settings.wordWrap;
                document.getElementById('content').style.whiteSpace = this.settings.wordWrap ? 'normal' : 'pre-wrap';
                this.applySettings();
                this.saveSettings();
            },
            'setting-auto-fold': () => {
                this.settings.autoFold = !this.settings.autoFold;
                this.applySettings();
                this.saveSettings();
            },
            'setting-backlinks': () => {
                this.settings.showBacklinks = !this.settings.showBacklinks;
                this.applySettings();
                this.saveSettings();
                if (this.currentFile) {
                    this.generateBacklinks();
                }
            },
            'setting-syntax-highlight': () => {
                this.settings.syntaxHighlight = !this.settings.syntaxHighlight;
                this.applySettings();
                this.saveSettings();
                if (this.currentFile) {
                    this.renderContent();
                }
            },
            'setting-copy-code': () => {
                this.settings.copyCode = !this.settings.copyCode;
                this.applySettings();
                this.saveSettings();
                if (this.currentFile) {
                    this.renderContent();
                }
            },
            'setting-auto-rtl': () => {
                this.settings.autoRtl = !this.settings.autoRtl;
                this.applySettings();
                this.saveSettings();
                if (this.currentFile) {
                    this.detectAndApplyRtl();
                }
            },
            'setting-full-width': () => {
                this.settings.fullWidth = !this.settings.fullWidth;
                this.applySettings();
                this.saveSettings();
            }
        };
        
        for (const [id, handler] of Object.entries(settingMap)) {
            const el = document.getElementById(id);
            if (el) {
                el.addEventListener('click', handler);
                el.addEventListener('change', handler);
            }
        }
    }
    
    bindKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            // Ctrl+F or Cmd+F - search in file
            if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
                e.preventDefault();
                document.getElementById('content-search-input')?.focus();
            }
            
            // Ctrl+S or Cmd+S - toggle sidebar
            if ((e.ctrlKey || e.metaKey) && e.key === 's') {
                e.preventDefault();
                this.toggleSidebar();
                this.saveState();
            }
            
            // Ctrl+D or Cmd+D - toggle dark mode
            if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
                e.preventDefault();
                this.toggleTheme();
            }
            
            // Escape - clear search
            if (e.key === 'Escape') {
                document.getElementById('content-search-input').value = '';
                document.getElementById('search-input').value = '';
                this.clearContentSearch();
                this.clearFileSearch();
            }
        });
    }
    
    applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        this.options.theme = theme;
        this.settings.darkMode = theme === 'dark';
        localStorage.setItem('volt-md-theme', theme);
    }
    
    toggleTheme() {
        const newTheme = this.options.theme === 'light' ? 'dark' : 'light';
        this.applyTheme(newTheme);
        this.applySettings();
        this.saveSettings();
        this.saveState();
    }
    
    bindEvents() {
        // Sidebar toggle
        document.getElementById('sidebar-toggle')?.addEventListener('click', () => {
            this.toggleSidebar();
            this.saveState();
        });
        
        // TOC toggle
        document.getElementById('toc-toggle')?.addEventListener('click', () => {
            this.toggleToc();
            this.saveState();
        });
        
        // Tab switching
        document.querySelectorAll('.toc-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                this.switchTab(tab.dataset.tab);
            });
        });
        
        // File search
        const searchInput = document.getElementById('search-input');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => this.searchFiles(e.target.value));
        }
        
        // Content search
        const contentSearchInput = document.getElementById('content-search-input');
        if (contentSearchInput) {
            contentSearchInput.addEventListener('input', (e) => this.searchContent(e.target.value));
            contentSearchInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    this.nextContentMatch();
                }
            });
        }
        
        // Theme toggle
        document.querySelector('.theme-toggle')?.addEventListener('click', () => {
            this.toggleTheme();
        });
    }
    
    toggleSidebar() {
        document.querySelector('.sidebar')?.classList.toggle('collapsed');
    }
    
    toggleToc() {
        document.querySelector('.toc-sidebar')?.classList.toggle('collapsed');
    }
    
    switchTab(tabName) {
        document.querySelectorAll('.toc-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.toc-panel').forEach(p => p.classList.remove('active'));
        
        document.querySelector(`[data-tab="${tabName}"]`)?.classList.add('active');
        document.getElementById(`${tabName}-panel`)?.classList.add('active');
    }
    
    async loadTree() {
        try {
            const response = await fetch(this.options.jsonUrl);
            const data = await response.json();
            this.fileTree = data.tree[0];
            this.renderFileTree();
        } catch (error) {
            console.error('Error loading file tree:', error);
        }
    }
    
    async loadAllFileContents() {
        const files = this.getAllFiles(this.fileTree);
        for (const file of files) {
            try {
                const response = await fetch(file.path);
                const content = await response.text();
                this.allFilesContent[file.path] = content;
                this.allFiles.push(file);
            } catch (error) {
                console.warn(`Error loading ${file.path}:`, error);
            }
        }
    }
    
    getAllFiles(node, files = []) {
        if (node.type === 'file') {
            files.push(node);
        } else if (node.children) {
            node.children.forEach(child => this.getAllFiles(child, files));
        }
        return files;
    }
    
    buildFileLinks() {
        this.fileLinks.clear();
        
        for (const [filePath, content] of Object.entries(this.allFilesContent)) {
            const fileName = filePath.split('/').pop().replace('.md', '');
            
            for (const [otherPath, otherContent] of Object.entries(this.allFilesContent)) {
                if (otherPath !== filePath && otherContent.includes(`[[${fileName}]]`)) {
                    if (!this.fileLinks.has(filePath)) {
                        this.fileLinks.set(filePath, []);
                    }
                    this.fileLinks.get(filePath).push(otherPath);
                }
            }
        }
    }
    
    generateBacklinks() {
        if (!this.currentFile || !this.settings.showBacklinks) {
            document.getElementById('backlinks-list').innerHTML = '<li style="color: var(--text-muted); font-size: 12px; padding: 8px;">No backlinks</li>';
            return;
        }
        
        const backlinks = this.fileLinks.get(this.currentFile.path) || [];
        const backlinksHtml = backlinks.length ? 
            backlinks.map(link => {
                const fileName = link.split('/').pop().replace('.md', '');
                return `<li class="backlinks-item" data-path="${link}">
                    <div class="file-name">${this.sanitize(fileName)}</div>
                    <div class="context">${link}</div>
                </li>`;
            }).join('') :
            '<li style="color: var(--text-muted); font-size: 12px; padding: 8px;">No backlinks</li>';
        
        const backlinksListEl = document.getElementById('backlinks-list');
        if (backlinksListEl) {
            backlinksListEl.innerHTML = backlinksHtml;
            
            backlinksListEl.querySelectorAll('.backlinks-item').forEach(item => {
                item.addEventListener('click', () => {
                    const path = item.dataset.path;
                    const name = path.split('/').pop();
                    this.loadFile(path, name);
                });
            });
        }
    }
    
    renderFileTree() {
        const fileTree = document.getElementById('file-tree');
        if (fileTree && this.fileTree) {
            fileTree.innerHTML = this.renderTreeNode(this.fileTree);
            this.attachTreeEvents();
        }
    }
    
    renderTreeNode(node, level = 0) {
        if (node.type === 'folder') {
            const childrenHtml = node.children ? 
                node.children.map(child => this.renderTreeNode(child, level + 1)).join('') : '';
            
            return `
                <div class="tree-item">
                    <div class="tree-folder" data-name="${node.name}">
                        <i class="icon fa-solid fa-chevron-right"></i>
                        <i class="fa-solid fa-folder folder-icon"></i>
                        <span class="tree-item-name">${this.sanitize(node.name)}</span>
                    </div>
                    <div class="tree-folder-children">
                        ${childrenHtml}
                    </div>
                </div>
            `;
        } else {
            const ext = node.name.split('.').pop().toLowerCase();
            const iconClass = ext === 'md' ? 'fa-regular fa-file-lines' : 
                          ext === 'js' ? 'fa-brands fa-js' :
                          ext === 'css' ? 'fa-brands fa-css3' :
                          ext === 'html' ? 'fa-brands fa-html5' :
                          ext === 'json' ? 'fa-solid fa-code' :
                          'fa-regular fa-file';
            return `
                <div class="tree-item">
                    <div class="tree-file" data-path="${node.path}" data-name="${node.name}">
                        <i class="icon ${iconClass}"></i>
                        <span class="tree-item-name">${this.sanitize(node.name)}</span>
                    </div>
                </div>
            `;
        }
    }
    
    attachTreeEvents() {
        document.querySelectorAll('.tree-folder').forEach(folder => {
            folder.addEventListener('click', (e) => {
                e.stopPropagation();
                folder.classList.toggle('expanded');
                const children = folder.nextElementSibling;
                if (children) {
                    children.classList.toggle('expanded');
                }
                this.saveState();
            });
        });
        
        document.querySelectorAll('.tree-file').forEach(file => {
            file.addEventListener('click', (e) => {
                e.stopPropagation();
                this.loadFile(file.dataset.path, file.dataset.name);
            });
        });
    }
    
    async loadFile(filePath, fileName) {
        try {
            if (!this.allFilesContent[filePath]) {
                const response = await fetch(filePath);
                this.currentContent = await response.text();
                this.allFilesContent[filePath] = this.currentContent;
            } else {
                this.currentContent = this.allFilesContent[filePath];
            }
            
            this.currentFile = { path: filePath, name: fileName };
            this.renderContent();
            this.generateBacklinks();
            this.generateTOC();
            
            document.querySelectorAll('.tree-file').forEach(f => f.classList.remove('active'));
            document.querySelector(`[data-path="${filePath}"]`)?.classList.add('active');
            
            document.getElementById('file-name-display').textContent = this.sanitize(fileName);
            
            this.saveState();
        } catch (error) {
            console.error('Error loading file:', error);
        }
    }
    
    renderContent() {
        if (!this.currentContent) return;
        
        let content = this.currentContent;
        
        // YAML front matter
        if (content.startsWith('---')) {
            const endIdx = content.indexOf('---', 3);
            if (endIdx !== -1) {
                const yaml = content.slice(3, endIdx).trim();
                content = content.slice(endIdx + 3);
                const frontMatter = document.createElement('div');
                frontMatter.className = 'yaml-front-matter';
                frontMatter.innerHTML = `<pre>${this.sanitize(yaml)}</pre>`;
            }
        }
        
        // ==highlight== support
        content = content.replace(/==([^=]+)==/g, '<mark>$1</mark>');
        
        let html = marked.parse(content);
        
        // Add fold buttons to headings
        if (this.settings.autoFold) {
            html = this.addHeadingFolds(html);
        }
        
        // Apply RTL detection
        if (this.settings.autoRtl) {
            html = this.applyRtlToContent(html);
        }
        
        // Apply syntax highlighting
        if (this.settings.syntaxHighlight) {
            html = this.highlightCodeBlocks(html);
        }
        
        // Add copy buttons to code blocks
        if (this.settings.copyCode) {
            html = this.addCopyButtons(html);
        }
        
        // Add line numbers
        if (this.settings.lineNumbers) {
            html = this.addLineNumbers(html);
        }
        
        // Process wiki links
        html = this.processWikiLinks(html);
        
        // Process hashtags
        html = this.processHashtags(html);
        
        const contentEl = document.getElementById('content');
        if (contentEl) {
            contentEl.innerHTML = html;
            this.attachContentEvents();
        }
        
        this.currentHtml = html;
    }
    
    addHeadingFolds(html) {
        const temp = document.createElement('div');
        temp.innerHTML = html;
        
        const headings = Array.from(temp.querySelectorAll('h2, h3, h4, h5, h6'));
        
        headings.forEach((heading, idx) => {
            const level = parseInt(heading.tagName[1]);
            const id = heading.id || 'heading-' + Math.random().toString(36).substr(2, 9);
            heading.id = id;
            
            const foldBtn = document.createElement('i');
            foldBtn.className = 'heading-fold fa-solid fa-minus';
            foldBtn.style.cursor = 'pointer';
            foldBtn.style.marginRight = '8px';
            foldBtn.style.width = '16px';
            foldBtn.style.color = 'var(--text-muted)';
            foldBtn.style.transition = 'all 0.2s';
            foldBtn.style.display = 'inline-flex';
            foldBtn.style.alignItems = 'center';
            foldBtn.title = 'Click to collapse/expand';
            
            const contentToHide = [];
            const currentLevel = level;
            
            for (let i = idx + 1; i < headings.length; i++) {
                const nextLevel = parseInt(headings[i].tagName[1]);
                if (nextLevel <= currentLevel) break;
                contentToHide.push(headings[i]);
            }
            
            foldBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                const isCollapsed = foldBtn.classList.toggle('collapsed');
                foldBtn.className = isCollapsed ? 'heading-fold fa-solid fa-plus' : 'heading-fold fa-solid fa-minus';
                
                contentToHide.forEach(el => {
                    el.style.display = isCollapsed ? 'none' : '';
                });
            });
            
            heading.insertBefore(foldBtn, heading.firstChild);
        });
        
        return temp.innerHTML;
    }
    
    addLineNumbers(html) {
        return html.replace(/<code class="language-(\w+)">/g, '<code class="language-$1" data-line-numbers>');
    }
    
    processHashtags(html) {
        return html.replace(/#(\w+)/g, (match, tag) => {
            const colors = {
                'coding': '#e8f5e9',
                'important': '#ffebee',
                'todo': '#fff3e0',
                'note': '#e3f2fd',
                'bug': '#fce4ec',
                'question': '#f3e5f5',
                'idea': '#e0f2f1',
                'tip': '#f1f8e9'
            };
            const color = colors[tag.toLowerCase()] || '#f5f5f5';
            return `<span class="hashtag" style="background:${color};padding:2px 6px;border-radius:4px;font-size:0.9em;">#${tag}</span>`;
        });
    }
    
    processWikiLinks(html) {
        return html.replace(/\[\[([^\]]+)\]\]/g, (match, link) => {
            const fileName = link.trim();
            const file = this.allFiles.find(f => f.name === `${fileName}.md`);
            if (file) {
                return `<a class="wiki-link" href="#" data-path="${file.path}" data-name="${file.name}">${this.sanitize(fileName)}</a>`;
            }
            return `<span class="wiki-link-broken">${this.sanitize(link)}</span>`;
        });
    }
    
    attachContentEvents() {
        document.querySelectorAll('.wiki-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const path = link.dataset.path;
                const name = link.dataset.name;
                this.loadFile(path, name);
            });
        });
        
        document.querySelectorAll('.copy-btn').forEach(btn => {
            btn.addEventListener('click', () => this.copyCodeBlock(btn));
        });
    }
    
    highlightCodeBlocks(html) {
        const temp = document.createElement('div');
        temp.innerHTML = html;
        
        temp.querySelectorAll('pre code').forEach(block => {
            if (hljs) {
                try {
                    hljs.highlightElement(block);
                } catch (e) {
                    console.warn('Highlight error:', e);
                }
            }
        });
        
        return temp.innerHTML;
    }
    
    addCopyButtons(html) {
        return html.replace(/<pre><code[^>]*class="([^"]*)"[^>]*>(.+?)<\/code><\/pre>/gs, (match, lang, code) => {
            const language = lang.split(' ')[0] || 'text';
            return `<div class="code-block-wrapper">
                <div class="code-header">
                    <span class="code-lang">${this.sanitize(language)}</span>
                    <button class="copy-btn">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
                            <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
                        </svg>
                        Copy
                    </button>
                </div>
                <pre><code class="${lang}">${code}</code></pre>
            </div>`;
        });
    }
    
    copyCodeBlock(btn) {
        const code = btn.closest('.code-block-wrapper').querySelector('code').textContent;
        navigator.clipboard.writeText(code).then(() => {
            const original = btn.textContent;
            btn.textContent = '✓ Copied!';
            btn.classList.add('copied');
            setTimeout(() => {
                btn.textContent = original;
                btn.classList.remove('copied');
            }, 2000);
        });
    }
    
    generateTOC() {
        if (!this.currentContent) return;
        
        const headings = [];
        const temp = document.createElement('div');
        temp.innerHTML = marked.parse(this.currentContent);
        
        temp.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach((heading, index) => {
            const level = parseInt(heading.tagName[1]);
            const text = heading.textContent;
            const id = `heading-${index}`;
            heading.id = id;
            
            headings.push({
                level: level,
                text: text,
                id: id
            });
        });
        
        const tocHtml = headings.map(h => {
            return `<div class="toc-item" style="padding-left: ${(h.level - 1) * 12}px; cursor: pointer;" data-id="${h.id}">
                ${this.sanitize(h.text)}
            </div>`;
        }).join('');
        
        const tocEl = document.getElementById('toc-content');
        if (tocEl) {
            tocEl.innerHTML = tocHtml || '<div style="color: var(--text-muted); font-size: 12px; padding: 8px;">No headings</div>';
            
            tocEl.querySelectorAll('.toc-item').forEach(item => {
                item.addEventListener('click', () => {
                    const el = document.getElementById(item.dataset.id);
                    if (el) {
                        el.scrollIntoView({ behavior: 'smooth' });
                    }
                });
            });
        }
    }
    
    applyRtlToContent(html) {
        // Simple RTL detection for Arabic/Hebrew characters
        const rtlPattern = /[\u0600-\u06FF\u0590-\u05FF]/;
        const temp = document.createElement('div');
        temp.innerHTML = html;
        
        temp.querySelectorAll('p, li, blockquote, h1, h2, h3, h4, h5, h6').forEach(el => {
            if (rtlPattern.test(el.textContent)) {
                el.style.direction = 'rtl';
                el.style.textAlign = 'right';
            }
        });
        
        return temp.innerHTML;
    }
    
    detectAndApplyRtl() {
        if (this.currentHtml) {
            const contentEl = document.getElementById('content');
            if (contentEl) {
                const rtlPattern = /[\u0600-\u06FF\u0590-\u05FF]/;
                contentEl.querySelectorAll('p, li, blockquote, h1, h2, h3, h4, h5, h6').forEach(el => {
                    if (rtlPattern.test(el.textContent)) {
                        el.style.direction = 'rtl';
                        el.style.textAlign = 'right';
                    }
                });
            }
        }
    }
    
    searchFiles(query) {
        const resultsEl = document.getElementById('search-results');
        const fileTreeEl = document.getElementById('file-tree');
        
        if (!query.trim()) {
            resultsEl.classList.remove('active');
            fileTreeEl.style.display = 'block';
            return;
        }
        
        const lowerQuery = query.toLowerCase();
        const results = this.allFiles.filter(file => 
            file.name.toLowerCase().includes(lowerQuery) ||
            file.path.toLowerCase().includes(lowerQuery)
        );
        
        fileTreeEl.style.display = results.length ? 'none' : 'block';
        resultsEl.classList.toggle('active', results.length > 0);
        
        if (results.length) {
            resultsEl.innerHTML = results.map(file => `
                <div class="search-result-item" data-path="${file.path}" data-name="${file.name}">
                    <div class="file-name">${this.sanitize(file.name)}</div>
                    <div class="file-path">${this.sanitize(file.path)}</div>
                </div>
            `).join('');
            
            resultsEl.querySelectorAll('.search-result-item').forEach(item => {
                item.addEventListener('click', () => {
                    this.loadFile(item.dataset.path, item.dataset.name);
                    document.getElementById('search-input').value = '';
                    this.searchFiles('');
                });
            });
        }
    }
    
    clearFileSearch() {
        document.getElementById('search-results').classList.remove('active');
        document.getElementById('file-tree').style.display = 'block';
        document.getElementById('search-input').value = '';
    }
    
    searchContent(query) {
        if (!this.currentHtml) return;
        
        const contentEl = document.getElementById('content');
        if (!query.trim()) {
            contentEl.innerHTML = this.currentHtml;
            this.attachContentEvents();
            this.contentSearchMatches = [];
            return;
        }
        
        const lowerQuery = query.toLowerCase();
        this.contentSearchMatches = [];
        let tempHtml = this.currentHtml;
        
        const regex = new RegExp(`(${query})`, 'gi');
        let matchCount = 0;
        
        tempHtml = tempHtml.replace(regex, (match) => {
            const id = `match-${matchCount}`;
            this.contentSearchMatches.push(id);
            matchCount++;
            return `<span class="search-highlight" id="${id}">${this.sanitize(match)}</span>`;
        });
        
        contentEl.innerHTML = tempHtml;
        this.attachContentEvents();
        
        if (this.contentSearchMatches.length > 0) {
            this.contentSearchIndex = 0;
            this.highlightCurrentMatch();
        }
    }
    
    nextContentMatch() {
        if (this.contentSearchMatches.length === 0) return;
        this.contentSearchIndex = (this.contentSearchIndex + 1) % this.contentSearchMatches.length;
        this.highlightCurrentMatch();
    }
    
    highlightCurrentMatch() {
        document.querySelectorAll('.search-highlight').forEach((el, i) => {
            el.classList.toggle('current', i === this.contentSearchIndex);
        });
        
        const current = document.getElementById(this.contentSearchMatches[this.contentSearchIndex]);
        if (current) {
            current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
    
    clearContentSearch() {
        document.getElementById('content-search-input').value = '';
        if (this.currentFile) {
            this.renderContent();
        }
        this.contentSearchMatches = [];
    }
    
    initSyntaxHighlighting() {
        if (typeof hljs !== 'undefined') {
            document.querySelectorAll('pre code').forEach(block => {
                try {
                    hljs.highlightElement(block);
                } catch (e) {
                    console.warn('Syntax highlighting error:', e);
                }
            });
        }
    }
    
    sanitize(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.voltMD = new VoltMDCore({
        jsonUrl: 'core/base.json'
    });
});
