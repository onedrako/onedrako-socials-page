import React from 'react'

import { Img, P, Div } from '../../styles/Discord/StyledErrorMessage'

const RequiredMessage = ({ message }) => {
  return (
    <Div>
      <Img src='https://cdn-icons.flaticon.com/png/512/559/premium/559343.png?token=exp=1638835247~hmac=bca88333bef6a44c5a2faf20d7295979' alt='Error Icon' />
      <P>{message}</P>
    </Div>
  )
}

export { RequiredMessage }
