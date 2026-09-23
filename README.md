<div align="center">

# Mohamed Elnemr — Portfolio

*AI/ML Engineer & Computer Science Student at Mansoura University*

[Live Preview](https://my-portfolio-drab-phi-47.vercel.app) &nbsp;•&nbsp; [LinkedIn](https://www.linkedin.com/in/tiger0x01/) &nbsp;•&nbsp; [GitHub](https://github.com/Tiger0x01)

</div>

---

## Overview

High-craft, editorial-grade personal portfolio and case-study archive engineered with **React, Vite, TypeScript, and Tailwind CSS**. Designed with a focus on tactile typography, fluid spring physics, genuine dark/light mode parity, and full bilingual RTL/LTR architectural support.

## Core Features

* **Kinetic Typography & Layout**: Editorial grid system with high-contrast neutral scales.
* **Spring-Physics Custom Cursor**: Directional context-aware cursor with zero native-pointer interference.
* **Bilingual Engine**: Seamless state-driven RTL (Arabic) and LTR (English) layout switching.
* **Interactive Case Studies**: Deep-dive modals covering architectural breakdowns, problem statements, tech stack ribbons, and quantitative/qualitative impact.
* **Streamlined Contact Flow**: Direct mailto integration with clipboard fallback and validation.

## Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Framework & Build** | React, TypeScript, Vite |
| **Styling & UI** | Tailwind CSS, Lucide Icons |
| **Animation & Physics** | Motion (Framer Motion) `useSpring`, `useTransform` |
| **State Management** | React Context API (`PortfolioContext`) |

## Featured Case Studies

* **Bayan AI**: Cross-cultural communication assistant powered by a RAG pipeline (FAISS, Qwen 2.5, FastAPI, React).
* **KINOVA**: Real-time AI biomechanics tracking and exercise repetition counter using MediaPipe Pose & Random Forest.
* **MUSTAWFI**: Document intelligence platform for automated loan application data extraction via Computer Vision & ML.
* **Hand Gesture Recognition**: Real-time sign language sign classification using Python, OpenCV, and MediaPipe landmarks.

## Project Structure

```text
my-portfolio/
├── public/                 # Static assets, CV PDF, media
├── src/
│   ├── assets/             # Images, CV files, branding
│   ├── components/         # Modular UI (Hero, About, Projects, Modal, CustomCursor)
│   ├── context/            # PortfolioContext (theme, lang, modals, cursor state)
│   ├── data/               # Bilingual translations & project case studies
│   ├── types/              # TypeScript interface definitions
│   ├── App.tsx             # Root layout orchestrator
│   └── main.tsx            # Application entry point
├── package.json
└── vite.config.ts

```

## Getting Started Locally

```bash
# Clone the repository
git clone [https://github.com/Tiger0x01/My-Portfolio.git](https://github.com/Tiger0x01/My-Portfolio.git)
cd My-Portfolio

# Install dependencies
npm install

# Start development server
npm run dev

```

## Build & Production

```bash
# Typecheck & production bundle
npm run build

# Preview production build locally
npm run preview

```

## Deployment

Configured for continuous deployment via **Vercel**:

* **Framework Preset**: Vite
* **Build Command**: `npm run build`
* **Output Directory**: `dist`

## License

Distributed under the MIT License. See [LICENSE](https://www.google.com/search?q=LICENSE&utm_source=gemini) for details.
