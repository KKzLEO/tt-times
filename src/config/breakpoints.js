export const breakpoints = {
  _xs: 350,
  _sm: 567,
  _md: 768,
  _lg: 992,
  _xl: 1200,
}

const media = (pixels) => `@media (min-width: ${pixels}px)`
const maxMedia = (pixels) => `@media (max-width: ${pixels}px)`

const { _xs, _sm, _md, _lg, _xl } = breakpoints

export const sm = media(_sm)
export const md = media(_md)
export const lg = media(_lg)
export const xl = media(_xl)

export const lessThanXs = maxMedia(_xs)
export const lessThanSm = maxMedia(_sm)
export const lessThanMd = maxMedia(_md)
export const lessThanLg = maxMedia(_lg)
export const lessThanXl = maxMedia(_xl)
