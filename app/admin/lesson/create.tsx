import {
  Create,
  SimpleForm,
  TextInput,
  required,
  NumberInput,
} from "react-admin";

export const LessonCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="title" validate={[required()]} label="Title" />
        <TextInput
          source="unitId"
          validate={[required()]}
          label="units"
        />
        <NumberInput source="order" validate={[required()]} label="order" />
      </SimpleForm>
    </Create>
  );
};
