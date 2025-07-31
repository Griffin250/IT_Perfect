# IT PERFECT


````md
# 🌐# IT PERFECT   — Where Technology Meets Ingenuity

Welcome to **TechIgnite**, your all-in-one service center for digital innovation and infrastructure. We don’t just code — we conquer. From stunning websites to seamless mobile apps, scalable DevOps, and robust network architecture — we turn your ideas into impact.

> 🚀 “Where Technology Meets Ingenuity.”

---

## 🔥 Highlights

- ✅ 32+ successful projects
- ✅ 22+ satisfied clients
- 🌍 Multilingual support (`en`, `fr`, `it`)
- 🐳 Dockerized for consistent deployment
- 🧪 Unit tested for reliability

---

## 🖥️ Live Features

- 📱 **Mobile & Web App Development**
- 🎨 **UI/UX Design**
- ⚙️ **DevOps & CI/CD Workflows**
- ☁️ **Cloud Storage & Networking**
- 🧱 **LAN/WAN Infrastructure & Fiber Deployments**
- 📞 **Telecom Services Integration (PBX, SIP, VoIP)**
- 🔐 **Network Security & Monitoring (IDS/IPS, VPNs)**
- 🛠️ **24/7 Maintenance & Support**

---

## 🧭 Navigation

- `/` — Landing Page (with i18n)
- `/projects` — See Our Work
- `/services` — Browse All Offerings
- `/book` — Book a Free Call

---

## 🧰 Tech Stack

| Tech         | Purpose                              |
|--------------|--------------------------------------|
| **Next.js**  | Frontend framework (App Router)      |
| **TypeScript** | Strict typing and reliability      |
| **TailwindCSS** | Fast and responsive styling       |
| **i18next**  | Internationalization (EN/FR/IT)      |
| **Docker**   | Containerized development & deployment |
| **Jest**     | Testing framework (unit/integration) |

---

## 🌍 Internationalization (i18n)

- Uses `next-i18next` for translation
- Folder-based routing: `/en`, `/fr`, `/it`
- Translations are located under `public/locales/{lang}/landing.json`

---

## 🐳 Running with Docker

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-org/techignite.git
   cd techignite
````

2. **Build the Docker image:**

   ```bash
   docker build -t techignite .
   ```

3. **Run the container:**

   ```bash
   docker run -p 3000:3000 techignite
   ```

4. **Visit the app:**

   ```
   http://localhost:3000
   ```

---

## 🧪 Running Tests

```bash
npm run test
# or with coverage
npm run test:coverage
```

Tests are written using **Jest** and **React Testing Library** and cover:

* UI components (e.g., `TextBadge`, `Button`, `SeeMore`)
* Page rendering
* i18n loading
* Functional services like language switching

---

## 📁 File Structure (Simplified)

```
/app
  /[locale]
    layout.tsx
    page.tsx
/components
  /reusable
    TextBadge.tsx
    Button.tsx
    SeeMore.tsx
  LanguageSwitcher.tsx
/i18n
  i18n.ts
  settings.ts
  i18nProvider.tsx
/public
  /locales
    /en/landing.json
    /fr/landing.json
    /it/landing.json
/tests
  /components
  /pages
Dockerfile
README.md
next.config.js
```

---

## 📞 Contact & Booking

To learn more or schedule a consultation:
👉 Visit `/book` or click **“Book a free call”** on the homepage.

---

## 📃 License

MIT — Feel free to use and contribute.

---

> “From vision to execution, TechIgnite is your digital engine.” 🚀

```

---
