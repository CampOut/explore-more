import { CorkBoard } from "../corkBoard/CorkBoard";
import { Household } from "../household/Household";
import { Note } from "../note/Note";
import { JsonValue } from "type-fest";

export type User = {
  avatar: string | null;
  bio: string | null;
  corkBoards?: Array<CorkBoard>;
  createdAt: Date;
  firstName: string | null;
  household?: Household | null;
  id: string;
  notes?: Array<Note>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
