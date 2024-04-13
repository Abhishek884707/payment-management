const express = require("express");

const router = express.Router();

const {handleCreateNewPayment,
    handleGetAllPayments,
    handleGetPaymentById} = require("../controllers/paymentController")

    
    // REST APIs
    router.route("/:id")
    /**
     * @swagger
     * /api/users/{id}:
     *  get:
     *     summery: Get payment by Id.
     *     tags: [Fetch]
     *     description: Retrieve a payment by id.
     *     parameters:
     *          - id: id
     *            in: path
     *            description: the id of the payment.
     *            require: true
     *            schema:
     *              type: string
     *     responses:
     *      200:
     *        description: Fetched Successfully
     *      400:
     *        description: Bad Request
     *      404:
     *        description: Not Found
     *      500:
     *        description: Server Error
     */
    .get(handleGetPaymentById)

    
    router.route("/")
    /**
     * @swagger
     * /api/users:
     *  get:
     *      summery: Get a list of payments.
     *      tags: [Fetch]
     *      description: Retrieve a list of payments.
     *      responses:
     *         200:
     *            description: A List of Users. 
     */
    .get(handleGetAllPayments)
    /**
     * @swagger
     * /api/users:
     *  post:
     *      summery: Create a new payment.
     *      tags: [Create]
     *      description: Enter required all perameters to add new payment in database.
     *      requestBody:
     *          require: true
     *          content: 
     *              application/json:
     *              schema:
     *                  type: object
     *                  properties:
     *                      order_id:
     *                              type: string
     *                      method:
     *                              type: string
     *                      amount:
     *                              type: Number 
     *                  example:
     *                      order_id: 661a796c78a25f8dfbe44bf4
     *                      method: Net Banking
     *                      amount: 2250
     *      responses:
     *          200:
     *              description: Successfully created a new Payment.
     *          400:
     *              description: All fields are required.
     *          500:
     *              description: Some Server Error.
     */
    .post(handleCreateNewPayment);


    module.exports = router;