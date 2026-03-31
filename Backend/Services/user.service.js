const userModel = require("../models/user.model");

export default.createUser = async (userData) => {
    try {
        const user = new userModel(userData);   