`@author: ValenciaArcega` - 26 April 2024

# `Git VCS (v2.45)`

To initialize a repository on a directory, we should type

```bash
git init
```

Now we got the `.git` hidden folder on that directory and inside there is all the database of the **git following**.

In unix to review the hidden folders we have to use

```bash
ls -a
```

Now every change on git repo tracking files, will generate a flow to control those elements and their history.

## Git identity

> 🇲🇽 Muchas herramientas de Git, como GitHub y GitLab, utilizan tu identidad de Git para mostrar información sobre tus commits y tu perfil de usuario. Por ejemplo, tu nombre y correo electrónico aparecerán en la página de historial de commits de cada repositorio y en tu perfil de usuario.

To set the email it is neccessary to use

```bash
git config --global user.email "yourEmail"
```

And to set the name

```bash
git config --global user.name ""
```

# Staging area

To save our files on a _preparation room_ we should to use the command

```bash
git add anyFileOrDirectory.extension
```

Then to check changes

```bash
git status
```

The fanciest

```bash
git status --short | -s
```

> A really popular but **NOT RECOMENDABLE** technique, is to use `git add .` to upload all the modified files to the staging area.

☝️ This can be an option just when is really neccessary to upload all the files.

If we want to add more than one file, we should just separate by spaces

```bash
git add file.txt secondFile.txt
```

### Unstaged files

To remove files from the staging area, we should type

```bash
git rm --cached file.txt
```

# Commits

Now to really add the files into the _local-repo_

```bash
git commit -m ""
```

> The flag `-m` means **_message_**

If is neccessary to write a largest message on commit

```
git commit
```

The code editor will be open to write the commit message with break lines.

> Remember that a commit has to be descriptive and clear to us and other users

Now to pack all togheter and commit without passing for the ~~staging area~~

```bash
git commit -a -m ""
```

### Commits: restore, checkout and more

Each time a commit gets in action is like **taking a photo** of the commited files, so we can restore them to the last commited version (_like travel over the time or file life cycle_).

```bash
git checkout file.txt
```

☝️ Gets back, to the last commited version of the `file.txt`

---

### Difference between `reset` and `checkout`

Basically **`checkout`** what it does it's to return files to the last commited version...for those files which **ARE NOT IN THE STAGIN AREA**.

And **`reset --hard`** gets the file back **EVEN** if is already on stagin area, so this force the discard changes (watch out with the flag `--hard` can be a bad practice somethimes).

---

## Differences on files

To see the commit ID and if we have two files commited and after we make changes we can see the difference using

```bash
git log
```

> ☝️ This shows date, name and more information about the commits

Uses hash to set the ID, but we can configure the lenght with

```bash
git config --global core.abbrev 5
```

Now we can show the commits ID to identify and see differences

```bash
git log --oneline
```

To list all commits from all branches

```bash
git log --oneline --all
```

To list the history like a `graph`

```bash
git log --oneline --all --graph
```

<br>
Once we have ID's (_like a reference_)

```bash
git diff 1234b 5432a
```

To see at deep differences (_lines_)

```bash
git diff --word-diff 1234b 5432a
```

To change the description of a commit

```bash
git commit --amend
```

> ☝️ Instantly open an editor, and there we can modify the commit description

It is also important to remember that **EVERYTHING in the staging area** will be added to that commit (NOT CREATING A NEW ONE)

## HEAD pointer

The last commit is going to reference the **HEAD** so is a good practice to just try to modify the last commit, not others in the past.
But event if we want to edit another commit we can use...

```bash
git rebase -i head~3
```

then

```bash
git commit --amend
```

and finally to restore on row commits

```bash
git rebase --continue
```

# Branches

To list all the available branches

```bash
git branch
```

**To create a new branch** it is mandatory (_a good practice by the standard_) write the branch name with `kebab-case`

```bash
git branch dev-area
```

To change between branches

> ❎ Legacy

```bash
git checkout <branch>
```

> ✅ New and secure (added in version **2.23**)

```bash
git switch <branch>
```

To create a new branch and instantly move

```bash
git switch -c <branch>
```

### Delete a branch

> ⚠️ Before delete pointer in a different branch

```bash
git branch -d <branch>
```

> -d extends for _delete_

### Rename a branch

```bash
git branch -m <branch> new-name
```

> -m extends for _modify_

> ⚠️ To change the name in the current branch without switching...

```bash
git branch -m new-name
```

> -m extends for _move_

## Git ignore

On `.gitignore`

Ignore **every** png file

```bash
 *.png
```

Ignore every file that ends with ).txt

```bash
 *).txt
```

Avoid ignore an specific file or directory

```bash
 !photos/some.png
```

## Git alias

To create some git shortcuts we can use alias

```bash
git config --global alias.gs "status"
```

```bash
git config --global alias.nameShortcut "log --oneline --all --graph --pretty=format:'%C(auto)%h%d %s %C(black)%C(bold)%cr'"
```

# Git remote

When we add our local repo to a cloud remote service first we should to use

```bash
git remote add anyName https://...
```

Then change the name of the current local branch to `main`

```bash
git branch -M main
```

And finally to set up the configuration of each push and simplify on just `git push` we should to set the upstream

```bash
git push -u origin main
```

> `-u` extends for **--set-upstream**

No we can `see our remote repos` with

```bash
git remote --verbose
```

---

## `learning more... 🧠`
