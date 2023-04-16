import { CorkBoardUpdateManyWithoutHouseholdsInput } from "./CorkBoardUpdateManyWithoutHouseholdsInput";
import { UserUpdateManyWithoutHouseholdsInput } from "./UserUpdateManyWithoutHouseholdsInput";

export type HouseholdUpdateInput = {
  corkBoards?: CorkBoardUpdateManyWithoutHouseholdsInput;
  members?: UserUpdateManyWithoutHouseholdsInput;
  name?: string;
};
