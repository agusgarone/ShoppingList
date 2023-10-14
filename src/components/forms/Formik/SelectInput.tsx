import React from "react";
import { useField } from "formik";
import { View, Text } from "react-native";
import Select from "../../StyledSelect";
import theme from "../../../common/theme";

export const FormikSelectValue = ({
  name,
  label,
  placeholder,
  setValue,
  value,
  dataRender,
}: {
  name: string;
  label?: string;
  placeholder?: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  value: string;
  dataRender?: any[];
}) => {
  const [field, meta, helpers] = useField(name);

  return (
    <View style={{ height: 80, marginBottom: 5 }}>
      <Select
        error={meta.error}
        label={label}
        placeholder={placeholder}
        value={value}
        onValueChange={(itemValue, itemIndex) => {
          setValue(itemValue), helpers.setValue(itemValue);
        }}
        dataRender={dataRender}
      />
      {meta.error && (
        <View
          style={{
            flexDirection: "row",
            width: "100%",
          }}
        >
          <Text style={{ color: "red", fontSize: theme.fontSize.s as any }}>
            {meta.error}
          </Text>
        </View>
      )}
    </View>
  );
};
