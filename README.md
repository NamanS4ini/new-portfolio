# Portfolio Website

A modern, dual-interface portfolio website featuring both a traditional GUI and an interactive terminal mode. Built with Next.js 14 and designed to provide a unique user experience.

## Features

### Dual Interface
- **GUI Mode**: Modern visual interface with animations and interactive elements
- **Terminal Mode**: Linux-style command-line interface for exploring portfolio content
- Seamless switching between both modes

### GUI Interface
- Custom animated cursor with GSAP
- Responsive design for all devices
- Dark mode optimized
- Smooth animations and transitions
- Interactive project showcases
- Contact form integration

### Terminal Interface
- Full Linux-style command support (ls, cd, cat, pwd, clear, etc.)
- Virtual file system with project directories
- Executable scripts to open projects and repositories
- Command history with arrow key navigation
- Auto-complete functionality
- Custom themed xterm.js terminal

### Content Management
- Centralized project data in JSON format
- Single source of truth for both GUI and Terminal modes
- Easy to update and maintain

## Tech Stack

### Core Technologies
- [Next.js 16](https://nextjs.org/) - React framework with App Router
- [TypeScript](https://www.typescriptlang.org/) - Type-safe development
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [React](https://react.dev/) - UI library

### UI Components & Animations
- [shadcn/ui](https://ui.shadcn.com/) - Re-usable component library
- [React Bits](https://reactbits.dev/) - Advanced UI components
- [GSAP](https://greensock.com/gsap/) - Professional-grade animation
- [Framer Motion](https://www.framer.com/motion/) - React animation library
- [Lucide React](https://lucide.dev/) - Icon library
- [React Icons](https://react-icons.github.io/react-icons/) - Additional icons

### Terminal Emulation
- [@xterm/xterm](https://xtermjs.org/) - Terminal emulator for the browser
- [@xterm/addon-fit](https://github.com/xtermjs/xterm.js) - Terminal viewport fitting

## Getting Started

### Prerequisites
- Node.js 18.0 or higher
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository
```bash
git clone https://github.com/NamanS4ini/new-portfolio.git
cd new-portfolio
```

2. Install dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm run start
```

## Project Structure

```
portfolio/
├── app/                    # Next.js app directory
│   ├── gui/               # GUI mode pages
│   ├── terminal/          # Terminal mode pages
│   └── page.tsx           # Landing page
├── components/            # React components
│   ├── sections/         # Page sections
│   ├── ui/              # UI components
│   └── animations.tsx   # Animation components
├── data/                 # Content data
│   └── projects.json    # Project information
├── lib/                  # Utility functions
│   └── fileSystem.ts    # Virtual file system for terminal
└── public/              # Static assets
```

## Customization

### Adding Projects

Edit `data/projects.json` to add, remove, or update projects. Changes will automatically reflect in both GUI and Terminal modes.

```json
{
  "id": "project-id",
  "name": "Project Name",
  "description": "Project description",
  "tech": ["Tech1", "Tech2"],
  "image": "/path/to/image.jpg",
  "github": "https://github.com/username/repo",
  "live": "https://project-url.com",
  "featured": true
}
```

### Terminal Commands

Available commands in terminal mode:
- `info` - Display portfolio summary
- `ls` - List files and directories
- `cd <dir>` - Change directory
- `cat <file>` - Display file contents
- `pwd` - Print working directory
- `clear` - Clear terminal screen
- `./run.sh` - Execute project script (opens live demo)
- `./github.sh` - Open GitHub repository
- `gui` - Switch to GUI mode
- `help` - Show available commands

## Deployment

This project can be deployed on Vercel, Netlify, or any platform that supports Next.js.

### Deploy on Vercel

The easiest way to deploy is using the [Vercel Platform](https://vercel.com/new).

```bash
npm run build
```

For more details, see [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## License

This project is open source and available under the MIT License.

## Contact

Naman Saini
- GitHub: [@NamanS4ini](https://github.com/NamanS4ini)
- LinkedIn: [namans4ini](https://linkedin.com/in/namans4ini)
- Email: namansaini464@gmail.com
