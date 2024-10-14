# REST-API

This API server reads data from a JSON file (⁠ items.json ⁠) and provides endpoints for CRUD (Create, Read, Update, Delete) operations.

Reads data from ⁠ items.json ⁠ file
Supports GET, POST, PUT, and DELETE requests
Uses Express.js for routing and middleware

To start the server: ⁠ node server.js ⁠
Open Postman or a web browser to test API endpoints

API Endpoints

GET /items

Retrieves all items from the ⁠ items.json ⁠ file

POST /items

Creates a new item and adds it to the ⁠ items.json ⁠ file
Request Body: JSON object with item data (e.g., ⁠ { "id": 106, "Name": "John", "Age": 30 } ⁠)

PUT /items/:id

Updates an existing item in the ⁠ items.json ⁠ file
Request Params: ⁠ id ⁠ (item ID)
Request Body: JSON object with updated item data

DELETE /items/:id

Deletes an item from the ⁠ items.json ⁠ file
Request Params: ⁠ id ⁠ (item ID)
