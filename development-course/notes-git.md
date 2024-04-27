`@author: ValenciaArcega` - 26 April 2024

# Git

To initialize a repository on a directory we should type

```bash
git init
```

Now we got the `.git` hidden folder on that directory and inside there is all the database of the **git following**.

In unix to review the hidden folders we have to use

```bash
ls -a
```

Now every change on git repo tracking files, will generate a flow to control those elements and their history.

## Staging area

To save our files on a _preparation room_ we should to use the command

```bash
git add <file>
```

> A really popular but **NOT RECOMENDABLE** technique, is to use `git add .` to upload all the modified files to the staging area.

☝️ This can be an option just when is really neccessary to upload all the files.
