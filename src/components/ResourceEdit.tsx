import { Edit, TabbedForm, TextInput } from "react-admin";

export const ResourceEdit = () => (
  <Edit>
    <TabbedForm>
      <TabbedForm.Tab label="General">
        <TextInput source="id" />
      </TabbedForm.Tab>
      <TabbedForm.Tab label="Info">
        <TextInput source="name" />
      </TabbedForm.Tab>
    </TabbedForm>
  </Edit>
);
