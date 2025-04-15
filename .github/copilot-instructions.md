### 1. Component Usage & Strictness

**You must always use only HAKit-provided components.**  
- Do NOT use third-party, custom, or hand-rolled UI/layout/service helpers.  
- Both @hakit/core and @hakit/components are expressly designed for React and Home Assistant, providing a set of utilities and prebuilt cards that cover the use cases you’ve listed.

---

### 2. Layout System

Only the following layout primitives are valid per official docs and code examples:
- `<Row>` – horizontal layout, props exist for wrapping, gap, alignment.
- `<Column>` – vertical layout approach, props for width, gap, overflow.
- `<Group>` – visually separates a section and takes a `title`.
**Pattern is correctly specified and documented in various examples:**

```jsx
<Column>
  <Group title="Section Title">
    <Row wrap gap="var(--ha-spacing-md)">
      {...content}
    </Row>
  </Group>
</Column>
```
- Do not use any other layout wrappers or CSS/flex/grid.  
- **No custom layout logic or CSS – only the above is valid and sufficient for responsive dashboards.**

---

### 3. Entity Component Mapping

Your table is accurate (per source docs, Readme, and maintainer posts):

| Entity Type   | Component           |
|---------------|---------------------|
| Toggle        | `<ButtonCard>`      |
| Climate       | `<ClimateCard>`     |
| Media Player  | `<MediaPlayerCard>` |
| Time/Date     | `<TimeCard>`        |
| Weather       | `<WeatherCard>`     |
| Entity List   | `<EntitiesCard>`    |
| Area Overview | `<RoomCard>`*       |

- No `<SensorCard>` exists or is mentioned anywhere in official documentation (correctly excluded).
- As of the latest documentation, **AreaCard** is not documented, so use **RoomCard** for area/overview representations.
- For anything not in this list, you must refer to up-to-date documentation, but currently these cover the canonical use cases.

---

### 4. Service Calls and Entity Interaction

- **Only use interactions as provided by HAKit**, e.g. via the `useEntity` hook for entity state and operations.
    - Example is always:  
      ```js
      const entity = useEntity("climate.air_conditioner");
      entity.api.setHvacMode({ hvac_mode: "cool" });
      ```
    - Only call `.api` methods documented in code/Readme.
- **Never use `useService`** (not in public docs and not supported).
- **Do not wire up your own websocket, REST, or service logic.**
- Actions should usually be abstracted through the cards themselves (e.g., ButtonCard triggers toggle; ClimateCard has control UI).
- **Keep it simple and native to HAKit’s abstractions.**

---

### 5. Theming, Context & Fallbacks

Global wrapping must use:

```jsx
<ThemeProvider>
  <ErrorBoundary fallback={<div>Something went wrong.</div>}>
    <Dashboard />
  </ErrorBoundary>
</ThemeProvider>
```
- **ThemeProvider** is the top-level context for theming (default or with a theme prop).
- **ErrorBoundary** for robust error handling, provides a configurable fallback (required).
- **Do NOT use `<DashboardProvider>`** or any other non-documented providers.

---

### 6. Styling

- Do **not** use custom CSS, flex, or grid layouts.
- You may only use the built-in layout and visual features that HAKit components provide (e.g., `gap`, `wrap`, etc).
- Inline styles are discouraged—use only if a component prop/option doesn’t meet the use case (rarely needed).
- Card and layout appearance should rely on HAKit’s responsive, built-in design.

---

### 7. Deliverable Standards

- Code must be **production-ready, complete, functional, minimal, and readable**.
- **No TODOs, placeholders, partial implementations, or commented-out code.**
- **No unused imports.**
- Only output functioning dashboards—don’t include broken, speculative, or non-documented features or props.
