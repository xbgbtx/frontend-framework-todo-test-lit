# Lit Framework Testing Notes

Managed to generate a working github page.

Had to change the base href myself - this was defined in index.html 
as generated by the scaffold script

Typescript might be a better experience.

Need to install rollup build during scaffold for apps.

# Steps to publish to github code

```
git worktree add -B gh-pages gh-pages
cd gh-pages
cd ..
rm -rf gh-pages/*
cp dist/* gh-pages
cd gh-pages
git add -A && git commit -v && git push

```