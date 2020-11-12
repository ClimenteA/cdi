module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    './src/**/*.html',
    './src/**/*.svelte',
    './src/*.svelte'
  ],
  theme: {
    extend: {
      minHeight: {
        '32': '8rem',
      },
    },
  },
  variants: {},
  plugins: [],
}
