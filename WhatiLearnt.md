# What did i learn from this build?

## Styiling with Tailwind CSS

When using Tailwind CSS i have to design the app using a 'mobile-first' design principle. This means, i design for mobile first then use breakpoints to scale up on larger screens. (eg of breakpoints in tailwind; sm - small, md - medium, lg - large, lxl - extra large, 2xl & 3xl etc.)

- Tailwind is a utility first CSS framework that simplifies css to build any design, directly in your markup. More about Tailwind CSS [Here](https://tailwindcss.com). Config with Next.js app, [Here](https://tailwindcss.com/docs/guides/nextjs).

- **Heroicons** is used instead of Material icons because it works natively with tailwind CSS.

## Routing in Next

Routing in Next.js is already laid-out. Pages can be added in `pages/` folder where `index.js` is the parent page. In this project, `search.js` page is added and `useRouter` is used to move (route) between these pages in the project code.

## Using server side rendering for the search results

I will use JSON to capture searched results then use captured results to generate dummy data to be rendered on the server side of my search result page. This is to not exceed 100 search quota/day set by Google search API

- Using Async-await to fetch data to JSON and `.map()` to map through resutls to be displayed.
