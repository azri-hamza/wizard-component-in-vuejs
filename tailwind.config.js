module.exports = {
  content: [ './resources/js/*.{html,js,vue}', './resources/js/components/*.{html.js,vue}'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')({
    strategy: 'base', // only generate global styles
    strategy: 'class', // only generate classes
  }),],
}
