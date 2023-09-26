# Boilerplate for a new React project using Vite + Tailwind

## How did I get here?

1. npm create vite@latest

2. npm install

3. Install Tailwind CSS with Vite:

    3.1  npm install -D tailwindcss postcss autoprefixer

    3.2 npx tailwindcss init -p

    3.3 Configuring taliwind.consig.js with this:

        ``` /** @type {import('tailwindcss').Config} */
            export default {
                content: [
                    "./index.html",
                    "./src/**/*.{js,ts,jsx,tsx}",
                ],
                theme: {
                    extend: {},
                },
                plugins: [],
            }
        ```

    4. Adding Tailwind to the main css file:

        4.1: 
        ``` @tailwind base;
            @tailwind components;
            @tailwind utilities; ```

    5. Building and testing with a couple classes to a component.