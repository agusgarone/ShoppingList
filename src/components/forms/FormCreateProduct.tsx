import React, { useState } from "react";
import { View } from "react-native";
import { Formik } from "formik";
import StyledButton from "../StyledButton";
import * as SQLite from "expo-sqlite";
import { createProduct } from "../../data/Controller";
import { FormikSelectValue } from "./Formik/SelectInput";
import { FormikInputValue } from "./Formik/InputText";
import { IFormCreateProduct } from "../../common/types";

const initialValues = {
  nombre: "",
  categoria: "",
};

const FORM_STATUS = {
  idle: "idle",
  wrongCredentials: "wrongCredentials",
};

const FormCreateProduct = ({ to, db, dataRender }: IFormCreateProduct) => {
  const [selectedValue, setSelectedValue] = useState<string>();
  const handleFormikSubmit = async (
    values: { nombre: any; categoria: any },
    actions: {
      setStatus: (arg0: string) => void;
      setSubmitting: (arg0: boolean) => void;
    }
  ) => {
    actions.setStatus(FORM_STATUS.idle);
    actions.setSubmitting(true);
    try {
      const { nombre, categoria } = values;
      console.log("values", nombre, categoria);
      createProduct(db, [nombre, categoria]);
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
                name="nombre"
                label={"Nombre"}
                placeholder={"Ingrese el nombre"}
              />
              <FormikSelectValue
                name="categoria"
                label="Categoria"
                value={selectedValue}
                setValue={setSelectedValue}
                dataRender={dataRender}
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

export default FormCreateProduct;
