import React from 'react'

const SectionContainer = (props) => {
  return (
    <section>
      <h2>{props.title}</h2>
      {props.children}
    </section>
  )
}

export { SectionContainer }
