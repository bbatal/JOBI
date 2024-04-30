interface Size {
    xs: string
    sm: string
    md: string
    mdl: string
    lg: string
    xl: string
    xxl: string
}

const size: Size = {
  xs: '400px', // for small screen mobile
  sm: '600px', // for mobile screen
  md: '900px', // for tablets
  mdl: '1024px', // for large tablets
  lg: '1280px', // for laptops
  xl: '1440px', // for desktop / monitors
  xxl: '1920px', // for big screens
}

export const device = {
  xs: `(max-width: ${size.xs})`,
  sm: `(max-width: ${size.sm})`,
  md: `(max-width: ${size.md})`,
  mdl: `(max-width: ${size.mdl})`,
  lg: `(max-width: ${size.lg})`,
  xl: `(max-width: ${size.xl})`,
  xxl: `(max-width: ${size.xxl})`,
}

