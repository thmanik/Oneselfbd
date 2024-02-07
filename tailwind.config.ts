import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: "#00C1F3",
      title: "#1F75C5",
      sub_title: "#91A2B1",
      heading: "#333E48",
      "base-100": "#0F0F0F",
    },
    extend: {},
  },
  plugins: [],
});
