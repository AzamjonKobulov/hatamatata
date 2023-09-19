/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      maxWidth: {
        base: '82.5rem',
      },
      fontFamily: {
        onest: ['Onest', 'sans-serif'],
      },
      fontSize: {
        32: '2rem',
        28: '1.75rem',
      },
      colors: {
        brand: {
          primary: {
            normal: '#196CCD',
            hover: '#0B46B7',
          },
          blue: '#1059E7',
          red: '#F22417',
          orange: '#F45F0B',
          green: '#18B415',
          black: '#191D28',
          'gray-1': '#343843',
          'gray-2': '#505462',
          'gray-3': '#747887',
          'gray-4': '#9EA5B2',
          'gray-5': '#B1B4BD',
          'gray-6': '#DADBDF',
          'gray-7': '#EAEBEF',
          'gray-8': '#F4F5F9',
          'gray-9': '#F6F7FB',
        },
      },
      gap: {
        30: '1.875rem',
      },
      spacing: {
        50: '3.125rem',
        30: '1.875rem',
        60: '3.75rem',
      },
      borderRadius: {
        10: '0.625rem',
      },
      backgroundImage: {
        'banner-1': "url('/public/assets/images/banners/banner-image-1.png')",
      },
    },
  },
};
