import SimpleSchema from "simpl-schema";
import { Project } from "../../types/project";
import { User } from "../../types/user";

const ProjectSchema = new SimpleSchema({
    name: {
        type: String,
        label: "Name",
        min: 3,
    },
    description: {
        type: String,
        label: "Description",
        min: 3,
    },
    email: {
        type: String,
        label: "Email",
        regEx: SimpleSchema.RegEx.Email,
    },
});

export const ProjectEditSchema = ({
    name,
    description,
    email,
}: Project) => new SimpleSchema({
    name: {
        type: String,
        label: "Name",
        min: 3,
        defaultValue: name,
    },
    description: {
        type: String,
        label: "Description",
        min: 3,
        defaultValue: description,
    },
    email: {
        type: String,
        label: "Email",
        regEx: SimpleSchema.RegEx.Email,
        defaultValue: email,
    },
});
export const ProjectAddUserSchema = (users: User[]) => new SimpleSchema({
    username: {
        type: Array,
        label: "Users",
        minCount: 1,
    },
    "username.$": {
        type: String,
        label: "User",
        allowedValues: users.map((user) => user.username),
        uniforms: {
            options: users.map((user) => ({
                label: user.username,
                value: user.username,
            })),
        },
    },
});

export default ProjectSchema;