# Pinned software versions

These versions are pinned so the project keeps working without surprise breakage from upgrades. **Commit the files listed below** so everyone (and future you) gets the same versions.

## Version lock files (do not remove or ignore)

| What | File | Purpose |
|------|------|--------|
| Meteor release | `.meteor/release` | Pins Meteor to **1.12.1** |
| Meteor packages | `.meteor/versions` | Pins every Meteor package to exact versions (urigo:angular, angular, mongo, etc.) |
| npm dependencies | `package.json` + `package-lock.json` | Pins **@babel/runtime@7.28.6** and exact tree |
| Node version | `.nvmrc` | Pins Node to **8** (use with nvm) |
| MathJax | `client/index.html` | Script URL pins MathJax to **2.7.9** (cdnjs) |

## Do not upgrade without testing

- Do **not** run `meteor update` unless you are prepared to fix breakage.
- Do **not** change `@babel/runtime` or other npm deps without testing.
- Keep **package-lock.json** committed so `meteor npm install` reproduces the same tree.

## Recommended install (reproducible)

```bash
nvm use          # or: nvm install 8 && nvm use
meteor npm install   # installs exact versions from package-lock.json
meteor run
```
