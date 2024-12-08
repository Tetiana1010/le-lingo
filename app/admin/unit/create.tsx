import {
  Create,
  SimpleForm,
  TextInput,
  required,
  ReferenceInput,
  NumberInput,
} from "react-admin";

export const UnitCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="title" validate={[required()]} label="Title" />
        <TextInput
          source="descriprion"
          validate={[required()]}
          label="Descriprion"
        />
        <ReferenceInput source="courseId" reference="courses" />
        <NumberInput source="order" validate={[required()]} label="order" />
      </SimpleForm>
    </Create>
  );
};
