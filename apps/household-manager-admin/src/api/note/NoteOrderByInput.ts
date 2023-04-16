import { SortOrder } from "../../util/SortOrder";

export type NoteOrderByInput = {
  authorId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  text?: SortOrder;
  threadId?: SortOrder;
  updatedAt?: SortOrder;
};
