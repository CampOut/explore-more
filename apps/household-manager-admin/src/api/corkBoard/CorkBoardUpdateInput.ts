import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { HouseholdWhereUniqueInput } from "../household/HouseholdWhereUniqueInput";
import { ThreadUpdateManyWithoutCorkBoardsInput } from "./ThreadUpdateManyWithoutCorkBoardsInput";

export type CorkBoardUpdateInput = {
  createdBy?: UserWhereUniqueInput | null;
  household?: HouseholdWhereUniqueInput;
  threads?: ThreadUpdateManyWithoutCorkBoardsInput;
  topic?: string;
};
