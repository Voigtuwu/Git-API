import React from 'react'
import { Container, Name, Desc, Footer, Lang, Link } from './styles'

function Repository() {
  return (
    <Container color='#02a9db'>
        <Name>
            Repository
        </Name>
        <Desc>Repository desc</Desc>
        <Footer color='#02a9db'>
            <Lang>Lang</Lang>
            <Link href='https://github.com/Voigtuwu' target='_blank'>Visualizar</Link>
        </Footer>
    </Container>
  )
}

export default Repository