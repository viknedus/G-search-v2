## Using Nextjs quick runover

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

_Learn More?_

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Using Tailwind.css

Tailwind is a utility first CSS framework that simplifies css to build any design, directly in your markup. More about Tailwind CSS [Here](https://tailwindcss.com). Config with Next.js app, [Here](https://tailwindcss.com/docs/guides/nextjs).

## Heroicons

Heroicons is used instead of Material icons because it works natively with tailwind CSS.

# Designing

When using Tailwind CSS i have to design the app using a 'mobile-first' design principle. This means, i design for mobile first then use breakpoints to scale up on larger screens. (eg of breakpoints in tailwind; sm - small, md - medium, lg - large, lxl - extra large, 2xl & 3xl etc.)

## Using server side rendering for the search results

I will use JSON to capture searched results then use captured results to generate dummy data to be rendered on the server side of my search result page. This is to not exceed 100 search quota/day set by Google search API
