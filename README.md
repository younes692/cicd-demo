# CI/CD Pipeline Demo

A React + Vite single-page application that visually demonstrates a complete CI/CD pipeline, built as a school demo. It doubles as a live DevOps dashboard.

[![SonarCloud](https://sonarcloud.io/api/project_badges/measure?project=younes692_cicd-demo&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=younes692_cicd-demo)

---

## What is this project?

This project is a visual demonstration of a modern CI/CD pipeline using:
- **React 18 + Vite** — fast frontend toolchain
- **Jest + Testing Library** — unit testing with coverage
- **ESLint + Prettier** — code quality and formatting
- **SonarCloud** — static analysis and quality gate
- **GitHub Actions** — two automated workflow pipelines
- **Render** — staging and production hosting with manual approval gate

---

## Running Locally

```bash
npm install
npm run dev        # start dev server at http://localhost:5173
npm run build      # production build → dist/
npm test           # run Jest tests with coverage
npm run lint       # ESLint check
npm run format:check  # Prettier check
```

## Pipeline Workflows

### 1. PR Checks (`pr-checks.yml`) — runs on every Pull Request

Fast feedback loop for developers. A PR cannot be merged until all checks pass.

**Lint → Checkstyle → Tests → Build → SonarCloud**

| Job | What it does |
|-----|-------------|
| Lint | Runs ESLint with zero warnings tolerance |
| Checkstyle | Runs Prettier in check mode |
| Tests | Runs Jest, uploads coverage artifact |
| Build | Runs vite build, uploads dist/ artifact |
| SonarCloud | Static analysis, coverage upload, quality gate |

### 2. Main Pipeline (`main-pipeline.yml`) — runs on merge to main

Full deployment pipeline with a mandatory human approval gate before production.

**Lint → Checkstyle → Tests → Build → SonarCloud → Staging → [Approval] → Production**

| Job | What it does |
|-----|-------------|
| Deploy Staging | Triggers a Render deploy to the staging service via REST API |
| Deploy Production | Requires manual approval (GitHub production environment) then deploys to Render production |

## The 7 Pipeline Stages

| # | Stage | Description |
|---|-------|-------------|
| 1 | Lint | ESLint scans for code style errors and potential bugs |
| 2 | Tests | Jest runs unit tests and generates a coverage report |
| 3 | Build | Vite compiles the React app into optimised static assets |
| 4 | SonarCloud | Scans for code smells, vulnerabilities, and coverage gaps |
| 5 | Staging | Build is deployed to the Render staging environment |
| 6 | Approval | A human reviewer must approve before production deploy |
| 7 | Production | Approved build is deployed live to production |

## Manual Approval Gate

The `deploy-production` job uses a GitHub Actions environment called `production`. To configure it:

1. Go to **Settings → Environments → production** in your GitHub repo.
2. Add required reviewers (yourself or your team).
3. On every main-branch push, the pipeline will pause before production and send a notification — a reviewer must click **Approve** in the GitHub Actions UI.

## Required GitHub Secrets

| Secret | Description |
|--------|-------------|
| `SONAR_TOKEN` | SonarCloud user token |
| `RENDER_API_KEY` | Render API key |
| `RENDER_STAGING_SERVICE_ID` | Render staging service ID |
| `RENDER_PROD_SERVICE_ID` | Render production service ID |
