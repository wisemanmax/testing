# 🚀 Quick Start Guide

## Instant Setup (60 seconds)

### Option 1: Using Python (Recommended)
```bash
cd worlds-end-sports-app
python -m http.server 8000
```
Open: http://localhost:8000/views/index.html

### Option 2: Using Node.js
```bash
cd worlds-end-sports-app
npx http-server -p 8000
```
Open: http://localhost:8000/views/index.html

### Option 3: Direct Browser Access
Simply open `views/index.html` directly in your browser.

## 📱 Testing on Mobile

### Using Chrome DevTools
1. Open http://localhost:8000/views/index.html
2. Press `F12` or right-click > Inspect
3. Click the device toolbar icon (📱) or press `Ctrl+Shift+M`
4. Select iPhone or any mobile device

### Using Your Phone
1. Find your computer's local IP: `ipconfig` (Windows) or `ifconfig` (Mac/Linux)
2. Start server: `python -m http.server 8000`
3. On your phone, navigate to: `http://YOUR-IP:8000/views/index.html`
   - Example: `http://192.168.1.100:8000/views/index.html`

## 🎯 Navigation Flow

```
index.html (Login)
    ↓
register.html (Create Account)
    ↓
join-league.html (Choose League Type)
    ↓
league-code.html (Enter Private League Code)
```

## ⌨️ Keyboard Shortcuts

- **Arrow Right** → Next screen
- **Arrow Left** → Previous screen
- **Tab** → Navigate form fields
- **Enter** → Submit forms

## 🎨 Customization Quick Tips

### Change Primary Color
**File:** `css/styles.css`
```css
:root {
    --primary-red: #B91C1C;  /* ← Change this */
}
```

### Modify Logo
**Files:** Each view has inline SVG, or replace `images/logo.svg`

### Add New Page
1. Copy `views/index.html`
2. Rename and modify content
3. Link from other pages

## 🔧 Common Tasks

### Form Validation
Edit validation functions in `js/app.js`:
```javascript
function validateLogin() {
    // Add your validation logic
}
```

### API Integration
Replace validation functions with API calls:
```javascript
async function validateLogin() {
    const response = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify({ username, password })
    });
    // Handle response
}
```

### Add Loading States
```javascript
button.disabled = true;
button.innerHTML = '<span>Loading...</span>';
// Make API call
button.disabled = false;
```

## 📦 File Organization

```
├── views/          # HTML pages (entry points)
├── css/            # Styling (single file)
├── js/             # Logic (single file)
└── images/         # Assets (logo, icons)
```

## 🐛 Troubleshooting

**Problem:** Styles not loading
- **Solution:** Check file paths are relative: `../css/styles.css`

**Problem:** JavaScript not working
- **Solution:** Ensure `app.js` is loaded at bottom of HTML

**Problem:** CORS errors
- **Solution:** Use a local server, don't open files directly for API calls

**Problem:** Mobile view looks wrong
- **Solution:** Check viewport meta tag is present in all HTML files

## 📚 Next Steps

1. ✅ Get it running locally
2. ✅ Browse through all 4 views
3. ✅ Read through `README.md` for full documentation
4. ✅ Check `CONTRIBUTING.md` to start coding
5. ✅ Customize colors and branding
6. ✅ Add your backend integration

## 🎉 You're Ready!

Start with `views/index.html` and explore the app. Happy coding!

---

**Need Help?** Open an issue on GitHub or check the full README.md
