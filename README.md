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