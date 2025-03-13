POST http://localhost:3000/api/categories
Content-Type: application/json

{
  "name": "Work"
}

POST http://localhost:3000/api/notes
Content-Type: application/json

{
  "title": "My Work Note",
  "content": "This is a work-related note.",
  "category": "65a1b2c3d4e5f6a7b8c9d0e1"
}

GET http://localhost:3000/api/notes/categories/65a1b2c3d4e5f6a7b8c9d0e1

PUT http://localhost:3000/api/notes/65a1b2c3d4e5f6a7b8c9d0e1
Content-Type: application/json

{
  "title": "Updated Work Note",
  "content": "This note has been updated."
}




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
├── routes/
│   └── noteRoutes.ts
├── utils/
│   ├── errorHandler.ts
│   ├── validationUtils.ts
│   ├── logger.ts
│   └── apiResponse.ts
├── index.ts
├── env/
└── README.md