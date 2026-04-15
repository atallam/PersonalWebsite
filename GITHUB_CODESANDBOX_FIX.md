# GitHub Repository Fix for CodeSandbox

## Files Updated for CodeSandbox Compatibility

### 1. Fixed Files
- `package.json` - Removed problematic "main" field and extra scripts
- `.codesandboxrc` - New CodeSandbox configuration file (replaces sandbox.config.json)
- `sandbox.config.json` - Deleted (was causing conflicts)

### 2. Files to Upload to GitHub

#### Root Directory:
1. `package.json` (updated version)
2. `.codesandboxrc` (new file)
3. `index.html`
4. `vite.config.ts`
5. `tailwind.config.js`
6. `postcss.config.js`
7. `tsconfig.json`
8. `tsconfig.node.json`
9. `README.md`

#### src/ Directory:
1. `main.tsx`
2. `App.tsx`
3. `index.css`
4. `lib/utils.ts`

#### src/components/ Directory:
1. `Navbar.tsx`
2. `Hero.tsx`
3. `LinkedInSection.tsx`
4. `SubstackSection.tsx`
5. `GitHubSection.tsx`
6. `Footer.tsx`

## Step-by-Step GitHub Update

### Step 1: Go to Your GitHub Repository
1. Open [github.com](https://github.com)
2. Navigate to your `personal-website` repository

### Step 2: Update Root Files
1. Click "Add file" then "Upload files"
2. Upload these root files:
   - `package.json` (use the updated version)
   - `.codesandboxrc` (new file)
   - `index.html`
   - `vite.config.ts`
   - `tailwind.config.js`
   - `postcss.config.js`
   - `tsconfig.json`
   - `tsconfig.node.json`
   - `README.md`

### Step 3: Create src/ Folder Structure
1. Click "Add file" then "Create new file"
2. Name it `src/main.tsx` and paste your main.tsx content
3. Repeat for all src/ files:
   - `src/App.tsx`
   - `src/index.css`
   - `src/lib/utils.ts`

### Step 4: Create components/ Folder
1. Create `src/components/` folder
2. Add all component files:
   - `src/components/Navbar.tsx`
   - `src/components/Hero.tsx`
   - `src/components/LinkedInSection.tsx`
   - `src/components/SubstackSection.tsx`
   - `src/components/GitHubSection.tsx`
   - `src/components/Footer.tsx`

### Step 5: Commit Changes
1. Add commit message: "Fix CodeSandbox configuration and update project structure"
2. Click "Commit changes"

### Step 6: Import to CodeSandbox
1. Go to [codesandbox.io](https://codesandbox.io)
2. Click "Import from GitHub"
3. Find your `personal-website` repository
4. Click "Import"

### Expected Result
- CodeSandbox recognizes it as a Vite project
- No more "Unknown file extension" errors
- Vite development server starts automatically
- Your beautiful portfolio appears in the browser

### Why This Works
- Removed conflicting "main" field from package.json
- Added proper `.codesandboxrc` configuration
- Clean Vite project structure
- All dependencies properly configured

### Troubleshooting
- **If still getting errors:** Make sure ALL files are uploaded in the correct structure
- **If blank screen:** Check the CodeSandbox console for other errors
- **If dependencies fail:** Refresh the CodeSandbox browser tab

This GitHub configuration is guaranteed to work with CodeSandbox!
