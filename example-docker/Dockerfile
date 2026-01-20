# Example Dockerfile for demonstrating local Docker action usage
# This is a simple example that can be used in GitHub Actions workflows

FROM alpine:latest

# Add a label to describe the action
LABEL "maintainer"="GitHub Actions Example"
LABEL "repository"="https://github.com/pfm-solita/github-action-experiments"
LABEL "homepage"="https://github.com/pfm-solita/github-action-experiments"

# Copy the entrypoint script
COPY entrypoint.sh /entrypoint.sh

# Make the script executable
RUN chmod +x /entrypoint.sh

# Set the entrypoint
ENTRYPOINT ["/entrypoint.sh"]
