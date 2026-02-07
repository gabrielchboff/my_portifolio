# Gabriel Boff - Software Engineer Portfolio

A modern, responsive portfolio website showcasing professional experience, projects, and technical skills.

## 🎨 Features

- **Modern Design**: Clean and professional UI with smooth animations
- **Dark Mode**: Toggle between light and dark themes with local storage persistence
- **Responsive Layout**: Works seamlessly on desktop, tablet, and mobile devices
- **Project Filtering**: Filter projects by category (All, Backend, Frontend, DevOps)
- **Skill Visualization**: Interactive skill bars with progress animations
- **Smooth Scrolling**: Elegant navigation and page transitions
- **ScrollReveal Animations**: Elements animate as you scroll through the page
- **Performance Optimized**: Fast loading and smooth performance

## 🚀 Tech Stack

### Frontend
- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS variables and Grid/Flexbox
- **JavaScript**: Vanilla JS for interactivity (no frameworks)
- **Icons**: Remix Icon library
- **Animations**: ScrollReveal library

### Features Implemented
- Dark/Light theme toggle
- Project category filtering
- Smooth scroll navigation
- Active link highlighting
- Skill progress animations
- Mobile-responsive design
- Intersection Observer for animations

## 📁 Project Structure

```
my_portifolio/
├── index.html          # Main HTML file
├── styles.css          # Main stylesheet with CSS variables
├── main.js             # JavaScript functionality
├── README.md           # This file
└── images/
    └── g.png           # Profile picture
```

## 🎯 Sections

### 1. **Hero Section**
- Professional introduction
- Call-to-action buttons (GitHub, LinkedIn)
- Language proficiencies
- Experience highlights

### 2. **About Section**
- Professional bio
- Highlight cards showcasing key areas:
  - Full-Stack Development
  - Cloud & DevOps
  - Security Focused
  - Team Player

### 3. **Projects Section**
- Featured projects with filtering
- Project categories: All, Backend, Frontend, DevOps
- Project cards with:
  - Project images
  - Technology tags
  - Descriptions
  - GitHub/Live links

### 4. **Skills Section**
- Organized by categories:
  - Frontend Development
  - Backend Development
  - Cloud & DevOps
  - Tools & Databases
- Interactive skill bars with proficiency levels

### 5. **Contact Section**
- Call-to-action for collaboration
- Direct links to:
  - LinkedIn Profile
  - GitHub Repository
  - Email Contact

### 6. **Footer**
- Copyright information
- Social media links

## 🛠️ Installation & Usage

### Local Setup
1. Clone or download the repository
2. Open `index.html` in your browser
3. No build tools or dependencies required!

### Customization

#### Update Personal Information
Edit the following in `index.html`:
- Name and professional title
- Bio and description
- Social links (LinkedIn, GitHub)
- Profile image path

#### Add/Modify Projects
Update the projects grid in the `Projects Section`:
```html
<article class="project-card" data-category="backend">
    <!-- Add your project details -->
</article>
```

#### Update Skills
Modify the skills section with your own skills and proficiency levels:
```html
<div class="skill-item">
    <div class="skill-name">Your Skill</div>
    <div class="skill-level">
        <div class="skill-bar" style="width: 85%"></div>
    </div>
    <span class="skill-percent">85%</span>
</div>
```

#### Customize Colors
Edit CSS variables in `styles.css`:
```css
:root {
  --primary-color: #0066ff;
  --secondary-color: #8b5cf6;
  --accent-color: #00d4ff;
  /* ... more colors ... */
}
```

## 🌙 Dark Mode

The portfolio includes a built-in dark mode toggle:
- Click the moon/sun icon in the header to toggle
- Theme preference is saved to local storage
- Automatically applies on return visits

## 📱 Responsive Design

Breakpoints:
- **Desktop**: 1200px+
- **Tablet**: 769px - 1024px
- **Mobile**: 480px - 768px
- **Small Mobile**: < 480px

## ✨ JavaScript Features

### Theme Toggle
- Stores user preference in localStorage
- Smooth transitions between themes
- Icon changes to indicate current theme

### Project Filtering
- Click filter buttons to show/hide projects
- Smooth animation transitions
- All projects displayed by default

### Smooth Scrolling
- Click navigation links for smooth page scrolling
- Active link highlighting based on scroll position

### Animations
- ScrollReveal library for scroll animations
- CSS animations for interactive elements
- Parallax effect on hero section (optional)

### Skill Bars
- Animate when skill section becomes visible
- Smooth width transitions

## 🔧 Browser Support

- Chrome/Edge: ✅ Latest
- Firefox: ✅ Latest
- Safari: ✅ Latest
- Mobile browsers: ✅ All modern

## 📊 SEO Optimization

- Semantic HTML5 structure
- Meta tags for social sharing
- Descriptive alt text for images
- Fast page load time
- Mobile-friendly design

## 🚀 Performance

- No external dependencies required
- Optimized CSS with minimal repaints
- Debounced scroll events
- Lazy loading support for images
- Minimal JavaScript footprint

## 🎓 Projects Featured

1. **Truck Manager** - Transportation management system (Python)
2. **Main Algorithms** - Algorithm collection from Rosetta Code
3. **DiscordAlerts** - Python package for Discord notifications
4. **Bachman CRUD** - High-performance CRUD system (Go)
5. **Library CRUD** - Library management app (Svelte)
6. **Faraday Web Server** - Web server implementation (Go)
7. **WDD131** - Web design fundamentals
8. **Caesar Cipher** - Cryptography deep study (Python)
9. **CSE210** - C# programming projects

## 💻 Skills Highlighted

### Frontend
- HTML/CSS (95%)
- JavaScript (85%)
- Svelte/SvelteKit (80%)
- Bootstrap/Tailwind (85%)

### Backend
- Python (95%)
- Django (90%)
- C#/.NET (80%)
- Go (75%)

### DevOps
- Docker (88%)
- AWS (82%)
- Git (95%)
- Linux (88%)

### Databases
- PostgreSQL (88%)
- MongoDB (80%)
- Redis (75%)

## 🔐 Privacy & Data

- No cookies or tracking
- No external analytics
- Local storage only for theme preference
- No data collection

## 📄 License

This portfolio is open source and available for personal use.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📞 Contact

- **GitHub**: [gabrielchboff](https://github.com/gabrielchboff)
- **LinkedIn**: [gabrielchboff](https://www.linkedin.com/in/gabrielchboff/)

## 🎉 Credits

- **Icons**: [Remix Icon](https://remixicon.com/)
- **Animations**: [ScrollReveal](https://scrollrevealjs.org/)
- **Fonts**: [Google Fonts](https://fonts.google.com/)

---

**Last Updated**: 2025
**Version**: 2.0 - Modern Redesign