import { StyleSheet, Text, TouchableOpacity } from "react-native";
import theme from "../common/theme";

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    alignItems: "center",
    borderRadius: 10,
    marginVertical: 10,
    fontWeight: theme.fontWeights.normal as any,
    fontSize: theme.fontSize.body,
  },
  bgColorPrimary: {
    backgroundColor: theme.colors.primary,
    color: theme.colors.white,
  },
  bgColorSecondary: {
    backgroundColor: theme.colors.white,
    color: theme.colors.primary,
    borderColor: theme.colors.primary,
    borderWidth: 2,
  },
  bold: {
    fontWeight: theme.fontWeights.bold as any,
  },
  subHeading: {
    fontSize: theme.fontSize.subHeading,
  },
  textColorPrimary: {
    color: theme.colors.white,
  },
  textColorSecondary: {
    color: theme.colors.primary,
  },
});

const handlePress = (navigation: any, to) => {
  if (navigation && to) {
    return navigation?.navigation?.navigate(to);
  }
};

export default function StyledButton({
  fontWeight,
  type,
  children,
  color,
  style,
  navigation,
  to,
  action,
}: {
  fontWeight?: string;
  type: "Navigate" | "Action";
  children: string;
  color: "primary" | "secondary";
  style?: any;
  navigation?: any;
  to?: string;
  action?: () => void;
}) {
  const buttonStyles = [
    styles.button,
    color === "primary" && styles.bgColorPrimary,
    color === "secondary" && styles.bgColorSecondary,
    fontWeight === "subHeading" && styles.subHeading,
    style,
  ];

  const textButtonStyle = [
    color === "primary" && styles.textColorPrimary,
    color === "secondary" && styles.textColorSecondary,
  ];

  return (
    <TouchableOpacity
      style={buttonStyles}
      onPress={() => {
        if (type === "Navigate") {
          return handlePress(navigation, to);
        } else {
          action();
        }
      }}
    >
      <Text style={textButtonStyle}>{children}</Text>
    </TouchableOpacity>
  );
}
