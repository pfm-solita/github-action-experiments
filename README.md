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

The action runs automatically on every push to any branch and demonstrates how GitHub Actions can automatically execute cleanup code even when the main step fails.