export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui"],
      },
      colors: {
        ink: "#0f172a",
        muted: "#64748b",
        panel: "#f8fafc",
        line: "#e5e7eb",
      },
    },
  },
};
