import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { CorkBoardTitle } from "../corkBoard/CorkBoardTitle";
import { NoteTitle } from "../note/NoteTitle";

export const ThreadCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="corkboard.id"
          reference="CorkBoard"
          label="Corkboard"
        >
          <SelectInput optionText={CorkBoardTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="notes"
          reference="Note"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={NoteTitle} />
        </ReferenceArrayInput>
        <TextInput label="Topic" source="topic" />
      </SimpleForm>
    </Create>
  );
};
