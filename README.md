<h1 align="center">Note-Keeping API Updated</h1>

<p align="center">Note-Keeping API Updated (Node,express,Typescript,mongoDB) {console.log(body)}</p>

---

### **Breakdown of the Note-Keeping API**

#### **1. Project Structure**
The API is structured into the following components:

```
src/
├── index.ts                # Entry point for the application
├── controllers/            # Handles request logic
├── services/               # Defines data services and methods (e.g., getNotes)
├── models/                 # Defines data models (e.g., Note, Category)
├── routes/                 # Defines API endpoints
├── middlewares/            # Custom middleware (e.g., validation, logging)
└── utils/                  # Utility functions (e.g., error handling, API responses)

#### The files 

src/
├── models/
│   ├── Category.ts
│   └── Note.ts
├── services/
│   └── noteServices.ts
├── controllers/
│   └── noteControllers.ts
├── middlewares/
│   └── validateNotes.ts
│   ├── logger.ts
├── routes/
│   └── noteRoutes.ts
├── utils/
│   ├── errorHandler.ts
│   ├── validationUtils.ts
│   └── apiResponse.ts
├── index.ts
├── env/
└── README.md
```

---

#### **2. Key Files and Their Roles**

| **File/Folder**       | **Purpose**                                                                 |
|-----------------------|-----------------------------------------------------------------------------|
| **`index.ts`**        | Entry point for the app. Sets up Express, connects to MongoDB, and starts the server. |
| **`controllers/`**    | Contains logic for handling requests (e.g., CRUD operations for notes).     |
| **`models/`**         | Defines Mongoose schemas and interfaces for `Note` and `Category`.          |
| **`services/`**       | Defines the methods for the app, it uses the models that has been defined           |
| **`routes/`**         | Defines API endpoints and links them to controllers.                        |
| **`middlewares/`**    | Custom middleware for validation (`validateNote`) and logging (`logger`).   |
| **`utils/`**          | Utility functions for error handling, API responses, and logging.           |

---

#### **3. Key Features**
- **CRUD Operations**: Create, read, update, and delete notes.
- **Validation**: Middleware to validate note data (e.g., `title` and `content` are required).
- **Logging**: Middleware to log API requests.
- **Error Handling**: Centralized error handling for consistent API responses.
- **TypeScript**: Strongly typed code for better maintainability and fewer runtime errors.

---

## **Setup**

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Set Environment Variables**:
   Create a `.env` file in the root directory and add:
   ```env
   MONGODB_URI=mongodb://localhost:27017/notesdb
   PORT=5000
   ```

3. **Run the Application**:
   ```bash
   npm run dev
   ```

4. **Build the Project** (Optional):
   ```bash
   npm run build
   ```

---

## **API Endpoints**

| **Method** | **Endpoint**                  | **Description**                        |
|------------|-------------------------------|----------------------------------------|
| `GET`      | `/api/notes`                  | Get all notes.                         |
| `GET`      | `/api/notes/:id`              | Get a specific note by ID.             |
| `POST`     | `/api/notes`                  | Create a new note.                     |
| `PUT`      | `/api/notes/:id`              | Update a note by ID.                   |
| `DELETE`   | `/api/notes/:id`              | Delete a note by ID.                   |
| `GET`      | `/api/notes/categories/:id`   | Get notes by category ID.              |

---

## **Deployment**

Deployed on **Render**:
1. Push your code to GitHub.
2. Connect your repository to Render: "https://task12-pdem.onrender.com"
OR
3. Connect your repository to vercel: "https://task12-mkvrk4fbo-akpamgbo-philips-projects.vercel.app"
4. Set the build command to `npm install && npm run build`.
5. Set the start command to `node dist/index.js`.

---

## **Contributing**

Feel free to contribute to this project by opening issues or submitting pull requests.

Link to the deployed work: https://task12-taupe.vercel.app/

---

before push
src/
├── schemas/                  # NEW
│   ├── noteSchemas.ts        # Joi validation for notes
│   └── categorySchemas.ts    # Joi validation for categories (optional)
├── middlewares/
│   ├── validateNotes.ts      # Updated to use Joi validator
│   └── logger.ts
├── ... (rest of your existing files)