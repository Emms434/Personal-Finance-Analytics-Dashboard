# Personal Finance Analytics Dashboard

A starter architecture for building a personal finance analytics dashboard that helps users aggregate transactions, monitor budgets, track savings goals, and explore trends with actionable insights.

## Project goals

- Create a modular, scalable analytics platform for personal finance data.
- Support core user workflows: account linking/import, transaction categorization, budgeting, forecasting, and reporting.
- Provide clean boundaries between frontend UI, analytics services, and data access.

## Recommended stack

- **Frontend:** React + TypeScript + Vite + Charting library (e.g., Recharts/ECharts)
- **Backend:** Node.js + TypeScript + Express or Fastify
- **Database:** PostgreSQL (OLTP) + optional ClickHouse/Timescale for heavy analytics
- **Auth:** JWT + refresh tokens (or third-party auth provider)
- **Jobs:** BullMQ/Temporal for recurring import and insight generation tasks
- **Testing:** Vitest/Jest + React Testing Library + Supertest + Playwright (optional)

## High-level architecture

- `frontend/` handles UI, visualization, and client-side state.
- `backend/` exposes APIs, business logic, analytics computation, and background jobs.
- `shared/` contains common types/contracts used by both frontend and backend.
- `docs/` documents implementation strategy and milestones.

## Suggested implementation strategy

Detailed roadmap is in [`docs/STRATEGY.md`](docs/STRATEGY.md). Recommended phases:

1. **Foundation:** project setup, CI, auth, and data model.
2. **Data ingestion:** account import, transaction normalization, categorization pipeline.
3. **Core dashboard:** KPI cards, cash flow, category trends, budgets vs actuals.
4. **Advanced analytics:** forecasting, anomaly detection, and recommendation engine.
5. **Operational hardening:** observability, security hardening, and performance tuning.

## Repository structure

```text
.
├── backend
│   └── src
│       ├── api
│       │   ├── controllers
│       │   ├── middleware
│       │   └── routes
│       ├── config
│       ├── jobs
│       ├── models
│       ├── repositories
│       ├── services
│       └── utils
├── docs
├── frontend
│   └── src
│       ├── components
│       ├── features
│       ├── pages
│       ├── services
│       ├── store
│       ├── types
│       └── utils
└── shared
    └── src
```

## Getting started (after implementation)

```bash
# 1) Install dependencies
# npm install

# 2) Run backend and frontend in parallel
# npm run dev

# 3) Run tests
# npm test
```

## Current status

This repository currently includes a **scaffold and implementation plan** with method stubs and file-level documentation comments so development can proceed in a structured way.
