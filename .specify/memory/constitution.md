# Dynamic Web App Constitution

## Core Principles

### I. Web-First

Every feature must be accessible via a web interface. The app must be dynamic (client-side interactivity required). Use a modern web framework (e.g., React, Vue, Svelte, NextJS etc.).

### II. Pragmatic Data Flow

Start simple: the Rails backend serves both frontend and database interactions directly. This reduces overhead and speeds up development. If external consumers or multiple frontends require access later, evolve the backend into a documented, versioned API (REST or GraphQL).

### III. Test-First (NON-NEGOTIABLE)

Automated tests are required for all features (unit and integration). Tests must be written before implementation (TDD encouraged). All tests must pass before merging.

### IV. Observability

Basic logging of errors and key events is required (console or remote). Include a health check endpoint. Performance monitoring is recommended for production.

### V. Versioning & Simplicity

Use semantic versioning (MAJOR.MINOR.PATCH). Keep features minimal and avoid unnecessary complexity (YAGNI). Breaking changes require a migration note.

## Additional Constraints

- Use open-source dependencies where possible.
- All code must be reviewed before merging.
- Security best practices must be followed (input validation, auth for sensitive endpoints).

## Development Workflow

- All code changes require a pull request and review.
- CI must run all tests and lint checks before merge.
- Deployment must be automated (CI/CD pipeline recommended).

## Governance

- This constitution supersedes all other project practices.
- Amendments require documentation, review, and a migration plan if breaking.
- All PRs/reviews must verify compliance with this constitution.

**Version**: 1.0.0 | **Ratified**: 2025-09-18 | **Last Amended**: 2025-09-18
