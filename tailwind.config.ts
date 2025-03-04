export default {
  theme: {
    extend: {
      fontSize: {
        h1: ['80px', 1.7],
        h2: ['60px', 1.7],
        h3: ['40px', 1.7],
        h4: ['30px', 1.7],
        h5: ['24px', 1.7],
        h6: ['20px', 1.7],
        body: ['16px', 1.7],
        caption: ['14px', 1.5],
        small: ['12px', 1.5],
        tiny: ['10px', 1.4],
      },
      fontWeight: {
        black: 900,
        bold: 700,
        semibold: 600,
        medium: 500,
        regular: 400,
        light: 300,
      },
      colors: {
        black: {
          DEFAULT: '#2B2B2B',
          900: '#2B2B2B',
          800: '#474747',
          700: '#747474',
          600: '#9C9C9C',
          500: '#B8B8B8',
          400: '#D4D4D4',
          300: '#F0F0F0',
          200: '#FAFAFA',
        },
        white: '#FFFFFF',
      },
    },
    aspectRatio: {
      '4/3': '4 / 3',
      'square': '1 / 1',
      'video': '16 / 9',
    },
  },
  plugins: [],
}
