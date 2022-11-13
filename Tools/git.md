git repo link: git@github.com:emRhino/geolocalizator.git

git fetch
git pull

Istniejace repo:
git remote add origin git@github.com:emRhino/geolocalizator.git
git branch -M main
git push -u origin main

tworzenie nowe repo w CLI:
echo "# geolocalizator" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:emRhino/geolocalizator.git
git push -u origin main