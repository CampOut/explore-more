import { CorkBoardWhereUniqueInput } from "../corkBoard/CorkBoardWhereUniqueInput";
import { NoteCreateNestedManyWithoutThreadsInput } from "./NoteCreateNestedManyWithoutThreadsInput";

export type ThreadCreateInput = {
  corkboard: CorkBoardWhereUniqueInput;
  notes?: NoteCreateNestedManyWithoutThreadsInput;
  topic?: string | null;
};
