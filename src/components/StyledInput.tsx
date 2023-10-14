import { useState } from "react";
import theme from "../common/theme";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

const Input = ({
  label,
  placeholder,
  style,
  error,
  value,
  onChangeText,
}: {
  label: string;
  placeholder: string;
  style: any;
  error: any;
  value: any;
  onChangeText: any;
}) => {
  const [focus, setFocus] = useState(false);

  const styles = StyleSheet.create({
    scrollView: {
      overflow: "hidden",
      height: 80,
    },
    container: {
      ...style,
      flexDirection: "row",
      alignItems: "center",
      borderColor: focus ? theme.colors.primary : theme.colors.tertiary,
      opacity: 0.6,
      width: "100%",
      height: 48,
      borderWidth: 2,
      borderRadius: 8,
      paddingHorizontal: 16,
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
    <ScrollView
      overScrollMode="never"
      contentContainerStyle={styles.scrollView}
      keyboardShouldPersistTaps="handled"
    >
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={stylesToViewInput}>
        <TextInput
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor={theme.colors.tertiary}
          value={value}
          onChangeText={onChangeText}
        />
      </View>
    </ScrollView>
  );
};

export default Input;
