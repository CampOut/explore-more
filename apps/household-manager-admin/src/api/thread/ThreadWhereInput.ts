import { CorkBoardWhereUniqueInput } from "../corkBoard/CorkBoardWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { NoteListRelationFilter } from "../note/NoteListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ThreadWhereInput = {
  corkboard?: CorkBoardWhereUniqueInput;
  id?: StringFilter;
  notes?: NoteListRelationFilter;
  topic?: StringNullableFilter;
};
