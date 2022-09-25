if [ "$(git branch --show-current)" != "$1" ]; then
    exit 1
fi