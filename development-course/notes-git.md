`@author: ValenciaArcega` - 26 April 2024

# Git

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

## Staging area

To save our files on a _preparation room_ we should to use the command

```bash
git add anyFileOrDirectory.extension
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

## Commit

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
