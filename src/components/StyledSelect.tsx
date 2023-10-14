import { useState } from "react";
import theme from "../common/theme";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { Picker } from "@react-native-picker/picker";

const Select = ({
  label,
  placeholder,
  error,
  value,
  onValueChange,
  dataRender,
}: {
  label: string;
  placeholder: string;
  error: any;
  value: any;
  onValueChange: (itemValue: any, itemIndex: number) => void;
  dataRender: any[];
}) => {
  const [focus, setFocus] = useState(false);

  const styles = StyleSheet.create({
    scrollView: {
      overflow: "hidden",
      height: 80,
    },
    container: {
      justifyContent: "center",
      borderColor: focus ? theme.colors.primary : theme.colors.tertiary,
      opacity: 0.6,
      width: "100%",
      height: 48,
      borderWidth: 2,
      borderRadius: 8,
    },
    label: {
      color: theme.colors.tertiary,
      fontSize: theme.fontSize.body,
      marginBottom: 4,
    },
    input: {
      flex: 1,
    },
    error: {
      borderColor: "red",
    },
  });

  const stylesToViewInput = [styles.container, error && styles.error];

  return (
    <View style={styles.scrollView}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={stylesToViewInput}>
        <Picker
          placeholder={placeholder}
          selectedValue={value}
          onValueChange={onValueChange}
        >
          {dataRender.map(({ name, id }, index) => {
            return (
              <Picker.Item label={name} value={id} key={`${name}-${id}`} />
            );
          })}
          {/* <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" /> */}
        </Picker>
      </View>
    </View>
  );
};

export default Select;
