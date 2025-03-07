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
    priorityHighTransparent: "rgba(255, 77, 77, 0.15)", 
    priorityMedium: "#4d79ff",
    priorityMediumTransparent: "rgba(77, 121, 255, 0.15)",
    priorityLow: "#2ecc71",
    priorityLowTransparent: "rgba(46, 204, 113, 0.15)", 
  },
  spacing: {
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
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
};

export default theme;
