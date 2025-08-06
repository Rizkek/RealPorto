export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
    extend: {
      transitionProperty: {
        width: 'width',
      },
    },
  }
}