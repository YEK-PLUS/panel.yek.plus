echo "Current branch: $VERCEL_GIT_COMMIT_REF"
echo "Target Branch: $1"
if [ "$VERCEL_GIT_COMMIT_REF" != "$1" ]; then
    echo "You are not on the correct branch!"
    exit 0
fi
echo "You are on the correct branch!"
exit 1
