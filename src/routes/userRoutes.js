const express = require("express");
const router = express.Router();
const UserController = require('../controllers/userController');

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - country
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the user
 *         name:
 *           type: string
 *           description: The name of the user
 *         email:
 *           type: string
 *           description: The email of the user
 *         country:
 *           type: string
 *           description: The country of the user
 *       example:
 *         id: d5fEasz9094ikff
 *         name: Oladejo Olajide
 *         email: programmerolajide@gmail.com
 *         country: Nigeria
 */

 /**
  * @swagger
  * tags:
  *   name: Users
  *   description: User Management CRUD API
  */

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Returns the list of all the users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: The list of the users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */
// GET request to /users to fetch all users
router.get("/users", UserController.getAllUsers);

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Create a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: The user was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       500:
 *         description: Some server error
 */
// POST request to /users to create a new user
router.post("/users", UserController.createNewUser);

/**
 * @swagger
 * /user/{id}:
 *   get:
 *     summary: Get the user by id
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The user id
 *     responses:
 *       200:
 *         description: The user description by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: The user was not found
 */

// Using findbyid() to find a user
router.get("/user/:id", UserController.getOneUser);


/**
 * @swagger
 * /user/{id}:
 *  put:
 *    summary: Update the user by the id
 *    tags: [Users]
  *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The user id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/User'
 *          example:
 *            data:
 *              name: Oladejo Olajide
 *              country: Nigeria
 *           
 *    responses:
 *      200:
 *        description: The user was updated successfully
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
 *      404:
 *        description: The user was not found
 *      500:
 *        description: Some error happened
 */

// PUT request to /users/:id to update one user
router.put("/user/:id", UserController.updateOneUser);

/**
 * @swagger
 * /user/{id}:
 *   delete:
 *     summary: Delete a user by id
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The user id
 * 
 *     responses:
 *       200:
 *         description: The user was deleted successfully
 *       404:
 *         description: The user was not found
 */
// DELETE request to /users/:id to delete a user
router.delete("/user/:id", UserController.deleteOneUser);

module.exports = router;
