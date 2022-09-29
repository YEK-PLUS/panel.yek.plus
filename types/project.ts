import { User } from "./user";

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
  planId: string;
  //   Plan: string;
  //   Cards: string;
  //   Invoinces: string;
}
