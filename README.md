# github-action-experiments

A repository for experimenting with GitHub Actions features and commands.

## Workflows

### Test GitHub Action Commands

The `test-action-commands.yml` workflow demonstrates and tests various GitHub Actions workflow commands:

- **Error Command**: `::error::` - Creates error annotations in the workflow run
- **Warning Command**: `::warning::` - Creates warning annotations in the workflow run
- **Notice Command**: `::notice::` - Creates notice annotations in the workflow run
- **Debug Command**: `::debug::` - Outputs debug messages (visible when debug logging is enabled)
- **Group Command**: `::group::` / `::endgroup::` - Creates collapsible log groups
- **Mask Command**: `::add-mask::` - Masks sensitive values in logs
- **Environment Variables**: Adding variables via `$GITHUB_ENV`
- **PATH Modification**: Adding directories to PATH via `$GITHUB_PATH`

The workflow can be triggered manually via `workflow_dispatch` in the Actions tab.

To view debug messages, enable debug logging in your workflow run by setting the `ACTIONS_STEP_DEBUG` secret to `true` in your repository settings.

### Pre/Post Action Example

The `pre-post-example.yml` workflow demonstrates a custom JavaScript action with pre and post execution logic:

- **Custom Action**: `my-pre-post-action/` - A minimal JavaScript action that demonstrates:
  - **Main Step (Pre)**: Receives inputs and sets state for cleanup
  - **Post Step**: Automatically runs after the main step to perform cleanup operations
  - **State Management**: Shows how to pass data from the main step to the post step using `GITHUB_STATE`

The workflow can be triggered manually via `workflow_dispatch` in the Actions tab and demonstrates how GitHub Actions can automatically execute cleanup code even when the main step fails.

### Docker Action Example

The `docker-action-example.yml` workflow demonstrates how to use Docker container actions in GitHub Actions:

- **Docker Hub Images**: Run containers directly from Docker Hub using the `docker://` prefix
- **Container Isolation**: Docker actions run in isolated containers with their own environments
- **Environment Variables**: Pass environment variables to Docker containers
- **Custom Entrypoints**: Override container entrypoints and pass custom arguments
- **Multiple Examples**: Includes various Docker action patterns from simple hello-world to practical tools
- **Local Dockerfile**: Build and run Docker containers from a local Dockerfile in the repository (`example-docker/`)

The workflow can be triggered manually via `workflow_dispatch` in the Actions tab and serves as a template for integrating Docker-based actions into your CI/CD pipelines.