# IDM Smart Tech — Digital Marketing & Technology Agency

Official redesigned web experience for [IDM Smart Tech](https://www.idmsmarttech.com/), featuring:
- **Cinematic 300-Frame Scroll Animation**: Fluid canvas-based scrub animation synchronized with scroll velocity.
- **Asymmetric Editorial Layout**: Perfectly balanced left-column editorial content and open-stage visual presentation.
- **Full Mobile Optimization**: Smart focal-point centering, dynamic viewport (`dvh`) scaling, responsive touch controls, and collapsible panels.
- **Direct Conversion Channels**: Integrated WhatsApp direct routing, direct calling, and verified location details for the Shamshabad, Hyderabad headquarters.
- **Interactive 3D AI Concierge Avatar**: Real-time procedural 3D gyroscope avatar with cursor gaze tracking and instant intent inquiry drawer.

---

## 🚀 Quick Start (Local Development)

### Prerequisites
- Node.js (v18 or higher)
- npm

### Installation
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Run Production Server
```bash
npm start
```
The app will be accessible at `http://localhost:8080/`.

---

## ☁️ Deploying to Zoho Catalyst

This project includes native configuration for **Zoho Catalyst**:

### Option 1: Web Client Hosting (Slate / Static Hosting)
1. In your Zoho Catalyst console (`project: idm`), navigate to **Hosting** / **Web Client Hosting**.
2. Deploy the `dist` folder directly or via Catalyst CLI:
   ```bash
   catalyst deploy --only client
   ```
3. `catalyst.json` is preconfigured to route the web client to `dist`.

### Option 2: AppSail (Node.js Container)
1. Navigate to **AppSail** in your Catalyst project.
2. Connect this GitHub repository (`https://github.com/maruthisaiteja/idm-smart-tech`).
3. Set the build command to `npm run build` and run command to `npm start`.

---

## 🛠️ Tech Stack
- **Framework**: React 19 + TypeScript
- **Bundler**: Vite
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Graphics**: HTML5 Canvas (3D Procedural Gyroscope & 300-Frame Image Stream)
