import { User } from "../user/User";
import { Household } from "../household/Household";
import { Thread } from "../thread/Thread";

export type CorkBoard = {
  createdAt: Date;
  createdBy?: User | null;
  household?: Household;
  id: string;
  threads?: Array<Thread>;
  topic: string;
  updatedAt: Date;
};
