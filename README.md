<div align="center">
  <img src="/companies/IT_PERFECT_LOGO.png" alt="IT Perfect Logo" width="120" height="120" />
  
  # IT Perfect

  **Where Technology Meets Ingenuity** 🚀
</div>

A modern, full-featured web application for IT Perfect's digital solutions company. Built with Next.js 15, TypeScript, and Tailwind CSS for stunning performance and user experience.

---

## 🌟 Features

- ✅ **Modern UI/UX** - Professional, responsive design with dark mode support
- ✅ **Multi-Page Routes** - Home, About, Services, Projects, Team, Blogs, FAQ, Testimonials, Contact
- ✅ **Enhanced Contact Form** - Detailed project inquiry form with validation
- ✅ **Service Showcase** - 8+ services with detailed descriptions
- ✅ **Project Gallery** - 8 projects with hover effects and details
- ✅ **Blog Section** - 10 blog posts with cards layout
- ✅ **Testimonials** - 6+ client testimonials in grid layout
- ✅ **FAQ Accordion** - Expandable FAQ section with 8+ questions
- ✅ **Dark Mode** - Full dark/light theme toggle with persistence
- ✅ **Mobile Responsive** - Optimized for all devices
- ✅ **Performance Optimized** - Static generation and lazy loading

---

## 📊 Project Stats

- **500+** Projects Completed
- **150+** Happy Clients
- **50+** Team Members
- **10+** Years Experience

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **Next.js 15** | React framework with App Router |
| **React 19** | UI library |
| **TypeScript** | Type-safe development |
| **Tailwind CSS 3** | Utility-first styling |
| **Material-UI** | Icon components |
| **React Context** | State management (Theme) |

---

## 📁 Project Structure

```
src/app/
├── layout.tsx              # Root layout with providers
├── page.tsx                # Home page
├── globals.css             # Global styles
├── middleware.ts           # Route middleware
│
├── about/                  # About Us page
├── blogs/                  # Blogs page
├── contact/                # Contact page
├── faq/                    # FAQ page
├── projects/               # Projects page
├── services/               # Services page
├── team/                   # Team page
├── testimonials/           # Testimonials page
│
├── components/
│   ├── layout/
│   │   ├── pages/          # Page-specific components
│   │   │   ├── Landing.tsx
│   │   │   ├── Blogs.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── Stats.tsx
│   │   │   ├── WhyChooseUs.tsx
│   │   │   ├── CTA.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   └── Faq.tsx
│   │   └── widgets/        # Reusable widgets
│   │       ├── Header.tsx
│   │       ├── Footer.tsx
│   │       ├── Drawer.tsx
│   │       └── Subscribe.tsx
│   │
│   └── reusable/           # Reusable components
│       ├── Button.tsx
│       ├── ContactForm.tsx
│       ├── CustomIcon.tsx
│       ├── Employee.tsx
│       ├── Project.tsx
│       ├── ServiceCard.tsx
│       ├── Testimonial.tsx
│       └── blog/           # Blog subcomponents
│
├── providers/              # Context providers
│   ├── ClientProviders.tsx
│   └── ThemeProvider.tsx
│
└── helpers/
    ├── configs.ts
    ├── constants.ts
    ├── types.ts
    └── stub-data/          # Mock data
        ├── blogs.ts        # 10 blog entries
        ├── employees.ts
        ├── faqs.ts         # 8 FAQ items
        ├── nav-links.ts
        ├── projects.ts     # 8 projects
        ├── services.ts     # 8 services
        ├── social-media.ts
        └── testimonials.ts # 6 testimonials
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ or higher
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/it-perfect.git
   cd it-perfect
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```

4. **Open browser:**
   ```
   http://localhost:3001
   ```

---

## 📦 Available Scripts

```bash
# Development
npm run dev          # Start dev server on port 3001

# Production
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
```

---

## 🎨 Design Features

### Dark Mode
- Toggle dark/light theme with smooth transitions
- Persisted in localStorage
- Full dark mode support across all pages

### Responsive Design
- Mobile-first approach
- Optimized for mobile, tablet, and desktop
- Touch-friendly interface

### Performance
- Static generation for fast page loads
- Image optimization
- Lazy loading
- Optimized bundle size

---

## 📄 Pages Overview

| Page | Purpose | Components |
|------|---------|-----------|
| **Home** | Landing page with hero, stats, CTA | Landing, Stats, WhyChooseUs, CTA |
| **About** | Company story and values | Story, Mission, Vision, Timeline |
| **Services** | Service offerings (8 services) | Service cards with details |
| **Projects** | Project portfolio (8 projects) | Project grid with hover effects |
| **Team** | Team members gallery | Employee cards |
| **Blogs** | Blog articles (10 posts) | Blog grid with read time |
| **FAQ** | Frequently asked questions (8 items) | Accordion with details |
| **Testimonials** | Client testimonials (6+) | Testimonial cards with ratings |
| **Contact** | Contact form and info | Form with validation, contact details |

---

## 🎯 Key Features Explained

### Enhanced Contact Form
- Name, email, phone, company fields
- Project type dropdown
- Budget range selection
- Timeline selection
- Detailed project description
- Form validation with error messages
- Success confirmation

### Testimonials Section
- 6 client testimonials in responsive grid
- Client avatars, names, and companies
- Star ratings
- Company information

### Blog System
- 10 blog articles with metadata
- Read time estimates
- Publication dates
- Responsive card layout
- Line-clamping for descriptions

### Services Page
- 8 professional services
- Numbered service cards
- Hover image scaling
- Service details and CTAs
- "Why Choose Us" feature section

### Projects Showcase
- 8 portfolio projects
- Hover effects with image scaling
- Project descriptions
- Call-to-action links
- Statistics section

---

## 🔄 Content Management

Mock data is stored in `src/app/helpers/stub-data/`:

- **blogs.ts** - Blog articles (10 entries)
- **faqs.ts** - FAQ questions and answers (8 items)
- **projects.ts** - Project portfolio (8 projects)
- **services.ts** - Service offerings (8 services)
- **testimonials.ts** - Client testimonials (6 entries)
- **employees.ts** - Team members
- **nav-links.ts** - Navigation links

To update content, modify these files with real data.

---

## 🌐 Navigation Links

- **Home** - `/`
- **About** - `/about`
- **Services** - `/services`
- **Projects** - `/projects`
- **Team** - `/team`
- **Blogs** - `/blogs`
- **FAQ** - `/faq`
- **Testimonials** - `/testimonials`
- **Contact** - `/contact`

---

## 💡 TypeScript Types

Key types defined in `src/app/helpers/types.ts`:

```typescript
type Service = {
  name: string;
  description?: string;
  image: string;
  link?: string;
  id: number;
};

type Project = {
  id: number;
  image: string;
  name: string;
  description?: string;
  link?: string;
};

type Testimonial = {
  id: number;
  from: string;
  company: string;
  description: string;
  image: string;
  link: string;
};
```

---

## 🔧 Configuration

### Tailwind CSS
- Dark mode enabled (class-based)
- Custom color scheme
- Responsive breakpoints

### Next.js Config
- TypeScript support
- Path aliases configured
- Optimized images

---

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

---

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

---

## 📞 Contact

- **Email:** hello@itperfect.com
- **Phone:** +1 (555) 0123
- **Address:** 123 Tech Street, San Francisco, CA 94105
- **Website:** https://itperfect.com

---

## 📄 License

MIT License - Feel free to use and modify for your needs.

---

## 🎉 Acknowledgments

Built with ❤️ by IT Perfect Team

*Where Technology Meets Ingenuity* 🚀
