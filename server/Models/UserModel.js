const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Email is Required"],
        unique: true,
    },
    mobile: {
        type: String,
        required: [true, "Mobile Number is Required"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Password is Required"],
    },
    first_name: {
        type: String,
        required: [true, "First Name is Required"],
    },
    last_name: {
        type: String,
        required: [true, "Last Name is Required"],
    }
});

userSchema.pre("save", async function(next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next()
})

userSchema.statics.login = async function (email, password) {
    const user = await this.findOne({email});
    if(user) {
        const auth = await bcrypt.compare(password, user.password);
        if(auth) {
            return user;
        }
        throw Error("Incorrect Password");

    }
    throw Error("Incorrect Email");
}


module.exports = mongoose.model("Users", userSchema);