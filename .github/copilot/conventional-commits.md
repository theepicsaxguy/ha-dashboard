# Conventional Commits Instructions

When making commits, follow these patterns:

## Format

```
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

## Types

- feat: A new feature
- fix: A bug fix
- docs: Documentation only changes
- style: Changes that don't affect the code's meaning
- refactor: Code change that neither fixes a bug nor adds a feature
- perf: Code change that improves performance
- test: Adding missing tests or correcting existing tests
- chore: Changes to build process or auxiliary tools
- ci: Changes to CI configuration files and scripts

## Scope

Optional, specifies the section of the codebase:

- ui: User interface changes and components
- layout: Layout structure and organization
- cards: HAKit card implementations and customizations
- core: Core dashboard functionality
- entities: Entity handling and interactions
- services: Home Assistant service integrations
- theme: Styling and theming
- config: Configuration and settings
- deps: Dependency updates

## Examples

```
feat(cards): add climate control card
fix(ui): correct state display in weather card
feat(layout): implement responsive dashboard layout
docs(core): update component usage documentation
refactor(entities): improve entity state handling
chore(deps): update HAKit dependencies
style(theme): enhance dark mode contrast
perf(core): optimize dashboard rendering
```

## Breaking Changes

Add BREAKING CHANGE: in the footer:

```
feat(k8s): replace nginx ingress with cilium gateway api

BREAKING CHANGE: removes nginx ingress controller in favor of cilium gateway API
```