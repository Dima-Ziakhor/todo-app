interface Size {
  xs: string
  sm: string
  md: string
  lg: string
  xl: string
  xxl: string
}

const size: Size = {
  xs: '319px', // for small screen mobile
  sm: '575px', // for mobile screen
  md: '767px', // for tablets
  lg: '991px', // for laptops
  xl: '1199px', // for desktop / monitors
  xxl: '1699px', // for big screens
};

export const device: Size = {
  xs: `(max-width: ${size.xs})`,
  sm: `(max-width: ${size.sm})`,
  md: `(max-width: ${size.md})`,
  lg: `(max-width: ${size.lg})`,
  xl: `(max-width: ${size.xl})`,
  xxl: `(max-width: ${size.xxl})`,
};
