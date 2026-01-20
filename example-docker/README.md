# Example Docker Action

This directory contains a simple example Docker action that demonstrates how to create a local Docker action for use in GitHub Actions workflows.

## Files

- **Dockerfile**: Defines the container image based on Alpine Linux
- **entrypoint.sh**: The script that runs when the container starts
- **action.yml**: The action metadata file that defines this directory as a Docker action
- **README.md**: This documentation file

## Usage

This example is used in the `docker-action-example.yml` workflow to demonstrate:

1. **Building and running manually**: Using `docker build` and `docker run` commands
2. **Using as a GitHub Action**: Using the `uses:` syntax to run the action directly

### As a GitHub Action

```yaml
- name: Run Local Docker Action
  uses: ./example-docker
  with:
    message: 'Hello from the Docker Action!'
```

The workflow builds the Docker image and runs it as part of the CI/CD pipeline, showing how you can create custom Docker actions specific to your repository's needs.
