# Tasks: Hashtag Activism App

This file contains the actionable, dependency-ordered tasks for the Hashtag Activism App. All implementation must follow strict Test-Driven Development (TDD):

- **Tests must be written before implementation.**
- **Tests must fail before implementation begins.**
- **No implementation task may begin until the corresponding test fails.**
  Tasks are grouped and marked for parallel execution [P] where possible. Each task includes a clear file path and dependency notes.

---

## Dependencies

- Next.js (frontend framework)
- Tailwind CSS (styling)
- React Testing Library, Jest (frontend testing)
- Ruby on Rails (backend)
- RSpec (backend testing)
- PostgreSQL (database, can be mocked for MVP)

---

---

## Setup Tasks

T001. Initialize monorepo structure with `frontend/` (Next.js) and `backend/` (Rails)
T002. Set up version control, .gitignore, and basic README
T003. Configure linting and formatting for both frontend (ESLint, Prettier) and backend (Rubocop)
T004. Set up CI pipeline for both frontend and backend

## Model & Data Layer Tasks [P]

T005. Create Hashtag model in backend/src/models/ [P]
T006. Create Resource model in backend/src/models/ [P]
T007. Create User model in backend/src/models/ [P]
T008. Create UserAction model in backend/src/models/ [P]

## Contract Test Tasks [P]

T009. Write contract test for GET /hashtags endpoint (specs/contracts/hashtag.json) [P]
T010. Write contract test for GET /hashtags/{id} endpoint (specs/contracts/hashtag.json) [P]
T011. Write contract test for GET /resources/{id} endpoint (specs/contracts/resource.json) [P]
T012. Write contract test for POST /user-actions endpoint (specs/contracts/user-action.json) [P]

## Core Implementation Tasks

T013. Implement GET /hashtags endpoint in backend/src/api/
T014. Implement GET /hashtags/{id} endpoint in backend/src/api/
T015. Implement GET /resources/{id} endpoint in backend/src/api/
T016. Implement POST /user-actions endpoint in backend/src/api/

## Frontend Tasks

T017. Set up Tailwind CSS in frontend/
T018. Create Hashtag list page in frontend/src/pages/
T019. Create Hashtag detail page with resource to-do list in frontend/src/pages/
T020. Implement responsive images for hashtags in frontend/src/components/ (use Next.js Image component, optimize for mobile)
T021. Implement action completion UI and state in frontend/src/components/
T022. Add login/signup UI in frontend/src/pages/
T023. Integrate frontend with backend API (mock data for MVP)
T024. Make site responsive and mobile-friendly

## Integration & Edge Case Tasks

T025. Implement error handling for broken resource links (frontend and backend)
T026. Implement default hashtag set for empty trending list
T027. Add health check endpoint to backend

## Testing & Polish Tasks [P]

T028. Write integration test for user story: select hashtag, complete action, see update [P]
T029. Write integration test for login and action tracking [P]
T030. Write unit tests for all models and services [P]
T031. Write documentation for setup, API, and usage [P]

---

## Parallel Execution Guidance

- Tasks marked [P] can be executed in parallel (e.g., model creation, contract tests, polish tasks)
- All setup tasks must be completed before starting model, contract, or implementation tasks
- **TDD Policy:** For every feature, write the test first, confirm it fails, then implement the feature to make the test pass. No implementation may begin until the test fails.
- Core implementation tasks must follow TDD: write contract tests before implementing endpoints
- Frontend and backend can be developed in parallel after initial setup

---

## Task Agent Commands (examples)

- To run all model creation tasks in parallel: T005 [P], T006 [P], T007 [P], T008 [P]
- To run all contract tests in parallel: T009 [P], T010 [P], T011 [P], T012 [P]
- To run all polish tasks in parallel: T027 [P], T028 [P], T029 [P], T030 [P]
