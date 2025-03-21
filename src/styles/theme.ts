import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  colors: {
    background: "#f8f8f8",
    columnBackground: "#f0f2f5",
    textPrimary: "#333",
    textSecondary: "#555",
    white: "#ffffff",
    border: "#E2E8F0",
    priorityHigh: "#ff4d4d",
    priorityHighTransparent: "#ff4d4d26", 
    priorityMedium: "#4d79ff",
    priorityMediumTransparent: "#4d79ff26",
    priorityLow: "#2ecc71",
    priorityLowTransparent: "#2ecc7126", 
  },
  spacing: {
    extraSmall: "5px",
    small: "10px",
    medium: "16px",
    large: "32px",
  },
  borderRadius: {
    small: "8px",
    medium: "24px",
    large: "40px",
    headerRadius: "46px",
  },
  fontSize: {
    extraSmall: "11px",
    small: "14px",
    medium: "16px",
    large: "24px",
  },
  boxShadow: "0 2px 4px #00000019",
};

export default theme;
