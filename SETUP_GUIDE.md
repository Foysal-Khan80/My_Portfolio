# Step-by-Step Setup Guide

## 🚀 Quick Start (5 Minutes)

### Step 1: Install Node.js
1. Go to [nodejs.org](https://nodejs.org/)
2. Download LTS version (recommended)
3. Run installer and follow prompts
4. Verify installation:
   ```bash
   node --version
   npm --version
   ```

### Step 2: Navigate to Project
```bash
cd portfolio
```

### Step 3: Install Dependencies
```bash
npm install
```
This will install:
- React 18
- Tailwind CSS 3
- Framer Motion
- Lucide React icons
- And all other dependencies

### Step 4: Start Development Server
```bash
npm start
```

Your portfolio will open at `http://localhost:3000`

---

## 📝 Customization Checklist

### ✅ Priority 1: Personal Information (30 minutes)

#### Update Hero Section
**File:** `src/components/Hero.jsx`

1. **Change your name:**
   ```jsx
   // Line ~45-50
   <span className="text-gradient">Md. Foysal</span>
   <br />
   <span className="text-white">Hossain Khan</span>
   ```
   Replace with your name.

2. **Update title:**
   ```jsx
   // Line ~55
   Computer Science Student | Full Stack Web Developer
   ```

3. **Modify bio:**
   ```jsx
   // Line ~65
   I am a Computer Science and Engineering student...
   ```

4. **Update social links:**
   ```jsx
   // Line ~95-135
   <a href="https://github.com/YOURUSERNAME" ...>
   <a href="https://linkedin.com/in/YOURUSERNAME" ...>
   <a href="https://facebook.com/YOURUSERNAME" ...>
   <a href="mailto:YOUR.EMAIL@example.com" ...>
   <a href="tel:+8801234567890" ...>
   ```

#### Update Contact Section
**File:** `src/components/Contact.jsx`

```jsx
// Line ~25-40
const contactInfo = [
  {
    icon: <Mail size={24} />,
    title: 'Email',
    value: 'YOUR.EMAIL@example.com',  // ← CHANGE THIS
    link: 'mailto:YOUR.EMAIL@example.com',  // ← CHANGE THIS
  },
  {
    icon: <Phone size={24} />,
    title: 'Phone',
    value: '+880 1234 567890',  // ← CHANGE THIS
    link: 'tel:+8801234567890',  // ← CHANGE THIS
  },
  // ... location
];
```

#### Update Footer
**File:** `src/components/Footer.jsx`

```jsx
// Line ~10-15
const socialLinks = [
  { icon: <Github size={20} />, url: 'https://github.com/YOUR_USERNAME', ...},
  { icon: <Linkedin size={20} />, url: 'https://linkedin.com/in/YOUR_USERNAME', ...},
  // Update all URLs
];
```

---

### ✅ Priority 2: Education & Skills (20 minutes)

#### Update Education
**File:** `src/components/Education.jsx`

```jsx
// Line ~40-50
<h3>B.Sc. in Computer Science and Engineering</h3>
<p>United International University</p>
// Update with your university

// Line ~55-75
<p>3.26 / 4.00</p>  // Your CGPA
<p>2026</p>  // Your graduation year
```

#### Update Skills
**File:** `src/components/Skills.jsx`

```jsx
// Line ~8-40
const skillsData = {
  domains: [
    'Full Stack Web Development',
    // Add/remove your domains
  ],
  languages: [
    'Python',
    'JavaScript',
    // Add/remove languages
  ],
  // ... update all categories
};
```

---

### ✅ Priority 3: Projects (45 minutes)

**File:** `src/components/Projects.jsx`

```jsx
// Line ~8-50
const projects = [
  {
    title: 'Your Project Name',
    description: 'Project description...',
    technologies: ['React.js', 'Node.js', ...],
    image: '🚀',  // Emoji or later replace with actual image
    github: 'https://github.com/yourusername/project',
    demo: 'https://your-project-demo.com',
    color: 'from-blue-500 to-cyan-500',
  },
  // Add more projects
];
```

**Tips for Projects:**
- Add 3-6 of your best projects
- Include clear descriptions
- List all technologies used
- Provide working GitHub links
- Add demo links if available

---

### ✅ Priority 4: About Section (15 minutes)

**File:** `src/components/About.jsx`

```jsx
// Line ~50-70
<p>
  I am a Computer Science and Engineering student at{' '}
  <span className="text-primary-400 font-semibold">YOUR UNIVERSITY</span>
  // Update your story
</p>
// Update all paragraphs with your information
```

---

### ✅ Priority 5: Profile Image (10 minutes)

#### Option A: Use Emoji (Quick)
Already set! The 👨‍💻 emoji is a placeholder.

#### Option B: Add Your Photo
1. Place your image in `public/images/` folder:
   ```
   public/
   └── images/
       └── profile.jpg
   ```

2. Update `src/components/Hero.jsx`:
   ```jsx
   // Replace lines ~130-145 (the emoji section) with:
   <img 
     src="/images/profile.jpg"
     alt="Your Name"
     className="w-full h-full object-cover rounded-full"
   />
   ```

---

### ✅ Priority 6: Resume Download (10 minutes)

1. **Add your resume PDF:**
   - Place `resume.pdf` in `public/` folder
   ```
   public/
   └── resume.pdf
   ```

2. **Update download link in Hero.jsx:**
   ```jsx
   // Line ~80
   <a href="/resume.pdf" download="YourName_Resume.pdf">
     <button className="btn-secondary flex items-center gap-2">
       <Download size={20} />
       Download Resume
     </button>
   </a>
   ```

---

### ✅ Optional: Experience Section

**File:** `src/components/Experience.jsx`

If you have professional experience:
```jsx
// Replace the placeholder with actual experience cards
const experiences = [
  {
    title: 'Software Engineer Intern',
    company: 'Company Name',
    duration: 'June 2024 - August 2024',
    description: 'Description of your role...',
    technologies: ['React', 'Node.js'],
  },
];
```

---

### ✅ Optional: Awards Section

**File:** `src/components/Awards.jsx`

Add your actual awards:
```jsx
// Line ~7-25
const achievements = [
  {
    icon: <Award size={32} />,
    title: 'Hackathon Winner',
    description: 'Won first place in XYZ Hackathon 2024',
    color: 'from-yellow-500 to-orange-500',
  },
  // Add more
];
```

---

## 🎨 Styling Customization

### Change Color Scheme

**File:** `tailwind.config.js`

```javascript
// Line 6-15
colors: {
  primary: {
    400: '#38bdf8',  // Light blue
    500: '#0ea5e9',  // Main blue
    600: '#0284c7',  // Dark blue
    // Change these hex codes
  },
  accent: {
    500: '#f59e0b',  // Orange
    600: '#d97706',  // Dark orange
    // Change these hex codes
  }
}
```

**Popular Color Schemes:**

**Purple Theme:**
```javascript
primary: {
  400: '#c084fc',
  500: '#a855f7',
  600: '#9333ea',
}
```

**Green Theme:**
```javascript
primary: {
  400: '#4ade80',
  500: '#22c55e',
  600: '#16a34a',
}
```

**Red Theme:**
```javascript
primary: {
  400: '#f87171',
  500: '#ef4444',
  600: '#dc2626',
}
```

### Change Fonts

**File:** `tailwind.config.js`

```javascript
// Line 17-20
fontFamily: {
  'display': ['"Playfair Display"', 'serif'],
  'body': ['"Sora"', 'sans-serif'],
}
```

**Popular Font Combinations:**
- Display: "Montserrat", Body: "Open Sans"
- Display: "Bebas Neue", Body: "Roboto"
- Display: "Raleway", Body: "Lato"

Don't forget to update the import in `src/index.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=YOUR+FONT&display=swap');
```

---

## 🔧 Advanced Customization

### Add New Section

1. **Create component:** `src/components/NewSection.jsx`
   ```jsx
   import React from 'react';
   import { motion } from 'framer-motion';

   const NewSection = () => {
     return (
       <section id="new-section" className="py-20 px-6">
         <div className="container mx-auto max-w-6xl">
           <h2 className="section-heading">New Section</h2>
           {/* Your content */}
         </div>
       </section>
     );
   };

   export default NewSection;
   ```

2. **Add to App.jsx:**
   ```jsx
   import NewSection from './components/NewSection';
   
   // In the return statement:
   <NewSection />
   ```

3. **Add to Navbar:**
   ```jsx
   const navItems = [
     // ... existing items
     { id: 'new-section', label: 'New Section' },
   ];
   ```

### Enable Contact Form Backend

#### Option 1: EmailJS (Free & Easy)

1. **Install EmailJS:**
   ```bash
   npm install @emailjs/browser
   ```

2. **Sign up at [EmailJS.com](https://www.emailjs.com/)**

3. **Update Contact.jsx:**
   ```jsx
   import emailjs from '@emailjs/browser';

   const handleSubmit = (e) => {
     e.preventDefault();
     
     emailjs.send(
       'YOUR_SERVICE_ID',
       'YOUR_TEMPLATE_ID',
       formData,
       'YOUR_PUBLIC_KEY'
     ).then(() => {
       alert('Message sent successfully!');
     });
   };
   ```

#### Option 2: Formspree (Simplest)

1. **Sign up at [Formspree.io](https://formspree.io/)**

2. **Update form tag in Contact.jsx:**
   ```jsx
   <form 
     action="https://formspree.io/f/YOUR_FORM_ID" 
     method="POST"
   >
   ```

---

## 📱 Testing

### Test Responsiveness

1. **Open DevTools** (F12 or Right-click → Inspect)
2. **Toggle Device Toolbar** (Ctrl+Shift+M)
3. **Test on different devices:**
   - Mobile (375px)
   - Tablet (768px)
   - Desktop (1440px)

### Test All Links

- [ ] Navigation links scroll correctly
- [ ] Social media links open in new tabs
- [ ] Project links work
- [ ] Download resume works
- [ ] Contact form submits

### Test Animations

- [ ] Sections animate on scroll
- [ ] Hover effects work
- [ ] Mobile menu opens/closes
- [ ] Scroll to top button appears

---

## 🚀 Deployment

### Deploy to Vercel (Recommended - Free & Fast)

1. **Create account:** [vercel.com](https://vercel.com)

2. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

3. **Deploy:**
   ```bash
   vercel
   ```

4. **Follow prompts** and your site will be live!

### Deploy to Netlify

1. **Build project:**
   ```bash
   npm run build
   ```

2. **Drag `build` folder to:** [app.netlify.com](https://app.netlify.com)

3. **Done!** Your site is live

---

## ✅ Final Checklist

Before going live:

- [ ] Updated all personal information
- [ ] Changed all social media links
- [ ] Added real projects
- [ ] Uploaded profile photo
- [ ] Added resume PDF
- [ ] Tested on mobile devices
- [ ] Tested all navigation links
- [ ] Verified contact form works
- [ ] Updated page title and meta tags
- [ ] Checked for spelling errors
- [ ] Tested on different browsers
- [ ] Optimized images (if any)

---

## 🆘 Common Issues & Solutions

### Port 3000 Already in Use
```bash
# Use different port
PORT=3001 npm start
```

### Animations Not Working
```bash
# Reinstall framer-motion
npm uninstall framer-motion
npm install framer-motion
```

### Tailwind Styles Not Applying
```bash
# Restart development server
# Ctrl+C to stop
npm start
```

### Build Errors
```bash
# Clear cache and rebuild
rm -rf node_modules package-lock.json
npm install
npm start
```

---

## 📚 Resources

- [React Docs](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [Framer Motion Docs](https://www.framer.com/motion)
- [Lucide Icons](https://lucide.dev)

---

**Need Help?** Check the README.md file or create an issue!

**Good luck with your portfolio! 🚀**
