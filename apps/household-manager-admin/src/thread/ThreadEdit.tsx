import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { CorkBoardTitle } from "../corkBoard/CorkBoardTitle";
import { NoteTitle } from "../note/NoteTitle";

export const ThreadEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
