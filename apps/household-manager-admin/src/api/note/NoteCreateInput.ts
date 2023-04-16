import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ThreadWhereUniqueInput } from "../thread/ThreadWhereUniqueInput";

export type NoteCreateInput = {
  author?: UserWhereUniqueInput | null;
  text?: string | null;
  thread: ThreadWhereUniqueInput;
};
