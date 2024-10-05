## Draft-Craft

This project is a notes app built using React and Electron. The app features a simple, user-friendly interface designed for productivity and note management.

## Features

- **Markdown-based Note-Taking**: Create, edit, and save notes using markdown.
- **File Organization**: Organize notes into folders and subfolders.

## Prerequisites

Before starting, ensure that you have the following tools installed:

1. **Node.js** (v20)

   - [Official Download Page](https://nodejs.org/en/download/)
   - Installation Instructions: [How to Install Node.js](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

2. **Git**
   - [Official Download Page](https://git-scm.com/downloads)
   - Installation Instructions: [How to Install Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

## Installation Steps

- First, clone the repository and install the necessary dependencies:

```bash
git clone https://github.com/Kicchu02/Draft-Craft.git
cd Draft-Craft
npm install
```

- Run application

```bash
npm start
```

### Directory Structure

The source code for the React app is located in the `src/renderer` directory. This directory contains all the necessary components, utilities, styles, and other resources for the application.

Here’s a brief overview of the folder structure:

```bash
Draft-Craft/
├── src/                    # Source code of the application
│   ├── renderer/           # React app source code (located here)
│   │   ├── components/     # React components
│   │   ├── utils/          # Utility functions and helpers
│   │   ├── styles/         # CSS/SCSS files for styling
│   │   └── assets/         # Static assets like icons or images
│   ├── main/               # Electron main process files
│   └── ...
├── public/                 # Public static files
├── package.json            # App configuration and dependencies
├── webpack.config.js       # Webpack bundler configuration
└── README.md               # Project documentation (this file)
```
