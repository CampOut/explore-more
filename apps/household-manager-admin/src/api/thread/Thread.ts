import { CorkBoard } from "../corkBoard/CorkBoard";
import { Note } from "../note/Note";

export type Thread = {
  corkboard?: CorkBoard;
  createdAt: Date;
  id: string;
  notes?: Array<Note>;
  topic: string | null;
  updatedAt: Date;
};
