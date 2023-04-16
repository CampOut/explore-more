import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  ReferenceField,
  TextField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { CORKBOARD_TITLE_FIELD } from "./CorkBoardTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { HOUSEHOLD_TITLE_FIELD } from "../household/HouseholdTitle";

export const CorkBoardShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <ReferenceField label="CreatedBy" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Household"
          source="household.id"
          reference="Household"
        >
          <TextField source={HOUSEHOLD_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="Topic" source="topic" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Thread"
          target="CorkBoardId"
          label="Threads"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Corkboard"
              source="corkboard.id"
              reference="CorkBoard"
            >
              <TextField source={CORKBOARD_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Topic" source="topic" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
