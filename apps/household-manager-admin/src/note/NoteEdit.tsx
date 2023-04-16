import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { UserTitle } from "../user/UserTitle";
import { ThreadTitle } from "../thread/ThreadTitle";

export const NoteEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="author.id" reference="User" label="Author">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="Text" multiline source="text" />
        <ReferenceInput source="thread.id" reference="Thread" label="Thread">
          <SelectInput optionText={ThreadTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
