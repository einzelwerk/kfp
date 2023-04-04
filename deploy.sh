set -e

npm run build

git add .
git commit -m "Deploy $1"
git push origin main
git push origin2 main
git subtree push --prefix dist origin gh-pages
git subtree push --prefix dist origin2 gh-pages
