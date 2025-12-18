---
description: Push current code updates to GitHub
---

# Push to GitHub

This workflow pushes the current changes to the configured GitHub repository.

// turbo-all
1. Add all changes
2. Commit with a generic update message (or custom if provided)
3. Push to main branch

```bash
git add .
git commit -m "Update: Automatic push after changes"
git push origin main
```
