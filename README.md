# Portfolio Website - Arun Kumar Turaka

A modern, responsive portfolio website built with React and Vite, featuring a clean design inspired by modern UI/UX standards.

## Features

- 🎨 Modern, professional portfolio design
- 🖼️ Image support for projects and motion design
- 📱 Fully responsive design
- ⚡ Fast performance with Vite
- 🎭 Smooth animations and transitions
- ✨ Hover effects and visual enhancements
- ♿ Accessible navigation
- 🎯 Clean, portfolio-focused layout

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
  ├── components/
  │   ├── Navigation.jsx
  │   ├── Hero.jsx
  │   ├── Projects.jsx
  │   └── Contact.jsx
  ├── App.jsx
  ├── App.css
  ├── main.jsx
  └── index.css
```

## Adding Images

1. **Add Project Images:**
   - Place images in `public/images/` folder
   - Name them: `project1.jpg`, `project2.jpg`, etc.
   - Update image paths in `src/components/Projects.jsx`

2. **Image Recommendations:**
   - Size: 1920x1080px (16:9 aspect ratio)
   - Format: JPG, PNG, or WebP
   - Optimize images for web performance

3. **Motion Design Samples:**
   - Add GIFs or videos to `public/images/`
   - Update the Motion Design section component

## Customization

- Update personal information in the component files
- Modify colors in `src/index.css` (CSS variables)
- Add your projects in `src/components/Projects.jsx`
- Update social links in `src/components/Contact.jsx`
- Add project images to `public/images/` folder

## Technologies Used

- React 18
- Vite
- CSS3 (Custom Properties)
- React Router (for future expansion)

