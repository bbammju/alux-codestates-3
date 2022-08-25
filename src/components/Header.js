import styled from "styled-components";
import React from "react";
import Logo from "../assets/logo.png"
import Faq from "../assets/faq.png"


const HeaderContainer = styled.div`
  width: 99vw;
  height: 15vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 5px;
`
const LogoContainer = styled.img`
  display: flex;
  max-width: 10vw;
  max-height: 11vh;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  
`
const BrandInfoContainer = styled.div`
  display: flex;
  max-height: 9vh;
  max-width: 17vw;
  align-items: center;
  font-size: 2rem;
`
const FAQButton = styled.img`
  display: flex;
  height: 15vh;
  width: 6.5vw;
  border-radius: 1rem;
`

const Header = () => {

  return(
    
    <HeaderContainer>
      <LogoContainer src={Logo}/>
      <BrandInfoContainer>Water 다운로드 센터</BrandInfoContainer>
      <FAQButton src={Faq}/>
    </HeaderContainer>
    
  )
}

export default Header