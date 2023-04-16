import { SortOrder } from "../../util/SortOrder";

export type ThreadOrderByInput = {
  corkboardId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  topic?: SortOrder;
  updatedAt?: SortOrder;
};
