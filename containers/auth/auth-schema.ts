import SimpleSchema from "simpl-schema";

export const LoginSchema = new SimpleSchema({
  email: {
    type: String,
    label: "Email",
    regEx: SimpleSchema.RegEx.Email,
  },
  password: {
    type: String,
    label: "Password",
    min: 6,
    uniforms: { type: "password" , autoComplete: "current-password"},
},
});
