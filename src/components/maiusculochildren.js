import React from 'react'

function MaiusculoChildren(props){/* props = propriedades */
  const textoDigitado = props.children
  const textoMaiusculo = textoDigitado.toUpperCase()

  return(
    <div> {/* InLine Styling*/}
      {textoMaiusculo}
    </div>
  )
}
export default MaiusculoChildren