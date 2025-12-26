# 📚 Story Time - Interactive Story Book Website

A beautiful, modern web application for displaying and reading stories in an interactive book format with page-turning animations. Features glassmorphism design, modern color schemes, and seamless Heroku deployment.

## ✨ Features

- **Modern UI Design**: Glassmorphism effects, sophisticated color schemes, and smooth animations
- **Interactive Book Reader**: Click any story to open it in a realistic book format
- **Page Turning Animation**: Smooth page-turning effects when navigating through stories
- **Responsive Design**: Works beautifully on desktop, tablet, and mobile devices
- **Book Thumbnails**: Each story has a unique gradient background with emoji icon
- **Keyboard Navigation**: Use arrow keys, Page Up/Down, or Escape to navigate
- **Multiple Stories**: Includes 4 sample stories to get you started
- **Heroku Ready**: Easy one-click deployment to Heroku

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher (for Heroku deployment)
- Git

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/hypertonny/It-s-story-time.git
   cd It-s-story-time
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

### Alternative: Simple HTTP Server

You can also run without Node.js using Python:
```bash
python3 -m http.server 8080
```

## 🌐 Deploy to Heroku

### One-Click Deploy

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

### Manual Deployment

1. Install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)

2. Login to Heroku:
   ```bash
   heroku login
   ```

3. Create a new Heroku app:
   ```bash
   heroku create your-app-name
   ```

4. Deploy to Heroku:
   ```bash
   git push heroku main
   ```

5. Open your deployed app:
   ```bash
   heroku open
   ```
   http://localhost:8080
   ```

## 📖 How to Use

1. **Browse Stories**: The main page displays your story collection as cards with thumbnails
2. **Open a Book**: Click on any story card to open the interactive book reader
3. **Navigate Pages**: Use the "Previous" and "Next" buttons, or keyboard shortcuts:
   - Arrow Left / Page Up: Previous pages
   - Arrow Right / Page Down: Next pages
   - Escape: Close the book
4. **Close Book**: Click the ✕ button in the top-right corner to return to the library

## 🎨 Customization

### Adding Your Own Stories

Edit the `script.js` file and add your stories to the `stories` array:

```javascript
{
    id: 5,
    title: "Your Story Title",
    description: "A brief description of your story",
    emoji: "📝", // Choose any emoji for the thumbnail
    gradient: "linear-gradient(135deg, #color1 0%, #color2 100%)",
    pages: [
        {
            title: "Chapter 1",
            content: "Your story content here..."
        },
        // Add more pages...
    ]
}
```

### Customizing Colors

Modify the CSS variables and gradients in `styles.css` to match your preferred color scheme.

## 🛠️ Technology Stack

- **HTML5**: Semantic structure
- **CSS3**: Modern styling with animations and gradients
- **Vanilla JavaScript**: No frameworks or dependencies

## 📱 Browser Compatibility

Works on all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

---

Made with ❤️ for story lovers everywhere