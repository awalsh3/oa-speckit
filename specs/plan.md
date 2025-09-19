# Implementation Plan: Hashtag Activism App

**Branch**: `001-the-hashtag-activism` | **Date**: 2025-09-18 | **Spec**: [spec.md]
**Input**: Feature specification from `/specs/001-the-hashtag-activism/spec.md`

## Execution Flow (/plan command scope)
```
1. Load feature spec from Input path
   → If not found: ERROR "No feature spec at {path}"
2. Fill Technical Context (scan for NEEDS CLARIFICATION)
   → Detect Project Type from context (web=frontend+backend, mobile=app+api)
   → Set Structure Decision based on project type
3. Fill the Constitution Check section based on the content of the constitution document.
4. Evaluate Constitution Check section below
   → If violations exist: Document in Complexity Tracking
   → If no justification possible: ERROR "Simplify approach first"
   → Update Progress Tracking: Initial Constitution Check
5. Execute Phase 0 → research.md
   → If NEEDS CLARIFICATION remain: ERROR "Resolve unknowns"
6. Execute Phase 1 → contracts, data-model.md, quickstart.md, agent-specific template file
7. Re-evaluate Constitution Check section
   → If new violations: Refactor design, return to Phase 1
   → Update Progress Tracking: Post-Design Constitution Check
8. Plan Phase 2 → Describe task generation approach (DO NOT create tasks.md)
9. STOP - Ready for /tasks command
```

## Summary
The Hashtag Activism app is a web platform that helps users support social causes by connecting trending hashtags to actionable resources. Users can browse hashtags, view and complete to-do actions (petitions, donations, educational links), and track their progress. The MVP will use Next.js for the frontend, Tailwind CSS for styling, and a Rails backend for data (mocked for now, but ready for live feeds). The site is responsive and mobile-ready.

## Technical Context
**Language/Version**: JavaScript/TypeScript (Next.js 14+), Ruby 3.x (Rails 7+)  
**Primary Dependencies**: Next.js, Tailwind CSS, Rails, Jest (or equivalent), React Testing Library  
**Storage**: PostgreSQL (via Rails, mocked for MVP)  
**Testing**: Jest, React Testing Library, RSpec (Rails)  
**Target Platform**: Web (desktop/mobile, responsive)  
**Project Type**: web (frontend + backend)  
**Performance Goals**: Fast load (<1s for main UI), smooth mobile experience  
**Constraints**: Accessible UI, mobile-first, mock data for MVP, ready for live feeds  
**Scale/Scope**: MVP for public launch, scalable to 10k+ users

## Constitution Check
*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- Web-first: Next.js frontend, dynamic UI, mobile-ready
- Pragmatic Data Flow: Rails backend, direct data for MVP, ready for API evolution
- Test-First: Jest/RTL for frontend, RSpec for backend, TDD required
- Observability: Basic logging, error handling, health check endpoint
- Versioning & Simplicity: Semver, minimal features, avoid complexity
- Additional: Open-source deps, code review, security best practices, CI/CD

**Initial Constitution Check: PASS**

## Project Structure

### Documentation (this feature)
```
specs/001-the-hashtag-activism/
├── plan.md              # This file (/plan command output)
├── research.md          # Phase 0 output (/plan command)
├── data-model.md        # Phase 1 output (/plan command)
├── quickstart.md        # Phase 1 output (/plan command)
├── contracts/           # Phase 1 output (/plan command)
└── tasks.md             # Phase 2 output (/tasks command - NOT created by /plan)
```

### Source Code (repository root)
```
backend/
├── src/
│   ├── models/
│   ├── services/
│   └── api/
└── tests/

frontend/
├── src/
│   ├── components/
│   ├── pages/
│   └── services/
└── tests/
```

**Structure Decision**: Option 2 (web application: frontend + backend)

## Phase 0: Outline & Research
1. **Extract unknowns from Technical Context** above:
   - For each NEEDS CLARIFICATION → research task
   - For each dependency → best practices task
   - For each integration → patterns task

2. **Generate and dispatch research agents**:
   - Research: "Best practices for integrating Next.js frontend with Rails backend (mock data, future API)"
   - Research: "Best practices for using Tailwind CSS in Next.js for accessible, mobile-first design"
   - Research: "How to mock trending hashtag and resource data for MVP, and swap to live feeds later"
   - Research: "How to handle broken resource links gracefully in a to-do/action app"
   - Research: "Best practices for login/account creation in Next.js/Rails stack"

3. **Consolidate findings** in `research.md` using format:
   - Decision: [what was chosen]
   - Rationale: [why chosen]
   - Alternatives considered: [what else evaluated]

**Output**: research.md with all NEEDS CLARIFICATION resolved

## Phase 1: Design & Contracts
*Prerequisites: research.md complete*

1. **Extract entities from feature spec** → `data-model.md`:
   - Entity name, fields, relationships
   - Validation rules from requirements
   - State transitions if applicable

2. **Generate API contracts** from functional requirements:
   - For each user action → endpoint
   - Use standard REST/GraphQL patterns
   - Output OpenAPI/GraphQL schema to `/contracts/`

3. **Generate contract tests** from contracts:
   - One test file per endpoint
   - Assert request/response schemas
   - Tests must fail (no implementation yet)

4. **Extract test scenarios** from user stories:
   - Each story → integration test scenario
   - Quickstart test = story validation steps

5. **Update agent file incrementally** (O(1) operation):
   - Run `.specify/scripts/bash/update-agent-context.sh copilot` for your AI assistant
   - If exists: Add only NEW tech from current plan
   - Preserve manual additions between markers
   - Update recent changes (keep last 3)
   - Keep under 150 lines for token efficiency
   - Output to repository root

**Output**: data-model.md, /contracts/*, failing tests, quickstart.md, agent-specific file

## Phase 2: Task Planning Approach
*This section describes what the /tasks command will do - DO NOT execute during /plan*

**Task Generation Strategy**:
- Load `.specify/templates/tasks-template.md` as base
- Generate tasks from Phase 1 design docs (contracts, data model, quickstart)
- Each contract → contract test task [P]
- Each entity → model creation task [P] 
- Each user story → integration test task
- Implementation tasks to make tests pass

**Ordering Strategy**:
- TDD order: Tests before implementation 
- Dependency order: Models before services before UI
- Mark [P] for parallel execution (independent files)

**Estimated Output**: 25-30 numbered, ordered tasks in tasks.md

**IMPORTANT**: This phase is executed by the /tasks command, NOT by /plan

## Phase 3+: Future Implementation
*These phases are beyond the scope of the /plan command*

**Phase 3**: Task execution (/tasks command creates tasks.md)  
**Phase 4**: Implementation (execute tasks.md following constitutional principles)  
**Phase 5**: Validation (run tests, execute quickstart.md, performance validation)

## Complexity Tracking
*Fill ONLY if Constitution Check has violations that must be justified*

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|

## Progress Tracking
*This checklist is updated during execution flow*

**Phase Status**:
- [ ] Phase 0: Research complete (/plan command)
- [ ] Phase 1: Design complete (/plan command)
- [ ] Phase 2: Task planning complete (/plan command - describe approach only)
- [ ] Phase 3: Tasks generated (/tasks command)
- [ ] Phase 4: Implementation complete
- [ ] Phase 5: Validation passed

**Gate Status**:
- [x] Initial Constitution Check: PASS
- [ ] Post-Design Constitution Check: PASS
- [ ] All NEEDS CLARIFICATION resolved
- [ ] Complexity deviations documented

---
*Based on Constitution v1.0.0 - See `/memory/constitution.md`*
