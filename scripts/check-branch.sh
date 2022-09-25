echo "Current branch: $(git branch --show-current)"
echo "Target Branch: $1"
if [ "$(git branch --show-current)" != "$1" ]; then
    echo "You are not on the correct branch!"
    exit 0
fi
echo "You are on the correct branch!"
exit 1
