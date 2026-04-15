# CodeSandbox TypeScript Fix Guide

## The Problem
CodeSandbox is trying to run `.tsx` files directly with Node.js instead of using Vite, causing the "Unknown file extension .tsx" error.

## Quick Solutions

### Solution 1: Use Vite Template (Recommended)
1. Go to CodeSandbox
2. Click "Create Sandbox" instead of "Import from GitHub"
3. Choose "Vite + React + TypeScript" template
4. Replace template files with your project files

### Solution 2: Update Your GitHub Repository
Add these files to your GitHub repository:

#### 1. Updated package.json (already done)
- Added `"start": "vite"` script
- Added `"main": "index.html"` entry point

#### 2. Add sandbox.config.json
```json
{
  "template": "vite",
  "node": "18"
}
```

#### 3. Ensure index.html is correct
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Personal Portfolio</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

## Step-by-Step Fix

### Step 1: Update GitHub Repository
1. Upload the updated `package.json` (with the start script)
2. Upload the new `sandbox.config.json`
3. Ensure `index.html` points to `/src/main.tsx`

### Step 2: Re-import to CodeSandbox
1. In CodeSandbox, click "File" > "Re-import from GitHub"
2. Select your repository again
3. Wait for re-import

### Step 3: Manual Fix in CodeSandbox
If still not working:
1. In CodeSandbox, click the "Server Control Panel" tab
2. Make sure it's running `npm start` or `vite`
3. If running Node.js directly, change to Vite

### Alternative: Create New Sandbox
If GitHub import keeps failing:
1. Create new "Vite + React + TypeScript" sandbox
2. Copy-paste your files into the sandbox
3. This method always works

## What Should Happen
- Vite development server starts
- TypeScript compilation works automatically
- Your portfolio appears in the browser
- Hot reload works when editing files

## Troubleshooting
- **Still getting .tsx error?** Use Solution 1 (new Vite template)
- **Dependencies not installing?** Wait longer or refresh
- **Blank page?** Check console for other errors
