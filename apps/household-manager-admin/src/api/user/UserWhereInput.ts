import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CorkBoardListRelationFilter } from "../corkBoard/CorkBoardListRelationFilter";
import { HouseholdWhereUniqueInput } from "../household/HouseholdWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { NoteListRelationFilter } from "../note/NoteListRelationFilter";

export type UserWhereInput = {
  avatar?: StringNullableFilter;
  bio?: StringNullableFilter;
  corkBoards?: CorkBoardListRelationFilter;
  firstName?: StringNullableFilter;
  household?: HouseholdWhereUniqueInput;
  id?: StringFilter;
  notes?: NoteListRelationFilter;
  username?: StringFilter;
};
