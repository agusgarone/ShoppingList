import React from "react";
import { View } from "react-native";
import { Formik } from "formik";
import StyledButton from "../StyledButton";
import { FormikInputValue } from "./Formik/InputText";
import { getProductByName } from "../../data/Controller";
import { IFormSelectProduct } from "../../common/types";

const initialValues = {
  nombre: "",
};

const FORM_STATUS = {
  idle: "idle",
  wrongCredentials: "wrongCredentials",
};

const FormSelectProduct = ({ db, setDataRender }: IFormSelectProduct) => {
  const handleFormikSubmit = async (
    values: { nombre: string },
    actions: {
      setStatus: (arg0: string) => void;
      setSubmitting: (arg0: boolean) => void;
    }
  ) => {
    actions.setStatus(FORM_STATUS.idle);
    actions.setSubmitting(true);
    try {
      const { nombre } = values;
      console.log("values", nombre);
      getProductByName(db, [nombre.toUpperCase()], setDataRender);
      actions.setSubmitting(false);
    } catch (e) {
      actions.setStatus(FORM_STATUS.wrongCredentials);
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleFormikSubmit}>
      {({ handleSubmit, isSubmitting }) => {
        return (
          <View style={{ marginHorizontal: 24 }}>
            <FormikInputValue
              label={"Nombre"}
              name="nombre"
              placeholder={"Ingrese el nombre"}
            />
            <View>
              <StyledButton
                children="Buscar"
                color="primary"
                type="Action"
                key={"btn-buscar"}
                action={handleSubmit}
              />
            </View>
          </View>
        );
      }}
    </Formik>
  );
};
export default FormSelectProduct;
