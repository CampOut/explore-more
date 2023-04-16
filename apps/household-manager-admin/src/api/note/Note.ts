import { User } from "../user/User";
import { Thread } from "../thread/Thread";

export type Note = {
  author?: User | null;
  createdAt: Date;
  id: string;
  text: string | null;
  thread?: Thread;
  updatedAt: Date;
};
