FULL_NAME="Qquanwei"
GITHUB_USER="Qquanwei"
REPO_NAME="recoil-enhance"
sed -i.mybak "s/ryansonshine/$GITHUB_USER/g; s/typescript-npm-package-template\|my-package-name/$REPO_NAME/g; s/Ryan Sonshine/$FULL_NAME/g" package.json package-lock.json README.md
rm *.mybak
