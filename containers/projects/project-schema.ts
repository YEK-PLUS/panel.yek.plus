import SimpleSchema from "simpl-schema";
import { Project } from "../../types/project";
import { ProjectType, ProjectTypeConfig } from "../../types/project-type";
import { User } from "../../types/user";

const ProjectSchema = (projectTypes: ProjectType[]) =>
  new SimpleSchema({
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
    type: {
      type: String,
      label: "Type",
      allowedValues: projectTypes.map((projectType) => projectType.name),
      defaultValue: projectTypes[0].name,
    },
  });

export const ProjectEditSchema = ({ name, description, email }: Project) =>
  new SimpleSchema({
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
export const ProjectConfigEditSchema = ({}: Project) =>
  new SimpleSchema({
    config: {
      type: Array,
      label: "Config",
    },
    "config.$": {
      type: Object,
    },
    "config.$.key": {
      type: String,
      label: "Key",
    },
    "config.$.value": {
      type: String,
      label: "Value",
    },
    "config.$.editable": {
      type: Boolean,
      label: "Editable",
      defaultValue: true,
    },
  });

const TypeToSchema = {
  "STRING": String,
  "NUMBER": Number,
  "BOOLEAN": Boolean,
}
export const ProjectConfigConstantEditSchema = ({
  label,
  type,
  value,
}: ProjectTypeConfig & {
  value: string;
}) =>
  new SimpleSchema({
    value: {
      type: TypeToSchema[type],
      label,
      defaultValue: value,
    },
  });
export const ProjectAddUserSchema = (users: User[]) =>
  new SimpleSchema({
    username: {
      type: Array,
      label: "Users",
      minCount: 1,
    },
    "username.$": {
      type: String,
      label: "User",
      allowedValues: users.map((user) => user.username),
    },
  });

export default ProjectSchema;
