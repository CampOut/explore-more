import { CorkBoardCreateNestedManyWithoutHouseholdsInput } from "./CorkBoardCreateNestedManyWithoutHouseholdsInput";
import { UserCreateNestedManyWithoutHouseholdsInput } from "./UserCreateNestedManyWithoutHouseholdsInput";

export type HouseholdCreateInput = {
  corkBoards?: CorkBoardCreateNestedManyWithoutHouseholdsInput;
  members?: UserCreateNestedManyWithoutHouseholdsInput;
  name: string;
};
