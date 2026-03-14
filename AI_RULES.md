# AI Development Rules

## Tech stack
- Next.js App Router
- TypeScript
- Tailwind CSS

## Architecture
- Server Components by default
- Client Components only when necessary

## Internationalization
- The project supports multiple languages: en, he, ru
- NEVER hardcode UI text in components
- Always use the translation system from src/i18n
- All user-facing text must come from translation dictionaries

## SEO
- Use siteConfig from src/config/site.ts
- Never hardcode domains

## UI
- Follow existing design patterns
- Do not introduce new design systems
- Reuse existing components

## Performance
- Avoid unnecessary client components
- Prefer server rendering when possible

## Safety
- Do not refactor unrelated code
- Do not remove existing functionality
- Keep PRs small and focused
