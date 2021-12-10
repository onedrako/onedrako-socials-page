import React from 'react'

import { P, Div, Svg } from '../../styles/Discord/StyledErrorMessage'

const RequiredMessage = ({ message }) => {
  return (
    <Div>
      {/* <Img src='https://image.flaticon.com/icons/png/512/1022/1022476.png' alt='Error Icon' /> */}
      <Svg />
      <P>{message}</P>
    </Div>
  )
}

export { RequiredMessage }
