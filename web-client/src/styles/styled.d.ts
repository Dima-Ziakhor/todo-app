import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primaryWhite: '#fff',
      primaryBlack: '#000'
    },

    fonts: {
      montserrat: 'Montserrat, sans-serif'
    },
  }
}
