# Inter-Uni Bash Event Website

This is a Next.js project for the "Game On, Party On – Inter-Uni Edition" event website.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:9002](http://localhost:9002) with your browser to see the result.

## Project Structure

The website is built using a block-layered architecture with Next.js and reusable React components. This structure is designed to be easily integrated with a headless CMS.

-   **Pages**: Located in `src/app`. Each route is a folder with a `page.tsx` file.
-   **Components (Blocks)**: All reusable components are in `src/components`.
    -   `src/components/site`: General site components like Header and Footer.
    -   `src/components/admin`: Components for the admin dashboard.
    -   `src/components/ui`: Core UI components from shadcn/ui.
    -   Other component files in `src/components` represent the main "blocks" of the site (e.g., `hero-section.tsx`, `tickets-section.tsx`).
-   **Content**: For this version, all content (text, ticket details, schedule) is hardcoded in `src/lib/data.ts`.
-   **Styling**: The visual theme is configured in `tailwind.config.ts` (fonts) and `src/app/globals.css` (colors).

## How to Edit Content

This project is set up like a page composer, where each section of a page is a "block" (a React component). To edit the content, you'll modify the data that these blocks use.

In a full implementation, this data would come from a headless CMS. For now, all content is sourced from `src/lib/data.ts`.

### Editing Page Content

1.  **Open `src/lib/data.ts`**: This file contains all the editable content for the website.

2.  **To Edit Ticket Information**:
    -   Find the `ticketTiers` array.
    -   You can change the `name`, `price`, and `perks` for each ticket.

3.  **To Edit the Artist Lineup**:
    -   Find the `artists` array.
    -   Change artist `name` or their image URL (`imageUrl` - which corresponds to an ID in `src/lib/placeholder-images.json`).

4.  **To Edit the Event Schedule**:
    -   Find the `schedule` array.
    -   You can modify event `time`, `title`, `location`, `description`, and `type` for each day.

### Editing Images

-   All placeholder images are defined in `src/lib/placeholder-images.json`.
-   To change an image, you can update the URL for a specific ID or add new image objects. The `id` is then referenced in data files like `src/lib/data.ts`.

### Editing General Text (e.g., Hero Section)

-   Some text, like the main headlines, might be directly within the component file.
-   For example, to change the Hero Section headline, open `src/components/hero-section.tsx` and edit the text inside the `<h1>` tag.

This component-based approach allows you to easily manage and update sections of the site.
# interunibash
