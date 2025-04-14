# ⚙️ Vue.js Dev Container Setup

This project uses a **VS Code Dev Container** with a preconfigured Node.js and Vue development environment, powered by Docker.

---

## 🚀 Quick Start

### 1. Clone this repository

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo

2. Open in VS Code

Make sure you have the Dev Containers extension installed in VS Code.

Then, open the folder:

code .

When prompted, “Reopen in Container”, accept it. VS Code will automatically build the container and set up your environment.

⸻

🛠️ Initial Setup (if you’re setting it up for the first time)

Create the dev container

Create a .devcontainer/ folder and add:
	•	devcontainer.json
	•	Dockerfile

This repo already includes them.

Scaffold the Vue app

Inside the repo root, run:

npm create vite@latest myapp

Follow the prompts (select vue, optionally typescript, etc.).

This creates a Vue 3 app inside the myapp/ directory.

⸻

📁 Folder Structure

vue-dev/
├── .devcontainer/
│   ├── devcontainer.json
│   └── Dockerfile
├── myapp/
│   ├── package.json
│   └── ...
└── README.md



⸻

⚡ Features
	•	Alpine-based Node.js environment
	•	Git and Bash installed
	•	Vue CLI and/or Vite support
	•	Port 5173 automatically forwarded
	•	Recommended VS Code extensions installed

⸻

📦 Commands

After the container is ready, go into the app directory:

cd myapp
npm install
npm run dev

Your app will be accessible at http://localhost:5173

⸻

🧰 Optional

If you prefer not to use the myapp/ subdirectory, you can move its contents to the root and update devcontainer.json accordingly.

⸻

🧼 Cleanup

To rebuild the container or fix issues:

Dev Containers: Rebuild Container

or manually:

docker rm -f <container-name>



⸻

🧠 Requirements
	•	Docker
	•	VS Code
	•	Dev Containers Extension

⸻

Happy hacking! 💻