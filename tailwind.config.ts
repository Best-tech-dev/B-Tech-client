/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-one": "#2bcd15",
        "primary-two": "#a4cd39",
        secondary: "#161a25",
        success: "#28a745", // You can adjust these
        info: "#17a2b8",
        warning: "#ffc107",
        danger: "#dc3545",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#2bcd15",
          secondary: "#161a25",
          accent: "#a4cd39",
          neutral: "#3D4451",
          "base-100": "#FFFFFF",
          success: "#28a745",
          info: "#17a2b8",
          warning: "#ffc107",
          error: "#dc3545",
        },
      },
    ],
  },
};

export default config;
