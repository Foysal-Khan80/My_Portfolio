# Portfolio Website - Md. Foysal Hossain Khan

A modern, professional, and fully responsive personal portfolio website built with React.js and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean and elegant UI with dark mode theme
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Interactive Navigation**: Smooth scrolling with active section highlighting
- **Project Showcase**: Display your projects with descriptions and tech stacks
- **Skills Section**: Organized categorization of technical skills
- **Contact Form**: Interactive form for visitors to reach out
- **SEO Optimized**: Meta tags and semantic HTML for better search visibility

## 🛠️ Tech Stack

- **Frontend Framework**: React.js 18
- **Styling**: Tailwind CSS 3
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Create React App

## 📁 Project Structure

```
portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Awards.jsx
│   │   ├── Activities.jsx
│   │   ├── SocialWork.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── ScrollToTop.jsx
│   ├── App.jsx
│   ├── index.js
│   └── index.css
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed on your system:
- **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**

### Installation

1. **Navigate to the project directory**
   ```bash
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   or if you use yarn:
   ```bash
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```
   or with yarn:
   ```bash
   yarn start
   ```

4. **Open your browser**
   The application will automatically open at [http://localhost:3000](http://localhost:3000)

## 📝 Customization Guide

### 1. Update Personal Information

Edit the following files to add your personal details:

**Hero Section** (`src/components/Hero.jsx`):
- Update name, title, bio
- Change social media links
- Add your profile photo

**About Section** (`src/components/About.jsx`):
- Modify the description
- Update interests and goals

**Education Section** (`src/components/Education.jsx`):
- Add your university details
- Update CGPA and graduation year

**Projects Section** (`src/components/Projects.jsx`):
- Add your projects in the `projects` array
- Include project descriptions, tech stack, and links

**Skills Section** (`src/components/Skills.jsx`):
- Update the `skillsData` object with your skills

**Contact Section** (`src/components/Contact.jsx`):
- Update email, phone, and location
- Configure form submission (connect to backend or email service)

### 2. Change Colors

Edit `tailwind.config.js` to customize the color scheme:

```javascript
colors: {
  primary: {
    // Your primary color shades
  },
  accent: {
    // Your accent color shades
  }
}
```

### 3. Add Your Resume

Place your resume PDF in the `public` folder and update the download link in `Hero.jsx`:

```jsx
<a href="/your-resume.pdf" download>
  <button className="btn-secondary flex items-center gap-2">
    <Download size={20} />
    Download Resume
  </button>
</a>
```

### 4. Update Social Links

Update all social media URLs in:
- `src/components/Hero.jsx`
- `src/components/Contact.jsx`
- `src/components/Footer.jsx`

Replace placeholder URLs with your actual profiles:
```jsx
href="https://github.com/yourusername"
href="https://linkedin.com/in/yourusername"
href="https://facebook.com/yourusername"
href="mailto:your.email@example.com"
```

### 5. Add Profile Image

Replace the emoji placeholder in `Hero.jsx` with your actual image:

```jsx
<img 
  src="/path-to-your-image.jpg" 
  alt="Your Name"
  className="w-full h-full object-cover"
/>
```

### 6. Configure Contact Form

To make the contact form functional, integrate with a backend service:

**Option 1: EmailJS**
```bash
npm install @emailjs/browser
```

**Option 2: Formspree**
```jsx
<form action="https://formspree.io/f/your-form-id" method="POST">
```

**Option 3: Custom Backend**
Update the `handleSubmit` function in `Contact.jsx` to send data to your API.

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

### Deploy to Netlify

1. Build the project:
   ```bash
   npm run build
   ```

2. Drag and drop the `build` folder to [Netlify](https://app.netlify.com/)

### Deploy to GitHub Pages

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

## 📦 Build for Production

Create an optimized production build:

```bash
npm run build
```

The build folder will contain the optimized files ready for deployment.

## 🎨 Customization Tips

1. **Animations**: Adjust animation timings in component files
2. **Fonts**: Change fonts in `tailwind.config.js` and `index.css`
3. **Sections**: Add or remove sections by editing `App.jsx`
4. **Mobile Menu**: Customize in `Navbar.jsx`
5. **Color Gradients**: Modify gradient classes throughout components

## 🐛 Troubleshooting

**Port already in use:**
```bash
PORT=3001 npm start
```

**Dependencies issues:**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Build errors:**
```bash
npm run build -- --verbose
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

Md. Foysal Hossain Khan
- Email: your.email@example.com
- LinkedIn: [Your Profile](https://linkedin.com/in/yourusername)
- GitHub: [Your Profile](https://github.com/yourusername)

## 🌟 Show Your Support

Give a ⭐️ if you like this project!

---

**Built with ❤️ using React and Tailwind CSS**
