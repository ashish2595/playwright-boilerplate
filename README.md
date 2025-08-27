# playwright-boilerplate


## Features

- **TypeScript Support**: Test files and configuration are written in TypeScript for type safety and modern development experience.
- **Page Object Model**: Reusable page objects in `tests/pageObjects/` (e.g., `login/login.page.ts`).
- **Organized Test Structure**:
	- Main specs in `tests/specs/` (e.g., `login.spec.ts`)
	- Page objects in `tests/pageObjects/`
	- Test data managed under `tests/testData/` with environments like `qa/` and `uat/`
- **Multi environment capability**: Can run tests on multiple environments with environment specific data
- **Automated Reporting**:
	- Playwright HTML reports in `playwright-report/`
	- Custom HTML reports in `reports/html-report/`
	- Allure results in `results/allure-results/`
- **Easy Integration**: Ready for CI/CD with GitHub Actions workflow (`.github/workflows/playwright.yml`).

## Getting Started

1. Install dependencies:
	```bash
	npm install
	```
2. Run tests:
	```bash
	npx playwright test
	```

## Folder Structure

```
├── playwright.config.ts
├── tests/
│   ├── pageObjects/
│   │   └── login/
│   │       └── login.page.ts
│   ├── specs/
│   │   └── login.spec.ts
│   └── testData/
│       ├── qa/
│       └── uat/
│           ├── credentials.ts
│           └── login/
│               └── login.data.ts
```
