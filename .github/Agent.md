## Mandatory first step

Before creating or modifying any file:

1. Read this `AGENTS.md` file completely.
2. Inspect the existing project structure.
3. Search for reusable Page Objects, fixtures, services, utilities, and test data.
4. Do not create duplicate classes or methods.
5. Ask for clarification if the requirement is ambiguous.

# Playwright Automation Rules

Before creating or modifying any Playwright code, follow all rules in this file.

## Required workflow

1. Inspect the existing project structure.
2. Read existing Page Objects, components, fixtures, and tests.
3. Reuse existing classes and methods.
4. Create new code only when reusable code does not already exist.
5. Run the related test after implementation.

## Page Object rules

- Put Page Objects in `pages/`.
- Create one class for each logical page.
- Keep locators and reusable actions inside Page Objects.
- Prefer `getByRole`, `getByLabel`, and `getByTestId`.
- Do not put raw locators directly in test files.

## Test rules

- Put tests in `tests/`.
- Tests should call Page Object methods.
- Do not duplicate navigation, login, or common actions.
- Use existing fixtures and test data.
- Never hardcode credentials or secrets.

## Validation

- Run TypeScript validation.
- Run the related Playwright test.
- Do not modify unrelated files.
- Report created and modified files.