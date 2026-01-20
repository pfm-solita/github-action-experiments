#!/bin/sh

# Example entrypoint script for local Docker action
# This script demonstrates how to create a custom Docker action

echo "================================================"
echo "Hello from a local Dockerfile!"
echo "================================================"
echo ""
echo "This container was built from a local Dockerfile"
echo "in the repository at: example-docker/Dockerfile"
echo ""
echo "Current directory: $(pwd)"
echo "Files in current directory:"
ls -la
echo ""
echo "================================================"
