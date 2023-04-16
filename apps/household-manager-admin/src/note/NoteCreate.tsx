import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { UserTitle } from "../user/UserTitle";
import { ThreadTitle } from "../thread/ThreadTitle";

export const NoteCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="author.id" reference="User" label="Author">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="Text" multiline source="text" />
        <ReferenceInput source="thread.id" reference="Thread" label="Thread">
          <SelectInput optionText={ThreadTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
