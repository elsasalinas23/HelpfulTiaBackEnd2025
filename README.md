📘 Helpful Tía Backend 2025 – README
🧩 Overview

The Helpful Tía Backend 2025 project is the backend portion of the Helpful Tía Recipe Builder App.
It’s a Node.js + Express + MongoDB (Mongoose) API that powers the recipe input page — the first phase of the larger app.

Users can:

Add a recipe title

Add ingredients (array of strings)

View all recipes

Update or delete any recipe

This fulfills the course rubric for CRUD (Create Read Update Delete) operations with Express and MongoDB.

helpfultiabackend2025/
│
├── middleware/
│   └── error.mjs               # Global error handler
│
├── models/
│   └── Recipe.mjs              # Mongoose Schema & Model
│
├── routes/
│   └── recipes.mjs             # CRUD routes for recipes
│
├── utilities/
│   └── recipedatabase.mjs      # MongoDB connection function
│
├── .env                        # Environment variables (never commit!)
├── .gitignore                  # Ignores node_modules and .env
├── package.json
├── package-lock.json
└── server.mjs                  # Express server entry file
⚙️ Installation Steps

Clone the repo

git clone https://github.com/yourusername/helpfultiabackend2025.git
cd helpfultiabackend2025


Install dependencies

npm install


Create .env file

PORT=3000
MONGODB_URI=mongodb+srv://<USERNAME>:<PASSWORD>@cluster0.mongodb.net/helpfultia
NODE_ENV=development

Start the development server

npm run dev


You should see:

✅ MongoDB connected
🚀 Server on :3000
🧪 Testing with Postman

GET health check
GET http://localhost:3000/
→ Should return:
"Helpful Tía API running"

CREATE a recipe
POST http://localhost:3000/api/recipes
Headers: Content-Type: application/json
Body:

{
  "title": "Pollo Guisado",
  "ingredients": ["chicken", "tomato", "garlic"]
}


→ Expect 201 Created with recipe _id.

READ all recipes
GET http://localhost:3000/api/recipes

READ one recipe
GET http://localhost:3000/api/recipes/<_id>

UPDATE a recipe
PUT http://localhost:3000/api/recipes/<_id>

{
  "title": "Pollo Guisado Light"
}


DELETE a recipe
DELETE http://localhost:3000/api/recipes/<_id>

🧠 Educational Focus & Metrics
Metric	        What It Shows
C Create	    POST /api/recipes creates a new document
R Read	        GET /api/recipes and GET /api/recipes/:id
U Update	    PUT /api/recipes/:id modifies an existing recipe
D Delete	    DELETE /api/recipes/:id removes a recipe
Error Handling	Custom middleware returns clear messages
Environment Vars	.env used for security (DB credentials)
Documentation	 Clear README + inline comments ✅

📚 Official Documentation & Resources
Tool	Documentation
Node.js	https://nodejs.org/en/docs

Express.js	https://expressjs.com/en/starter/hello-world.html

Mongoose (Guide)	https://mongoosejs.com/docs/guide.html

Mongoose (Models)	https://mongoosejs.com/docs/models.html

Mongoose (Connections)	https://mongoosejs.com/docs/connections.html

Mongoose (Validation)	https://mongoosejs.com/docs/validation.html

MongoDB Atlas Setup	https://www.mongodb.com/docs/atlas/getting-started/

Postman (API Testing)	https://learning.postman.com/docs/getting-started/introduction/

dotenv (Environment Variables)	https://www.npmjs.com/package/dotenv

CORS Middleware	https://expressjs.com/en/resources/middleware/cors.html
