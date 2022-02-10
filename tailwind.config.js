module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: 'Roboto, sans-serif',
      },
      colors: {
        mvp: {
          green: {
            50: 'var(--mvp-green-50)',
          },
          blue: {
            50: 'var(--mvp-blue-50)',
            100: 'var(--mvp-blue-100)',
            200: 'var(--mvp-blue-200)',
            300: 'var(--mvp-blue-300)',
            400: 'var(--mvp-blue-400)',
          },
          yellow: {
            50: 'var(--mvp-yellow-50)',
            100: 'var(--mvp-yellow-100)',
          },
          red: {
            50: 'var(--mvp-red-50)',
          },
          purple: {
            50: 'var(--mvp-purple-50)',
          },
          gray: {
            50: 'var(--mvp-gray-50)',
          },
        },
      },
    },
  },
  plugins: [],
};
