import React from "react";
import { useField } from "formik";
import { View, Text } from "react-native";
import Input from "../../StyledInput";
import theme from "../../../common/theme";

export const FormikInputValue = ({
  name,
  label,
  placeholder,
}: {
  name: string;
  label?: string;
  placeholder?: string;
}) => {
  const [field, meta, helpers] = useField(name);

  return (
    <View style={{ height: 80, marginBottom: 5 }}>
      <Input
        label={label}
        placeholder={placeholder}
        error={meta.error}
        value={field.value}
        onChangeText={(value: any) => helpers.setValue(value)}
        style={{ marginBottom: 15 }}
      />
      {meta.error && (
        <View
          style={{
            flexDirection: "row",
            width: "100%",
          }}
        >
          <Text style={{ color: "red", fontSize: theme.fontSize.s }}>
            {meta.error}
          </Text>
        </View>
      )}
    </View>
  );
};
