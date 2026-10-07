
Claude finished the response
How to connect frontend and backend in javascript | Fullstack Proxy and CORS

Connecting Frontend and Backend in JavaScript
The core problem: your frontend (e.g., http://localhost:5173) and backend (e.g., http://localhost:3000) run on different origins (protocol + domain + port). Browsers block cross-origin requests by default (the Same-Origin Policy). You solve this in one of two ways: CORS or a proxy.

1. The Basic Connection
Backend (Express):

js
// server.js
import express from "express";

const app = express();
app.use(express.json());

app.get("/api/users", (req, res) => {
  res.json([{ id: 1, name: "Asha" }, { id: 2, name: "Ravi" }]);
});

app.post("/api/users", (req, res) => {
  console.log(req.body);
  res.status(201).json({ id: 3, ...req.body });
});

app.listen(3000, () => console.log("API on http://localhost:3000"));
Frontend (fetch):

js
// GET
const res = await fetch("http://localhost:3000/api/users");
const users = await res.json();

// POST
await fetch("http://localhost:3000/api/users", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name: "Meera" }),
});
This will fail in the browser with:

Access to fetch ... has been blocked by CORS policy

2. Solution A: Enable CORS on the Backend
CORS works by the server telling the browser, via headers, which origins are allowed.

bash
npm install cors
js
import cors from "cors";

// Allow everything (dev only!)
app.use(cors());

// Better: restrict to your frontend
app.use(
  cors({
    origin: ["http://localhost:5173", "https://myapp.com"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true, // needed if using cookies
  })
);
If you send cookies, the frontend must also opt in:

js
fetch("http://localhost:3000/api/users", { credentials: "include" });
And with credentials: true, origin cannot be "*"; it must be a specific origin.

What are preflight requests?
For "non-simple" requests (JSON Content-Type, Authorization header, PUT/DELETE), the browser first sends an OPTIONS request asking permission. The cors package handles this automatically.

3. Solution B: Use a Proxy (Recommended for Development)
With a proxy, the browser only talks to the frontend's origin, and the dev server forwards /api calls to the backend. No cross-origin request means no CORS.

Vite (vite.config.js):

js
import { defineConfig } from "vite";

export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, ""), // if backend has no /api prefix
      },
    },
  },
});
Create React App (package.json):

json
"proxy": "http://localhost:3000"
Webpack Dev Server:

js
devServer: {
  proxy: [{ context: ["/api"], target: "http://localhost:3000" }],
}
Now the frontend uses relative URLs:

js
const res = await fetch("/api/users"); // proxied to localhost:3000
4. Production: Same Idea, Different Tool
The dev proxy doesn't exist in production. Common options:

Option 1: Serve the frontend from Express (same origin):

js
import path from "path";
app.use(express.static(path.join(process.cwd(), "dist")));
app.get("*", (req, res) =>
  res.sendFile(path.join(process.cwd(), "dist", "index.html"))
);
Option 2: Reverse proxy with Nginx:

nginx
server {
  listen 80;
  server_name myapp.com;

  location / {
    root /var/www/myapp/dist;
    try_files $uri /index.html;
  }

  location /api/ {
    proxy_pass http://localhost:3000;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
  }
}
Option 3: Separate domains (e.g., app.myapp.com and api.myapp.com) with CORS configured for the frontend's origin.

5. Clean Pattern: Environment-Based API URL
js
// api.js
const BASE_URL = import.meta.env.VITE_API_URL ?? "/api";

export async function api(path, options = {}) {
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: { "Content-Type": "application/json", ...options.headers },
    credentials: "include",
    ...options,
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

// usage
const users = await api("/users");
.env.development: leave VITE_API_URL unset (uses the proxy)
.env.production: VITE_API_URL=https://api.myapp.com

CORS vs Proxy: Which to Choose?
CORS	Proxy
Where configured	Backend	Dev server / Nginx
Browser sees	Cross-origin request	Same-origin request
Preflight requests	Yes	No
Cookies	Need credentials + exact origin	Work simply
Best for	Public APIs, separate domains	Dev, and same-domain production
Common Pitfalls
cors() placed after your routes: middleware order matters; put it first.
Wildcard * with credentials: browsers reject this.
CORS is a browser rule: Postman and curl ignore it, so "works in Postman" doesn't mean it's configured.
Don't "fix" CORS on the frontend: mode: "no-cors" just gives you an unreadable opaque response.
Cookie issues across sites: cross-site cookies need SameSite=None; Secure (HTTPS).
Proxy path mismatch: if your backend routes lack /api, add the rewrite option.
Recommended Setup
Development: Vite proxy, with relative /api URLs.
Production: Same origin via Nginx or Express static serving, or CORS with a strict allow-list if the domains differ.
If you tell me your stack (React/Vue, Express/NestJS, auth method), I can tailor the exact config.




Claude is AI and can make mistakes. Please double-check responses.
