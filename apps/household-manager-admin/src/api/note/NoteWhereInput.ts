import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ThreadWhereUniqueInput } from "../thread/ThreadWhereUniqueInput";

export type NoteWhereInput = {
  author?: UserWhereUniqueInput;
  id?: StringFilter;
  text?: StringNullableFilter;
  thread?: ThreadWhereUniqueInput;
};
