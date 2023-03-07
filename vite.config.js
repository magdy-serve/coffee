{
  "builds": [
    {
      "src": "public/index.php",
      "use": "@vercel/php"
    }
  ],
  "routes": [
    {
      "src": "/api/test.php",
      "dest": "/api/test.php"
    },
    {
      "src": "/(.*)",
      "dest": "/public/index.php"
    }
  ],
  "functions": {
    "api/test.php": {
      "runtime": "@vercel/php",
      "memory": 128,
      "maxDuration": 5000,
      "includeFiles": [
        "api/test.php"
      ]
    }
  },
      import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/js/app.js',
            ],
            refresh: true,
        }),
    ],
});
}
