import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { HouseholdWhereUniqueInput } from "../household/HouseholdWhereUniqueInput";
import { ThreadCreateNestedManyWithoutCorkBoardsInput } from "./ThreadCreateNestedManyWithoutCorkBoardsInput";

export type CorkBoardCreateInput = {
  createdBy?: UserWhereUniqueInput | null;
  household: HouseholdWhereUniqueInput;
  threads?: ThreadCreateNestedManyWithoutCorkBoardsInput;
  topic: string;
};
