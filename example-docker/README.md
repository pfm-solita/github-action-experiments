# Example Docker Action

This directory contains a simple example Dockerfile that demonstrates how to create a local Docker action for use in GitHub Actions workflows.

## Files

- **Dockerfile**: Defines the container image based on Alpine Linux
- **entrypoint.sh**: The script that runs when the container starts

## Usage

This example is used in the `docker-action-example.yml` workflow to demonstrate building and running a Docker container from a local Dockerfile in the repository.

The workflow builds the Docker image and runs it as part of the CI/CD pipeline, showing how you can create custom Docker actions specific to your repository's needs.
