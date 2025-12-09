# Projects Data

This folder contains the centralized project data used across both GUI and Terminal modes of the portfolio.

## projects.json

This file contains all your project information. Edit this file to add, remove, or update projects.

### Structure

```json
{
  "projects": [
    {
      "id": "unique-project-id",
      "name": "Project Display Name",
      "description": "Short description of the project",
      "tech": ["Tech1", "Tech2", "Tech3"],
      "image": "/path/to/image.jpg",
      "github": "https://github.com/username/repo",
      "live": "https://your-live-demo.com",
      "featured": true
    }
  ]
}
```

### Fields

- **id**: Unique identifier (lowercase, use hyphens) - used for terminal navigation
- **name**: Display name shown in GUI and terminal
- **description**: Brief description of the project
- **tech**: Array of technologies used (must match techIcons in ProjectsSection.tsx)
- **image**: Path to project image (place images in `/public` folder)
- **github**: GitHub repository URL
- **live**: Live demo URL (opens when running `./run.sh` in terminal)
- **featured**: Boolean to mark as featured project

### Supported Tech Icons

The following technologies have icons:
- Next.js
- TypeScript
- Tailwind CSS
- React
- Node.js
- MongoDB
- PostgreSQL
- Python
- Flask
- Firebase
- Redux
- Stripe
- Socket.io
- OpenAI API
- GSAP
- Material-UI

### How to Add a New Project

1. Add your project image to `/public/projects/`
2. Add a new object to the `projects` array in `projects.json`
3. Fill in all required fields
4. Save the file

The changes will automatically appear in both GUI and Terminal modes!

### Terminal Usage

After adding a project with `id: "my-new-project"`, you can navigate to it in terminal:

```bash
cd projects
ls                    # See all projects
cd my-new-project     # Navigate to your project
cat description.txt   # Read description
./run.sh             # Open live demo
```
