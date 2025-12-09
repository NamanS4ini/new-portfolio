import projectsData from '@/data/projects.json'

export interface FileSystemNode {
  type: 'file' | 'directory';
  name: string;
  content?: string;
  children?: { [key: string]: FileSystemNode };
  executable?: boolean;
  action?: () => void;
}

export interface FileSystem {
  [key: string]: FileSystemNode;
}

export const createFileSystem = (): FileSystem => {
  // Generate project directories from JSON
  const projectsChildren: { [key: string]: FileSystemNode } = {}
  
  console.log('Creating file system with projects:', projectsData.projects.length)
  
  projectsData.projects.forEach((project) => {
    console.log('Adding project:', project.id, project.name)
    projectsChildren[project.id] = {
      type: 'directory',
      name: project.id,
      children: {
        'description.txt': {
          type: 'file',
          name: 'description.txt',
          content: `${project.name.toUpperCase()}
${'='.repeat(project.name.length)}

Tech Stack: ${project.tech.join(', ')}

Description:
-----------
${project.description}

GitHub: ${project.github}
Live Demo: ${project.live}

Commands:
---------
./run.sh    - Open live demo
./github.sh - Open GitHub repository
`
        },
        'run.sh': {
          type: 'file',
          name: 'run.sh',
          executable: true,
          content: 'Run this script with: "./run.sh"\n',
          action: () => {
            window.open(project.live, '_blank')
          }
        },
        'github.sh': {
          type: 'file',
          name: 'github.sh',
          executable: true,
          content: 'Run this script with: "./github.sh"\n',
          action: () => {
            window.open(project.github, '_blank')
          }
        }
      }
    }
  })
  
  console.log('Projects children created:', Object.keys(projectsChildren))
  
  const fs: FileSystem = {
    'about.txt': {
      type: 'file',
      name: 'about.txt',
      content: `ABOUT NAMAN SAINI
=================

Hi, I'm Naman Saini, a Computer Science student at the Central University 
of Haryana in Mahendergarh. Currently, I am pursuing my bachelor's degree. 
I completed my high school education at Happy Evergreen Sr. Sec. School, 
achieving a score of 96%.

My journey into coding began in the 11th grade, driven by my desire to 
showcase my creativity through the things I build. I believe creativity 
can be harnessed to create beautiful and impactful solutions, and coding 
is my chosen medium to express this creativity.

I am continuously learning and evolving in my field. For me, learning is 
a lifelong journey, and I firmly believe it should be for everyone. I am 
passionate about expanding my knowledge and skills, and I am always eager 
to take on new challenges.

Contact:
--------
Email: namansaini464@gmail.com
GitHub: https://github.com/namans4ini
LinkedIn: https://linkedin.com/in/namans4ini
Twitter: https://twitter.com/namans4ini
LeetCode: https://leetcode.com/namans4ini
`
    },
    'skills.txt': {
      type: 'file',
      name: 'skills.txt',
      content: `TECHNICAL SKILLS
================

Programming Languages:
---------------------
• JavaScript / TypeScript
• Python
• C++
• HTML5 / CSS3

Frontend Technologies:
---------------------
• React.js
• Next.js
• Tailwind CSS

Backend Technologies:
--------------------
• Node.js
• MongoDB
• PostgreSQL

Tools & Others:
--------------
• Git & GitHub
• RESTful APIs
• Responsive Design
• Problem Solving (LeetCode)
`
    },
    'projects': {
      type: 'directory',
      name: 'projects',
      children: projectsChildren
    },
    'contact.txt': {
      type: 'file',
      name: 'contact.txt',
      content: `CONTACT INFORMATION
===================

Feel free to reach out to me through any of these channels:

Email:
------
namansaini464@gmail.com

Social Media:
------------
GitHub:   https://github.com/namans4ini
LinkedIn: https://linkedin.com/in/namans4ini
Twitter:  https://twitter.com/namans4ini
LeetCode: https://leetcode.com/namans4ini

I'm always open to:
------------------
• Job opportunities
• Collaboration on interesting projects
• Technical discussions
• Networking with fellow developers

Response Time:
-------------
I typically respond within 24-48 hours.

Looking forward to connecting with you!
`
    }
  }
  
  console.log('File system created, root keys:', Object.keys(fs))
  return fs
}
