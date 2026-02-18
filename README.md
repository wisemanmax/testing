# World's End Sports Bar - League App

A modern, responsive mobile-first web application for managing sports bar leagues and tournaments. Built with vanilla JavaScript, HTML5, and CSS3.

![World's End Sports Bar](https://img.shields.io/badge/Version-1.0.0-red)
![License](https://img.shields.io/badge/License-MIT-blue)

## 🎯 Features

- **Modern UI/UX**: Sleek, sports-themed design with smooth animations
- **Responsive Design**: Optimized for mobile devices (up to 430px)
- **Four Core Views**:
  - Login/Home screen
  - Registration
  - League selection
  - Private league code entry
- **Interactive Elements**: 
  - Animated backgrounds with floating particles
  - Glowing buttons with ripple effects
  - Smooth page transitions
  - Form validation
  - Keyboard navigation support

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, for development)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/worlds-end-sports-app.git
cd worlds-end-sports-app
```

2. Open with a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

3. Navigate to `http://localhost:8000/views/index.html`

### Direct File Access

You can also open `views/index.html` directly in your browser without a server.

## 📁 Project Structure

```
worlds-end-sports-app/
├── css/
│   └── styles.css          # All application styles
├── js/
│   └── app.js             # Main application logic
├── images/
│   └── logo.svg           # Brand logo (SVG)
├── views/
│   ├── index.html         # Login/Home screen
│   ├── register.html      # Registration page
│   ├── join-league.html   # League selection
│   └── league-code.html   # Private league entry
└── README.md
```

## 🎨 Design System

### Color Palette
```css
--primary-red: #B91C1C
--dark-red: #7F1D1D
--accent-red: #DC2626
--light-red: #FCA5A5
--dark-bg: #0F0F0F
--card-bg: #1A1A1A
--text-primary: #FFFFFF
--text-secondary: #A3A3A3
```

### Typography
- **Display Font**: Teko (700, 600)
- **Body Font**: Rubik (700, 600, 500, 400)

### Key Features
- Gradient backgrounds with animated pulse effects
- Floating particle animations
- Glassmorphic cards with red glow
- Custom SVG logo with sports elements
- Smooth transitions and micro-interactions

## 🔧 Customization

### Changing Colors
Edit the CSS variables in `css/styles.css`:
```css
:root {
    --primary-red: #B91C1C;  /* Change to your brand color */
    --dark-bg: #0F0F0F;      /* Adjust background */
}
```

### Modifying Logo
Replace `images/logo.svg` with your custom logo, or edit the inline SVG in each HTML file.

### Adding New Views
1. Create a new HTML file in `views/`
2. Copy the structure from existing views
3. Update navigation links
4. Add custom logic in `js/app.js`

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🛠️ Development

### Key Functions

**Navigation**
```javascript
showScreen(screenNumber)  // Navigate between screens
updateNavDots(activeScreen)  // Update navigation indicators
```

**Validation**
```javascript
validateLogin()  // Validate login form
validateRegistration()  // Validate registration
joinLeague()  // Validate league entry
```

### Adding Features

1. Form validation can be enhanced in `js/app.js`
2. Add API integration in the validation functions
3. Store user data in localStorage or connect to backend
4. Add more screens following the existing pattern

## 🎯 Roadmap

- [ ] Backend API integration
- [ ] User authentication with JWT
- [ ] League management dashboard
- [ ] Real-time score updates
- [ ] Team roster management
- [ ] Tournament bracket visualization
- [ ] Push notifications
- [ ] Dark/Light theme toggle
- [ ] Progressive Web App (PWA) support

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Design inspired by modern sports betting apps
- Icons and imagery related to sports and competition
- Built with modern web standards (ES6+, CSS3, HTML5)

## 📧 Contact

Project Link: [https://github.com/yourusername/worlds-end-sports-app](https://github.com/yourusername/worlds-end-sports-app)

---

Made with ❤️ for World's End Sports Bar | Powered by The Season Never Ends 🏆
