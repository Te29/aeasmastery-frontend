# CLAUDE.md - AI Assistant Guide for AEASMastery Frontend

> **Last Updated**: 2025-11-23
> **Repository**: aeasmastery-frontend
> **Status**: Initial project setup phase

## Project Overview

**AEASMastery Frontend** is a frontend application currently in the initial setup phase. This repository will contain the client-side codebase for the AEASMastery platform.

### Current State
- **Status**: Newly initialized repository
- **Files**: Only README.md exists currently
- **Branch**: `claude/claude-md-mibi1kml3xyqf7ye-017R2MZK7B4Gcsfd2PnvNQNh`
- **Latest Commit**: Initial commit (48bb894)

## Repository Structure

As the project is in its initial phase, the following structure is recommended for future development:

```
aeasmastery-frontend/
├── src/                    # Source code directory
│   ├── components/         # React/UI components
│   ├── pages/             # Page components
│   ├── services/          # API services and business logic
│   ├── utils/             # Utility functions
│   ├── hooks/             # Custom React hooks
│   ├── styles/            # Global styles and themes
│   ├── types/             # TypeScript type definitions
│   ├── constants/         # Application constants
│   └── App.tsx            # Main application component
├── public/                # Static assets
├── tests/                 # Test files
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── .env.example           # Environment variables template
├── .gitignore            # Git ignore rules
├── README.md             # Project documentation
└── CLAUDE.md             # This file - AI assistant guide
```

## Technology Stack (Anticipated)

Based on the project name and common frontend practices, the following stack is expected:

- **Framework**: React or Next.js (to be determined)
- **Language**: TypeScript
- **Styling**: CSS Modules, Tailwind CSS, or Styled Components
- **State Management**: Redux, Zustand, or React Context
- **Build Tool**: Vite or Next.js built-in tooling
- **Package Manager**: npm or yarn

## Development Workflow

### Git Workflow

1. **Branch Naming Convention**:
   - Feature branches: `feature/<descriptive-name>`
   - Bug fixes: `fix/<issue-description>`
   - Claude AI branches: `claude/<session-id>`

2. **Commit Messages**:
   - Use clear, descriptive commit messages
   - Format: `<type>: <description>`
   - Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`
   - Example: `feat: add user authentication component`

3. **Git Operations**:
   - Always use `git push -u origin <branch-name>` for pushing
   - Branch names for Claude must start with 'claude/' and end with matching session ID
   - Retry on network failures up to 4 times with exponential backoff (2s, 4s, 8s, 16s)

### Code Quality Standards

1. **TypeScript**:
   - Use strict mode
   - Avoid `any` types unless absolutely necessary
   - Define proper interfaces and types
   - Use type inference where appropriate

2. **Component Structure**:
   - Prefer functional components with hooks
   - Keep components small and focused (Single Responsibility Principle)
   - Extract reusable logic into custom hooks
   - Co-locate related files (component, styles, tests)

3. **Naming Conventions**:
   - Components: PascalCase (e.g., `UserProfile.tsx`)
   - Utilities/hooks: camelCase (e.g., `useAuth.ts`, `formatDate.ts`)
   - Constants: UPPER_SNAKE_CASE (e.g., `API_BASE_URL`)
   - Files: Match the primary export name

4. **File Organization**:
   - Group by feature/domain, not by type
   - Keep related files together
   - Use index files for clean imports

## AI Assistant Guidelines

### When Working on This Codebase

1. **Always Read Before Modifying**:
   - Never propose changes to code you haven't read
   - Understand existing patterns before adding new code
   - Check for similar implementations before creating new ones

2. **Security Considerations**:
   - Watch for XSS vulnerabilities in user input rendering
   - Validate and sanitize all user inputs
   - Avoid exposing sensitive data in client-side code
   - Use environment variables for configuration
   - Never commit secrets or API keys

3. **Avoid Over-Engineering**:
   - Only make changes that are directly requested
   - Keep solutions simple and focused
   - Don't add unnecessary abstractions
   - Don't add features beyond the requirement
   - Three similar lines are better than premature abstraction

4. **Testing**:
   - Write tests for new features
   - Update tests when modifying existing code
   - Ensure tests pass before committing
   - Focus on integration and component tests

5. **Performance**:
   - Lazy load components and routes where appropriate
   - Optimize images and assets
   - Minimize bundle size
   - Use memoization judiciously (only when needed)

### Common Tasks

#### Adding a New Component
```bash
# 1. Create component file
# 2. Create corresponding test file
# 3. Create styles if needed
# 4. Export from index.ts if using barrel exports
# 5. Update related documentation
```

#### Adding a New Page/Route
```bash
# 1. Create page component in pages/
# 2. Add route configuration
# 3. Update navigation if needed
# 4. Add tests
```

#### Working with APIs
```bash
# 1. Define API service in services/
# 2. Create TypeScript types for requests/responses
# 3. Implement error handling
# 4. Add loading states
# 5. Consider caching strategy
```

### Code Patterns to Follow

1. **Error Handling**:
   ```typescript
   try {
     // API call or risky operation
   } catch (error) {
     console.error('Descriptive error message:', error);
     // User-friendly error handling
   }
   ```

2. **Async Operations**:
   - Use async/await over .then() chains
   - Handle loading and error states
   - Provide user feedback

3. **State Management**:
   - Keep state as local as possible
   - Lift state only when necessary
   - Use context for truly global state
   - Consider performance implications

4. **Styling**:
   - Follow existing styling patterns
   - Maintain consistent spacing and sizing
   - Use design system/theme variables
   - Ensure responsive design

## Project Setup (To Be Added)

When the project is initialized, this section should include:

```bash
# Installation
npm install

# Development
npm run dev

# Build
npm run build

# Test
npm test

# Lint
npm run lint
```

## Environment Variables

Document required environment variables:

```
# To be added when implemented
REACT_APP_API_URL=
REACT_APP_ENV=
```

## Common Issues and Solutions

*This section will be populated as common issues are encountered.*

## Dependencies (To Be Added)

Key dependencies will be documented here once the project is set up:

- **Runtime Dependencies**: Core libraries needed for the application
- **Development Dependencies**: Tools for development and building

## Architecture Decisions

*Document key architectural decisions as they are made:*

1. **Framework Choice**: [To be determined]
2. **State Management**: [To be determined]
3. **Styling Approach**: [To be determined]
4. **Testing Strategy**: [To be determined]

## Resources and Documentation

- **Project README**: See README.md for project overview
- **API Documentation**: [To be added]
- **Design System**: [To be added]
- **Deployment Guide**: [To be added]

## Notes for AI Assistants

1. **This is a new project** - Most structure and tooling needs to be set up
2. **Be proactive about asking** - When setting up infrastructure, confirm choices with the user
3. **Establish patterns early** - The first implementations will set the standard
4. **Document decisions** - Update this file as major decisions are made
5. **Consider scalability** - Choose solutions that will grow with the project

## Changelog

- **2025-11-23**: Initial CLAUDE.md created for new repository
  - Project in initial setup phase
  - Only README.md exists
  - Awaiting technology stack decisions and initial implementation

---

**Note**: This document should be updated as the project evolves. AI assistants should keep this file current by documenting significant changes, new patterns, and architectural decisions.
