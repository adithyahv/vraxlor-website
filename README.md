# Vroxlar - AI Solutions Website

> Building Intelligent Agents & AI Systems for the Future of Business

## 🎯 Project Overview

Modern, high-performance website showcasing AI solutions and services with a stunning video background hero section. Built with React, Vite, and React Router.

## ✨ Features

- 🎬 **Video Background Hero** - Smooth, optimized 4K video background
- 🧭 **Multi-Page Navigation** - React Router with clean URLs
- 📱 **Fully Responsive** - Mobile-first design
- ⚡ **Performance Optimized** - Network-aware loading, GPU acceleration
- 🎨 **Modern UI** - Clean, professional design with smooth animations
- 📦 **Modular Architecture** - Organized component structure
- 🔄 **Easy to Maintain** - Centralized data management

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📂 Project Structure

```
src/
├── assets/                 # Images, videos, and other static assets
├── components/
│   ├── common/            # Shared components (Header, Footer, VideoBackground)
│   ├── sections/          # Homepage section components
│   └── Layout.jsx         # Main layout wrapper
├── pages/                 # Route pages (Home, Services, Industries, etc.)
├── constants/             # Static data and configuration
└── App.jsx               # Main app with routing
```

See [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md) for detailed documentation.

## 🌐 Pages

- **Home** (`/`) - Hero section with video + all service sections
- **Services** (`/services`) - Detailed services page
- **Industries** (`/industries`) - Industries we serve
- **Case Studies** (`/case-studies`) - Client success stories
- **About** (`/about`) - Company information
- **Contact** (`/contact`) - Contact form

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router DOM 6** - Client-side routing
- **CSS3** - Styling with CSS variables

## 📝 Adding Content

### Update Services/Industries/etc.

Edit `src/constants/data.js` to update:
- Navigation links
- Services list
- Industries
- Partners
- Stats
- Company information

### Add a New Page

1. Create component in `src/pages/NewPage.jsx`
2. Add route in `src/App.jsx`
3. Add navigation link in `src/constants/data.js`

## 🎬 Video Background

The hero section features an optimized video background with:
- Automatic playback with fallback
- Network-aware loading (skips on slow connections)
- GPU acceleration for smooth performance
- Mobile support with `playsInline`

To replace the video:
1. Add new video to `public/` folder
2. Update `videoSrc` prop in `Home.jsx` or use default `/hero-video.mp4`

## 🎨 Customization

### Colors & Theme

Edit CSS variables in `src/index.css`:

```css
:root {
  --blue: #1d5bff;
  --text: #e2e8f0;
  --muted-text: #94a3b8;
  /* ... more variables */
}
```

### Company Branding

Update `src/constants/data.js`:

```javascript
export const COMPANY_INFO = {
  name: 'Your Company',
  tagline: 'Your Tagline',
  email: 'contact@company.com',
  phone: '+1 (000) 000-0000',
};
```

## 🚢 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel deploy
```

### Netlify

1. Run `npm run build`
2. Drag & drop the `/dist` folder to Netlify

### Other Hosts

Upload the `/dist` folder after running `npm run build`

### ⚠️ Important Note

The hero video is 131MB. Consider:
- Using a CDN for video hosting (Cloudflare Stream, Mux, AWS S3 + CloudFront)
- Ensuring your host supports large files
- Setting proper cache headers for the video

## 📊 Performance

- **First Paint**: < 1s
- **Interactive**: < 2s
- **Video Starts**: 1-3s (network dependent)
- **Lighthouse Score**: 90+ (without video, varies with video)

## 🔧 Development

### Available Scripts

- `npm run dev` - Start dev server (port 5173)
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Style

- **Components**: PascalCase (e.g., `Header.jsx`)
- **Functions/Variables**: camelCase
- **Constants**: UPPER_SNAKE_CASE
- **CSS Files**: Match component name (e.g., `Header.css`)

## 📱 Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## 📄 License

Private - All Rights Reserved

## 👥 Team

Developed by Vraxlor

---

**Version**: 2.0  
**Last Updated**: November 2025  
**Status**: Production Ready ✅
