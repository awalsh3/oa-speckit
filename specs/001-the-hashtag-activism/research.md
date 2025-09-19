# Research: Hashtag Activism App

## Integration: Next.js Frontend with Rails Backend
- **Decision**: Use Next.js for frontend, Rails for backend, mock data for MVP
- **Rationale**: Enables rapid prototyping, separation of concerns, and future API integration
- **Alternatives**: Monolithic Rails app, other JS frameworks

## Styling: Tailwind CSS in Next.js
- **Decision**: Use Tailwind CSS for all UI styling
- **Rationale**: Fast, utility-first, responsive, accessible by default
- **Alternatives**: CSS modules, styled-components, Bootstrap

## Data Mocking and Feeds
- **Decision**: Mock hashtag and resource data in both frontend and backend for MVP
- **Rationale**: Allows UI and API development in parallel, easy to swap for live feeds
- **Alternatives**: Live scraping, third-party APIs (future)

## Error Handling for Broken Links
- **Decision**: Mark broken resources as 'broken' and display user-friendly error
- **Rationale**: Improves UX, avoids dead ends
- **Alternatives**: Hide broken links, auto-remove

## User Login/Account Creation
- **Decision**: Require login to track completed actions, support email/password for MVP
- **Rationale**: Simple, familiar, can expand to OAuth later
- **Alternatives**: Social login, anonymous tracking
