BLOCKLAND DESKTOP BUILD
=======================
Option A - build on your PC (Windows, needs Node.js 18+ from nodejs.org):
  1. Open a terminal in this folder
  2. npm install
  3. npm run dist
  4. Your installer and portable .exe appear in the dist folder.
  (npm start runs the game without building.)

Option B - get a download link automatically:
  1. Create a free GitHub repository and upload this whole folder.
  2. Go to Actions > "Build Windows exe" > Run workflow (or push a tag like v1.0.0).
  3. When it finishes, download the .exe from the run's Artifacts,
     or from the Releases page if you pushed a tag. That page is your public download link.
