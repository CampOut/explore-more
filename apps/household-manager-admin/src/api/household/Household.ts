import { CorkBoard } from "../corkBoard/CorkBoard";
import { User } from "../user/User";

export type Household = {
  corkBoards?: Array<CorkBoard>;
  createdAt: Date;
  id: string;
  members?: Array<User>;
  name: string;
  updatedAt: Date;
};
