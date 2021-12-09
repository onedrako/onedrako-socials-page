import React from 'react'

import { Img, P, Div } from '../../styles/Discord/StyledErrorMessage'

const RequiredMessage = ({ message }) => {
  return (
    <Div>
      <Img src='https://cdn-icons.flaticon.com/png/512/559/premium/559384.png?token=exp=1639070150~hmac=6ab3df420bcc70d88237b256f11e1e1c' alt='Error Icon' />
      <P>{message}</P>
    </Div>
  )
}

export { RequiredMessage }
