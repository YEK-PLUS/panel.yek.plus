import SimpleSchema from "simpl-schema";
import { User } from "../../types/user";
function generatePassword() {
    var length = 16,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}

const UserSchema = new SimpleSchema({
    username: {
        type: String,
        label: "Username",
        min: 3,
    },
    firstName: {
        type: String,
        label: "First Name",
    },
    lastName: {
        type: String,
        label: "Last Name",
    },
    email: {
        type: String,
        label: "Email",
        regEx: SimpleSchema.RegEx.Email,
    },
    password: {
        type: String,
        label: "Password",
        min: 6,
        defaultValue: generatePassword(),
        uniforms: { type: "password" },
    },
});
export const UserPasswordEditSchema = new SimpleSchema({
    password: {
        type: String,
        label: "Password",
        min: 6,
        uniforms: { type: "password", autocomplete: "off" },
    },
});

export const UserEditSchema = ({
    username,
    firstName,
    lastName,
    email,
}: User) => new SimpleSchema({
    username: {
        type: String,
        label: "Username",
        min: 3,
        defaultValue: username,
    },
    firstName: {
        type: String,
        label: "First Name",
        defaultValue: firstName,
    },
    lastName: {
        type: String,
        label: "Last Name",
        defaultValue: lastName,
    },
    email: {
        type: String,
        label: "Email",
        regEx: SimpleSchema.RegEx.Email,
        defaultValue: email,
    },
});

export default UserSchema;