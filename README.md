# PU Fest - Panpacific University Festival Website

Welcome to the official repository for the PU Fest, the digital showcase for the annual Panpacific University Festival. This project is a dynamic, responsive, and interactive web application designed to be the central portal for all festival-related information, from event schedules to artist highlights.

This website serves as a digital archive and promotional platform for the 2025 event, built with a modern tech stack to deliver a fast and engaging user experience.

##  Features

- **Interactive Event Schedule:** A timeline view of all festival events, including stage information and descriptions.
- **Talent Showcase:** A dedicated page featuring the headline artists (like Gloc-9) and other performers, complete with bios, social links, and embedded videos.
- **Contest Information:** Details and links for festival competitions such as Battle of the Bands, Cosplay, and Call for Performers.
- **Live Leaderboard:** A display of the final rankings for the main competitions, adding a competitive and engaging element.
- **Ticket Information:** A clear breakdown of past ticket tiers, pricing, and FAQs, serving as a reference for future events.
- **Dynamic & Themed UI:** A dark-themed, "cyber-glitch" aesthetic with animations, transitions, and interactive elements to match the high-energy festival atmosphere.
- **Homepage:** A feature-rich landing page including a hero section, an aftermovie showcase, a photo gallery, and an interactive festival playlist.

## Tech Stack

This project is built with a modern, component-based architecture using the following technologies:

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [ShadCN/UI](https://ui.shadcn.com/)
- **Icons:** [Lucide React](https://lucide.dev/guide/packages/lucide-react)
- **Animations:** [Tailwind CSS Animations](https://tailwindcss.com/docs/animation) & [Framer Motion](https://www.framer.com/motion/) (implicitly via ShadCN)

##  Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have Node.js and npm (or yarn/pnpm) installed on your machine.
- Node.js (v18.x or later recommended)
- npm

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/pu-fest-hub.git
   cd pu-fest-hub
   ```

2. **Install NPM packages:**
   ```sh
   npm install
   ```

### Running the Development Server

Once the dependencies are installed, you can start the local development server:

```sh
npm run dev
```

Open [http://localhost:9002](http://localhost:9002) with your browser to see the result. The site uses port `9002` as configured in `package.json`.

You can start editing the pages, and the browser will auto-update as you save your changes. For example, the main landing page can be found at `src/app/page.tsx`.

##  Project Structure

The project follows the standard Next.js App Router structure:

```
.
├── src/
│   ├── app/                # Main application routes
│   │   ├── (pages)/        # Route groups for each page
│   │   ├── layout.tsx      # Root layout
│   │   └── globals.css     # Global styles and Tailwind directives
│   ├── components/
│   │   ├── common/         # Shared components (Header, Footer)
│   │   └── ui/             # ShadCN UI components
│   ├── lib/                # Utility functions and data
│   │   ├── data.ts         # Static data for schedule, talent, etc.
│   │   └── utils.ts        # Helper functions (e.g., cn for classnames)
│   └── public/             # Static assets (images, fonts, videos)
├── package.json
└── tailwind.config.ts
```

This project was developed to create a memorable and immersive digital experience for the Panpacific University community and festival attendees.
