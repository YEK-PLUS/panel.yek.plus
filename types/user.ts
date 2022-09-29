import { Project } from "./project";

export interface User {
  id: string;
  createdAt: string;
  updatedAt: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  avatarId: string;
  //   Avatar: string;
  Projects: Project[];
  //   Tokens: string;
}
