#!/bin/sh

# Example entrypoint script for local Docker action
# This script demonstrates how to create a custom Docker action

# Access input parameters from the action
# GitHub Actions automatically converts action inputs to environment variables
# with the INPUT_ prefix (e.g., 'message' input becomes INPUT_MESSAGE)
MESSAGE="${INPUT_MESSAGE:-Hello from Docker Action!}"

echo "================================================"
echo "$MESSAGE"
echo "================================================"
echo ""
echo "This container was built from a local Dockerfile"
echo "in the repository at: example-docker/Dockerfile"
echo ""
echo "This action is being used via the 'uses:' syntax"
echo "which demonstrates how to create a reusable Docker action"
echo ""
echo "Current directory: $(pwd)"
echo "Files in current directory:"
ls -la
echo ""
echo "================================================"
