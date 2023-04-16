import { CorkBoardUpdateManyWithoutUsersInput } from "./CorkBoardUpdateManyWithoutUsersInput";
import { HouseholdWhereUniqueInput } from "../household/HouseholdWhereUniqueInput";
import { NoteUpdateManyWithoutUsersInput } from "./NoteUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  avatar?: string | null;
  bio?: string | null;
  corkBoards?: CorkBoardUpdateManyWithoutUsersInput;
  firstName?: string | null;
  household?: HouseholdWhereUniqueInput | null;
  notes?: NoteUpdateManyWithoutUsersInput;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
};
