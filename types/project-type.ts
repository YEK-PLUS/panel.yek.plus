import { User } from "./user";

export interface ProjectType {
  id: string;
  createdAt: string;
  updatedAt: string;
  name: string;
  description: string;
  config: ProjectTypeConfig[];
}
export enum ProjectTypeConfigType {
  STRING = "STRING",
  NUMBER = "NUMBER",
  BOOLEAN = "BOOLEAN",
}

export interface ProjectTypeConfig {
  id: string;
  key: string;
  label: string;
  type: ProjectTypeConfigType;
  editable: boolean;
}
