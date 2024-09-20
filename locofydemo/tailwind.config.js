/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-50": "#f6f7f9",
        "base-white": "#fff",
        "gray-300": "#d0d5dd",
        "gray-700": "#344154",
        "gray-800": "#1d2939",
        "gray-200": "#eaecf0",
        "gray-500": "#667085",
        "gray-400": "#98a2b3",
        "gray-900": "#101828",
        "gray-100": "#f2f4f7",
        "gray-600": "#475467",
        "primary-50": "#eff4ff",
        "primary-600": "#155eef",
        "warning-50": "#fffaeb",
        "warning-600": "#dc6803",
        "success-50": "#edfcf2",
        "success-600": "#099250",
        "error-50": "#fff1f3",
        "error-600": "#e31b54",
        "error-500": "#f63d68",
        "warning-500": "#f79009",
        "success-500": "#16b364",
        "primary-700": "#004eeb",
      },
      spacing: {},
      fontFamily: {
        "heading-h6-medium": "'SF Pro Display'",
      },
      borderRadius: {
        "981xl": "1000px",
        "3xs": "10px",
      },
    },
    fontSize: {
      base: "16px",
      "5xl": "24px",
      sm: "14px",
      xs: "12px",
      smi: "13px",
      lg: "18px",
      xl: "20px",
      inherit: "inherit",
    },
    screens: {
      mq900: {
        raw: "screen and (max-width: 900px)",
      },
      mq700: {
        raw: "screen and (max-width: 700px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
