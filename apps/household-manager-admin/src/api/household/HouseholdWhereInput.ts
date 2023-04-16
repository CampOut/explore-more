import { CorkBoardListRelationFilter } from "../corkBoard/CorkBoardListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type HouseholdWhereInput = {
  corkBoards?: CorkBoardListRelationFilter;
  id?: StringFilter;
  members?: UserListRelationFilter;
  name?: StringFilter;
};
