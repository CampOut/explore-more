import { SortOrder } from "../../util/SortOrder";

export type CorkBoardOrderByInput = {
  createdAt?: SortOrder;
  createdById?: SortOrder;
  householdId?: SortOrder;
  id?: SortOrder;
  topic?: SortOrder;
  updatedAt?: SortOrder;
};
