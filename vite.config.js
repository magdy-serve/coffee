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
  }
}
