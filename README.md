
# KRhythm Sensing Technology

🩺 **KRhythm Sensing Technology** (Health Monitoring App) is a modern desktop application built with Electron, React, and Vite, designed to display real-time or recorded health-related data such as ECG signals, heart rate, blood oxygen levels, and more.

This application is commonly used in clinical or research environments to visualize and monitor patient vitals or sensor data from external medical devices.

---

## ✨ Features

- 📊 Real-time graphical data display (ECG, heart rate, etc.)
- 📁 Offline data view & playback
- 🧠 User-friendly interface built with React and Bootstrap
- 🪟 Cross-platform desktop support using Electron
- 🛠️ Easily extensible for additional sensors or parameters

---

## 💡 Use Cases

- Hospital monitoring stations
- Home-care vitals tracking
- Embedded medical device UIs
- Research tools for biosignal visualization

---

## 📦 Tech Stack

- 🚀 Electron - Cross-platform desktop application framework
- ⚛️ React - Component-based UI library
- 📦 TypeScript - Type-safe JavaScript (for Titlebar)
- 📦 JavaScript - Window-level logic
- 🎨 Bootstrap - Styling framework
- ⚡ Vite - Lightning-fast bundler
- 🪟 Custom Window & Titlebar
- 🛠️ Electron Builder - Packaging apps for distribution

---

## Project Structure

<!-- prettier-ignore-start -->
```markdown
├── app/                        # Renderer (frontend)
│   ├── assets/                 # Static files (images, icons)
│   ├── components/             # React components
│   │   ├── welcome/            # Welcome window (JSX)
│   │   └── window/             # Custom titlebar (TSX)
│   ├── styles/                 # App and window styles
│   ├── index.html              # Main HTML entry
│   └── renderer.tsx           # React app entry point
│
├── lib/                        # Main process (backend)
│   ├── main/                   # Electron main process
│   ├── preload/                # Secure preload APIs
│   └── window/                 # Window setup
│
├── resources/                 # Icons, installer assets
├── .eslintrc                  # ESLint configuration
├── .prettierrc                # Prettier configuration
├── electron-builder.yml       # Builder config for packaging
├── electron.vite.config.ts    # Vite + Electron bundler config
├── package.json               # Scripts and dependencies
├── tsconfig.node.json         # TypeScript config (main)
└── tsconfig.web.json          # TypeScript config (renderer)


```
<!-- prettier-ignore-end -->

---

## 🚀 Installation

```bash
git clone https://github.com/RAJAGOPAL5
cd electron-react-app

# Install dependencies
npm install
# or
pnpm install
```

---

## 🛠 Development

```bash
npm run dev
# or
pnpm dev
```

This will launch Electron with live-reload so you can test changes instantly.

---

## 📦 Build for Production

```bash
# Windows
npm run build:win

# macOS
npm run build:mac

# Linux
npm run build:linux

# Unpacked (all platforms)
npm run build:unpack
```

Distribution files will be located in the `dist` directory.
