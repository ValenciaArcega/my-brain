## zsh Profile

Create the file with the following command:

```bash
nano ~/.zshrc
```

Then configure with the script below:

```bash
NEWLINE=$'\n'
function parse_git_branch() {
    git branch 2> /dev/null | sed -n -e 's/^\* \(.*\)/[\1]/p'
}
PROMPT="%B%F{magenta}%2d%f %F{green}~%f  🚀 %F{yellow}$(parse_git_branch)%f %b${NEWLINE}"
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```

Save and reload the terminal.
