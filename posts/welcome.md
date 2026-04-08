---
title: "Welcome to my shiny new DevOps Blog!"
date: "2026-04-08"
description: "Why I modernized my portfolio with Next.js and how it supports Markdown blogs."
---
## Automating my Portfolio

Hello World! Welcome to my brand new blog. As a DevOps Engineer, I strongly believe in automation, security, and using the right tools for the job. That's why I decided to modernize my static portfolio.

### The Old Setup
Previously, my website was built using an older boilerplate comprising Gulp, jQuery, and Bootstrap 4. While this setup has served me well over the years, the underlying dependencies started showing their age. Running an `npm audit` returned dozens of vulnerabilities!

### The New Architecture
I've migrated the site to **Next.js**, leveraging React for my layout, preserving my beloved Bootstrap UI, and taking advantage of Static Site Generation (SSG).

1. **Security**: We stripped away the vulnerable outdated packages.
2. **Speed**: Next.js automatically optimizes delivery and performs static rendering.
3. **Blogging**: You are reading this right now via a markdown file! Writing a new post is as easy as putting a `.md` file into the `posts/` folder and pushing it via git.

```bash
# How to add a new post
touch posts/my-new-post.md
```

Here's to the new chapter of automation! Feel free to reach out to me if you want to geek out over CI/CD pipelines, Terraform syntax, or just good ol' plain automation.
