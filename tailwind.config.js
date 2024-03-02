/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      KodeBold: ['KodeMonoBold', 'sans-serif'],
      KodeMedium: ['KodeMonoMedium', 'sans-serif'],
      KodeRegular: ['KodeMonoRegular', 'sans-serif'],
      KodeSemiBold: ['KodeMonoSemiBold', 'sans-serif']
    },
    extend: {
      keyframes: {
        logo: {
          '0%, 100%': { transform: 'rotate(-6deg)' },
          '50%': { transform: 'rotate(6deg)' }
        },
        bgWhite: {
          '0%': { height: 0, width: 0 },
          '100%': { height: '100%', width: '100%' }
        }
      }
    }
  },
  plugins: []
}
