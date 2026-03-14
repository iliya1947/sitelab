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

## 7. Translations (STRICT RULE)

All user-visible text must use the existing i18n system.

Hardcoded text inside React components is strictly forbidden.

When creating a new section or component:

1. Create translation keys first.
2. Add translations for ALL supported languages:
   - he
   - en
   - ru
3. Use the translation hook/function already used in the project.

Example:

Wrong:

```tsx
<h2>Built With Modern Technologies</h2>
```

Correct:

```tsx
<h2>{t.techStack.title}</h2>
```

And define translations in:

- src/i18n/locales/en
- src/i18n/locales/he
- src/i18n/locales/ru

If a PR introduces hardcoded UI text it must be rejected.
