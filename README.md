# SyCd

A tool for synthesizing conceptual designs for sensors. This is based on my research work carried out at the Indian Institute of Science, Bangalore.

Version v1.0 uses the angular-meteor framework.

For a detailed explanation of how the app works (data model, synthesis flow, search algorithms, and main components), see **[docs/LOGIC.md](docs/LOGIC.md)**.

## Install and run

1. **Node version**  
   This project uses Meteor 1.12, which works with **Node 8**. If you use [nvm](https://github.com/nvm-sh/nvm), run:
   ```bash
   nvm install
   nvm use
   ```

2. **Install Meteor**  
   Install the [Meteor](https://www.meteor.com/install) toolkit (use the install script for your OS). When you run `meteor` in this project, the version in `.meteor/release` (1.12.1) is used.

3. **Install npm dependencies (exact versions)**  
   From the project root:
   ```bash
   meteor npm install
   ```
   This uses `package-lock.json` so you get the same dependency tree every time.

4. **Run the app**  
   ```bash
   meteor
   ```
   Then open http://localhost:3000 in your browser.

## Changes made for compatibility

- **MathJax**: The old `cdn.mathjax.org` CDN was retired. The app now loads MathJax from `cdnjs.cloudflare.com` (MathJax 2.7.9).
- **Meteor**: The project was upgraded from Meteor 1.2.1 to 1.12.1 so it runs on a more recent Node and receives security updates.

## Pinned versions (avoid surprise breakage)

Software versions are pinned so the app keeps working. See **VERSIONS.md** for the full list and which files to keep committed.

- **Do not** run `meteor update` unless you are prepared to fix breakage.
- Keep **.meteor/release**, **.meteor/versions**, **package.json**, and **package-lock.json** committed.
- Use Node 8 (via `.nvmrc` and nvm) for consistency.