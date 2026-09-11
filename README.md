# ELOBoost

Landing page for an AI chess training product. Dark theme, animated board, pricing, and coach sections.

Live: [ai-chesselo.vercel.app](https://ai-chesselo.vercel.app)

## Project Overview

This repository contains a single-page React application that showcases:

- A floating navigation bar with responsive mobile menu
- Hero section with animated chessboard visual and strong call-to-actions
- Feature cards for AI analysis, tactics, and training workflows
- Testimonials and rating progression highlights
- Tiered pricing section with recommended plan emphasis
- Coach/team showcase and structured footer content

## Visual Mindmap (SVG)

<svg viewBox="0 0 980 520" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="ELOBoost landing page structure mindmap" width="100%">
  <defs>
    <style>
      .bg { fill: #0a0a0a; }
      .card { fill: #141414; stroke: #2b2b2b; stroke-width: 2; rx: 14; }
      .core { fill: #111827; stroke: #22c55e; stroke-width: 2.5; }
      .txt { fill: #f5f5f5; font: 600 16px Inter, Arial, sans-serif; }
      .sub { fill: #a3a3a3; font: 500 12px Inter, Arial, sans-serif; }
      .line { stroke: #3f3f46; stroke-width: 2; fill: none; }
      .accent { stroke: #22c55e; }
    </style>
  </defs>

  <rect class="bg" x="0" y="0" width="980" height="520" />

  <rect class="core" x="390" y="220" width="200" height="80" rx="16"/>
  <text class="txt" x="490" y="252" text-anchor="middle">ELOBoost</text>
  <text class="sub" x="490" y="274" text-anchor="middle">Chess Landing Page</text>

  <path class="line accent" d="M390 260 C320 260, 300 120, 220 110"/>
  <path class="line" d="M390 260 C300 260, 280 210, 180 210"/>
  <path class="line" d="M390 260 C310 260, 280 330, 200 360"/>
  <path class="line" d="M590 260 C680 260, 700 120, 780 110"/>
  <path class="line" d="M590 260 C690 260, 730 210, 820 210"/>
  <path class="line" d="M590 260 C670 260, 700 340, 780 370"/>

  <rect class="card" x="80" y="70" width="280" height="80" rx="14"/>
  <text class="txt" x="100" y="100">Navigation</text>
  <text class="sub" x="100" y="122">Floating pill, desktop links, mobile menu</text>

  <rect class="card" x="60" y="170" width="300" height="80" rx="14"/>
  <text class="txt" x="80" y="200">Hero</text>
  <text class="sub" x="80" y="222">Chessboard visual, CTA buttons, social proof</text>

  <rect class="card" x="80" y="320" width="280" height="80" rx="14"/>
  <text class="txt" x="100" y="350">Feature Grid</text>
  <text class="sub" x="100" y="372">AI analysis, openings, endgames, tactics</text>

  <rect class="card" x="620" y="70" width="280" height="80" rx="14"/>
  <text class="txt" x="640" y="100">Testimonials</text>
  <text class="sub" x="640" y="122">Before/after ratings and trust signals</text>

  <rect class="card" x="620" y="170" width="300" height="80" rx="14"/>
  <text class="txt" x="640" y="200">Pricing</text>
  <text class="sub" x="640" y="222">3 plans with highlighted recommended tier</text>

  <rect class="card" x="620" y="330" width="280" height="80" rx="14"/>
  <text class="txt" x="640" y="360">Team + Footer</text>
  <text class="sub" x="640" y="382">Coach showcase, links, newsletter signup</text>
</svg>

## Tech Stack

- React 19
- Vite 7
- Tailwind CSS 3
- Framer Motion
- Lenis smooth scrolling
- Lucide React icons

## Run Locally

```bash
npm install
npm run dev
```

## Build & Quality

```bash
npm run lint
npm run build
```

## Deployment

Cloudflare Wrangler scripts are available:

```bash
npm run preview
npm run deploy
```
