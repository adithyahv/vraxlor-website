# Project Structure

## 📁 Folder Organization

```
teksyniq-home/
├── public/                      # Static assets served directly
│   └── hero-video.mp4          # Hero section background video (131MB)
│
├── src/
│   ├── assets/                 # Asset files
│   │   ├── images/            # Image files (logo, icons, etc.)
│   │   └── videos/            # Video assets (if importing)
│   │
│   ├── components/            # Reusable React components
│   │   ├── common/           # Shared components used across pages
│   │   │   ├── Header.jsx         # Navigation header
│   │   │   ├── Header.css
│   │   │   ├── Footer.jsx         # Site footer
│   │   │   ├── Footer.css
│   │   │   ├── VideoBackground.jsx  # Video background component
│   │   │   └── VideoBackground.css
│   │   │
│   │   ├── sections/         # Page section components
│   │   │   ├── ServicesSection.jsx
│   │   │   ├── PartnersSection.jsx
│   │   │   ├── ApproachSection.jsx
│   │   │   ├── IndustriesSection.jsx
│   │   │   ├── WhyVraxlorSection.jsx
│   │   │   ├── CTASection.jsx
│   │   │   └── Sections.css
│   │   │
│   │   └── Layout.jsx        # Main layout wrapper with Header & Footer
│   │
│   ├── pages/                # Page components (routes)
│   │   ├── Home.jsx          # Homepage with video hero
│   │   ├── Home.css
│   │   ├── Services.jsx      # Services page
│   │   ├── Services.css
│   │   ├── Industries.jsx    # Industries page
│   │   ├── Industries.css
│   │   ├── CaseStudies.jsx   # Case studies page
│   │   ├── CaseStudies.css
│   │   ├── About.jsx         # About page
│   │   ├── About.css
│   │   ├── Contact.jsx       # Contact form page
│   │   └── Contact.css
│   │
│   ├── constants/            # Constants and data
│   │   └── data.js          # All static data (services, industries, etc.)
│   │
│   ├── utils/               # Utility functions (future use)
│   │
│   ├── App.jsx              # Main app component with routing
│   ├── App.css              # Global styles
│   ├── main.jsx             # React entry point
│   └── index.css            # Global CSS variables
│
├── .gitignore
├── package.json
├── vite.config.js           # Vite configuration
└── README.md
```

## 🎯 Key Features

### 1. **Modular Component Structure**
- **Common Components**: Reusable across all pages (Header, Footer, VideoBackground)
- **Section Components**: Modular sections for the homepage
- **Page Components**: Complete pages with routing

### 2. **Centralized Data Management**
- All static data in `src/constants/data.js`
- Easy to update content without touching components
- Single source of truth for company info, services, etc.

### 3. **React Router Integration**
- Clean URL routing (`/services`, `/industries`, etc.)
- Nested routes with shared layout
- Easy to add new pages

### 4. **Performance Optimized**
- Video background with network-aware loading
- GPU-accelerated video playback
- Lazy loading ready
- Production build optimized

## 🚀 Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | Home | Homepage with video hero & all sections |
| `/services` | Services | Detailed services page |
| `/industries` | Industries | Industries we serve |
| `/case-studies` | CaseStudies | Client success stories |
| `/about` | About | Company information |
| `/contact` | Contact | Contact form |

## 📝 How to Add New Content

### Adding a New Service
Edit `src/constants/data.js`:
```javascript
export const SERVICES = [
  {
    id: 'new-service',
    title: 'New Service',
    description: 'Description here',
    icon: '🚀',
  },
  // ... existing services
];
```

### Adding a New Page
1. Create page component in `src/pages/NewPage.jsx`
2. Create corresponding CSS file
3. Add route to `src/App.jsx`:
```javascript
<Route path="new-page" element={<NewPage />} />
```
4. Add navigation link to `src/constants/data.js` in `NAV_LINKS`

### Updating Company Information
Edit `src/constants/data.js`:
```javascript
export const COMPANY_INFO = {
  name: 'Your Company',
  tagline: 'Your Tagline',
  email: 'contact@company.com',
  phone: '+1 (000) 000-0000',
};
```

## 🎨 Styling Convention

- **Component-specific styles**: Co-located with component (e.g., `Header.css` with `Header.jsx`)
- **Global styles**: `src/index.css` for CSS variables
- **Page styles**: Co-located with page component
- **Shared section styles**: `src/components/sections/Sections.css`

## 🔧 Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type check
npm run lint
```

## 📦 Dependencies

- **React 18**: UI library
- **React Router DOM 6**: Client-side routing
- **Vite**: Build tool and dev server

## 🌐 Deployment

The project is ready for deployment to:
- **Vercel**: `vercel deploy`
- **Netlify**: Drag & drop `/dist` folder
- **Any static host**: Upload `/dist` folder

### Important Notes:
- Video file (`hero-video.mp4` - 131MB) is included in build
- Ensure your hosting supports large files or use a CDN
- Consider using video CDN for better performance (Cloudflare Stream, Mux, etc.)

## 🎬 Video Background

The video background component (`VideoBackground.jsx`) includes:
- Autoplay with fallback to user interaction
- Network-aware loading (skips on slow 2G)
- GPU acceleration for smooth playback
- Proper mobile support with `playsInline`

## 📱 Responsive Design

All components are mobile-responsive with breakpoints:
- Desktop: > 768px
- Tablet/Mobile: ≤ 768px

## 🔍 Code Quality

- **ESLint**: Configured for React
- **Consistent naming**: PascalCase for components, camelCase for functions
- **File organization**: Clear separation of concerns
- **DRY principle**: Reusable components and centralized data

---

**Last Updated**: November 2025
**Version**: 2.0 (Reorganized Structure)


