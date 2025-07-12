# Custom zsh Profile

Create the profile with the following command

```bash
nano ~/.zshrc
```

```bash
function parse_git_branch() {
    git branch 2> /dev/null | sed -n -e 's/^\* \(.*\)/[\1]/p'
}
NEWLINE=$'\n'
PROMPT="%B%F{magenta}%2d%f %F{yellow}~%f  🚀 %F{green}$(parse_git_branch)%f %b${NEWLINE}"
```

Save and reload the terminal.
