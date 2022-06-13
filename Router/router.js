const express = require ('express')
const router = express.Router()

const {createHandle,GetAllUsers,updateOneUser, GetOneUser, deleteUser} = require ('../Handler/handler')

router
    .route('/user')
    .post(createHandle)
    .get(GetAllUsers)



router
    .route('/user/:id')
    .get(GetOneUser)
    .patch(updateOneUser)
    .delete(deleteUser)

module.exports = router;    