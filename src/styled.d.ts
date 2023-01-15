import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
      fonts: {
          basic: string,
          additional: string
      },
      fontWeight: {
          light: number,
          reqular: number,
          medium: number,
          semiBold: number,
          bold: number
      },
      fontStyle: {
          normal: string,
          italic: string
      },
    palette: {
        white: string,
        active: string,
        grey: string,
        blue: string,
        darkGrey: string,
        footerTitle: string,
        bgDark: string,
        bgLight: string
    },
  }
}