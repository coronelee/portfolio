/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      KodeBold: ['KodeMonoBold', 'sans-serif'],
      KodeMedium: ['KodeMonoMedium', 'sans-serif'],
      KodeRegular: ['KodeMonoRegular', 'sans-serif'],
      KellySlab: ['KellySlab', 'sans-serif'],
      KodeSemiBold: ['KodeMonoSemiBold', 'sans-serif'],
      Ubuntu: ['Ubuntu', 'sans-serif']
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
        },
        pulsation: {
          '0%': { transform: 'translateX(0px)' },
          '1%': { transform: 'rotate(45deg)' },
          '100%': { transform: 'translateX(160px) ' }
        },
        openMenu: {
          '0%': { height: '0px', width: '0px' },
          '100%': { height: 'screen', width: 'screen' }
        }
      }
    }
  },
  plugins: []
}
