import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

const ZForm = ({
  children,
  onSubmit,
}: {
  children: React.ReactNode;
  onSubmit: SubmitHandler<FieldValues>;
}) => {
  const methods = useForm();

  const submit: SubmitHandler<FieldValues> = (data) => {
    onSubmit(data);
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(submit)}>{children}</form>
    </FormProvider>
  );
};

export default ZForm;
