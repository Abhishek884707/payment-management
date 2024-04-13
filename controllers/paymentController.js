const Payment = require("../models/payment")

async function handleGetAllPayments(req, res){
    const allDbUsers = await Payment.find({});
    return res.status(200).json(allDbUsers);
}

async function handleGetPaymentById(req, res){
    const id = req.params.id;
    const user = await Payment.findById(id);
    if(!user) return res.status(404).json({error: "User not found!!!"});
    return res.json(user);
}

// async function handleUpdateUserById(req, res){
//     const updateUser = req.body;
//     const user = await User.findByIdAndUpdate(req.params.id, {lastName: updateUser.last_name});
//     return res.status(200).json({status: "success"});
// }

// async function handledeleteUserById(req, res){
//     const user = await User.findByIdAndDelete(req.params.id);
//     return res.status(404).json({status: "success"});
// }

async function handleCreateNewPayment(req, res){
    const body = req.body;
    
    console.log(body);
    if(!body||
        !body.order_id||
        !body.method||
        !body.amount){
            return res.status(400).json({msg: "All fields are req...."});
        }

        
    const result = await Payment.create({
        orderId: body.order_id,
        method: body.method,
        amount: body.amount,
        status: "success"
    })
    return res.status(201).json({msg: "success", id: result._id});
}

module.exports = {
    handleGetAllPayments,
    handleGetPaymentById,
    handleCreateNewPayment
}