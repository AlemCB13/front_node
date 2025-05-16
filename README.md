# IP API

A simple API built with Node.js and Express that returns the IP address of the client making the request, along with additional relevant information.

## Description

The API automatically detects the client's IP address from various HTTP headers and returns this information in JSON format. It's useful for services that need to know the end user's IP address.

## Prerequisites

- Node.js (version 14 or higher)
- npm (Node.js package manager)

## Installation

1. Clone this repository:
   ```
   git clone https://github.com/your-username/ip-api.git
   cd ip-api
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the application:
   ```
   npm start
   ```

4. The server will start on port 3000 by default. You can access the API at:
   ```
   http://localhost:3000/api/ip
   ```

## Development

To run the application in development mode with automatic reloading:
```
npm run dev
```

## Project Structure

```
.
│── app.js                # Main application file
│── package.json          # Dependencies and configuration
│── Dockerfile            # Docker container configuration
│── vercel.json           # Vercel deployment configuration
│── .github/              # GitHub configuration
│   └── workflows/        # GitHub Actions workflows
│       └── main.yml      # CI/CD pipeline configuration
│── .gitignore            # Git ignore configuration
└── README.md             # Documentation
```

## Endpoints

### GET /api/ip

This endpoint returns the IP address of the client making the request, along with additional information.

**Response:**
```json
{
  "success": true,
  "ip": "192.168.1.1",
  "timestamp": "2025-05-14T00:30:30-05:00",
  "headers": { "user-agent": "..." },
  "method": "GET",
  "path": "/api/ip"
}
```

### GET /

Main route that redirects to the IP endpoint.

## Technologies

- Node.js
- Express.js
- CORS (to allow cross-domain requests)

## Environment Variables

- `PORT`: Port on which the server will run (default: 3000)

## Deployment

### Vercel Deployment

This API is configured for deployment on Vercel using the included `vercel.json` file. The deployment is automated through GitHub Actions when you push to the main/master branch.

### Docker Deployment

You can also deploy this API using Docker:

```
docker build -t ip-api .
docker run -p 3000:3000 ip-api
```

### GitHub Actions CI/CD

The included workflow file at `.github/workflows/main.yml` automates testing and deployment to Vercel.

**Required GitHub Secrets:**
- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

## License

This project is licensed under the MIT License. See the LICENSE file for details.