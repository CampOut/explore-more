import { CorkBoardWhereUniqueInput } from "../corkBoard/CorkBoardWhereUniqueInput";
import { NoteUpdateManyWithoutThreadsInput } from "./NoteUpdateManyWithoutThreadsInput";

export type ThreadUpdateInput = {
  corkboard?: CorkBoardWhereUniqueInput;
  notes?: NoteUpdateManyWithoutThreadsInput;
  topic?: string | null;
};
