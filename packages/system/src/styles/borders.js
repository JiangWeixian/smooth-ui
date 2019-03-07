import { style, compose } from '../style'
import { num } from '../util'
import { px } from '../unit'

const getBorder = n => (num(n) && n > 0 ? `${n}px solid` : n)

export const border = style({
  prop: 'border',
  themeKey: 'borders',
  transform: getBorder,
})

export const borderTop = style({
  prop: 'borderTop',
  themeKey: 'borders',
  transform: getBorder,
})

export const borderTopColor = style({
  prop: 'borderTopColor',
  themeKey: 'colors',
})

export const borderRight = style({
  prop: 'borderRight',
  themeKey: 'borders',
  transform: getBorder,
})

export const borderRightColor = style({
  prop: 'borderRightColor',
  themeKey: 'colors',
})

export const borderBottom = style({
  prop: 'borderBottom',
  themeKey: 'borders',
  transform: getBorder,
})

export const borderBottomColor = style({
  prop: 'borderBottomColor',
  themeKey: 'colors',
})

export const borderLeft = style({
  prop: 'borderLeft',
  themeKey: 'borders',
  transform: getBorder,
})

export const borderLeftColor = style({
  prop: 'borderLeftColor',
  themeKey: 'colors',
})

export const borderColor = style({
  prop: 'borderColor',
  themeKey: 'colors',
})

export const borderRadius = style({
  prop: 'borderRadius',
  themeKey: 'radii',
  transform: px,
})

export const boxShadow = style({
  prop: 'boxShadow',
  themeKey: 'shadows',
})

export const borders = compose(
  border,
  borderTop,
  borderRight,
  borderBottom,
  borderLeft,
  borderColor,
  borderRadius,
  boxShadow,
)
