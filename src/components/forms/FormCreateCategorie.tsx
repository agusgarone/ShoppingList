import React from "react";
import { View } from "react-native";
import { Formik } from "formik";
import StyledButton from "../StyledButton";
import { createCategory } from "../../data/Controller";
import { FormikInputValue } from "./Formik/InputText";
import { IFormCreateCategorie } from "../../common/types";

const initialValues = {
  nombre: "",
};

const FORM_STATUS = {
  idle: "idle",
  wrongCredentials: "wrongCredentials",
};

const FormCreateCategorie = ({ to, db }: IFormCreateCategorie) => {
  const handleFormikSubmit = async (
    values: { nombre: any },
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
      createCategory(db, [nombre]);
      actions.setSubmitting(false);
      to();
    } catch (e) {
      actions.setStatus(FORM_STATUS.wrongCredentials);
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleFormikSubmit}>
      {({ handleSubmit, isSubmitting }) => {
        return (
          <View
            style={{
              justifyContent: "space-between",
              flex: 1,
              paddingHorizontal: 20,
            }}
          >
            <View style={{ paddingTop: 40 }}>
              <FormikInputValue
                label={"Nombre"}
                name="nombre"
                placeholder={"Ingrese el nombre"}
              />
            </View>
            <View>
              <StyledButton
                children="Aceptar"
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

export default FormCreateCategorie;
