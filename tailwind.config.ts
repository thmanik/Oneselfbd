import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: "#001F60",
      secondary: "#1B1F23",
      "base-100": "#0F0F0F",
    },
    extend: {},
  },
  plugins: [],
});
