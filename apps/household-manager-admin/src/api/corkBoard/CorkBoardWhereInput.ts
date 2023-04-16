import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { HouseholdWhereUniqueInput } from "../household/HouseholdWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { ThreadListRelationFilter } from "../thread/ThreadListRelationFilter";

export type CorkBoardWhereInput = {
  createdBy?: UserWhereUniqueInput;
  household?: HouseholdWhereUniqueInput;
  id?: StringFilter;
  threads?: ThreadListRelationFilter;
  topic?: StringFilter;
};
