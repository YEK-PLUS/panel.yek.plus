import SimpleSchema from "simpl-schema";
import { ProjectType, ProjectTypeConfigType } from "../../types/project-type";

const ProjectTypeSchema = new SimpleSchema({
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
});

export const ProjectTypeConfigAddSchema = new SimpleSchema({
  key: {
    type: String,
    label: "Key",
    min: 3,
  },
  label: {
    type: String,
    label: "Label",
    min: 3,
  },
  editable: {
    type: Boolean,
    label: "Editable",
    defaultValue: true,
  },
  type: {
    type: String,
    label: "Type",
    allowedValues: Object.values(ProjectTypeConfigType),
  },
});

export const ProjectTypeEditSchema = ({ name, description }: ProjectType) =>
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
  });

export default ProjectTypeSchema;
