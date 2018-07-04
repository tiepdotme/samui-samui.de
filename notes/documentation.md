- shortcodes: https://gohugo.io/content-management/shortcodes/
- references: https://gohugo.io/content-management/cross-references/

# preparing system for search
sudo apt update
sudo apt install python python-dev python3 python3-dev
sudo apt install virtualenv
pip install --upgrade virtualenv
virtualenv --python python3 env
source env/bin/activate
pip install google-cloud-storage

https://stackoverflow.com/questions/6590688/is-it-bad-to-have-my-virtualenv-directory-inside-my-git-repository

run `deactivate` to deactivate the python virtual environment
virtualenv --no-site-packages --distribute env && source .env/bin/activate && pip install -r requirements.txt


# squashing repo

```
git checkout --orphan new-squashed-branch master
git commit
```
