import React from 'react';
import { Image } from 'react-native';
import { Container } from './styles';
import Logo from '../../assets/microbot.jpg';



function Header() {
  return(
    <Container>
      <Image 
        source={Logo}
        style={{
          resizeMode: 'contain',
          height: 200,
          width: 300,
        }} 
        
      />
    </Container>
  )
}

export default Header;