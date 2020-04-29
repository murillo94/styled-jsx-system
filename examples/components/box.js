import styledJsxSystem from 'styled-jsx-system'
import { color, typography, space } from 'styled-system'
import css from '@styled-system/css'

const sx = ({ sx = {} }) => css(sx)()

const Box = ({ children, className, styles }) => {
  return (
    <div className={className}>
      {children}
      {styles}
    </div>
  )
}

export default styledJsxSystem(
  Box,
  // Pass the style props that the component supports
  [color, space, typography, sx]
)
