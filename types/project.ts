import { User } from "./user";
import { ProjectType, ProjectTypeConfigType } from "./project-type";
export interface Project {
  id: string;
  createdAt: string;
  updatedAt: string;
  name: string;
  email: string;
  imageId: string;
  //   Image: string;
  description: string;
  Users: User[];
  ProjectValues: ProjectValue[];
  ProjectType: ProjectType;
  planId: string;
  //   Plan: string;
  //   Cards: string;
  //   Invoinces: string;
}

export interface ProjectValue {
  id: string;
  createdAt: string;
  updatedAt: string;
  key: string;
  label: string;
  value: string;
  type: ProjectTypeConfigType;
  editable: boolean;
  project: Project;
  projectId: string;
}
