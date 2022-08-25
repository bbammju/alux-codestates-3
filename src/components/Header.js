import styled from "styled-components";
import React from "react";
import Logo from "../assets/logo.png"
import Faq from "../assets/faq.png"

const HeaderContainer = styled.div`
  width: 99vw;
  height: 15vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 5px;
  padding-top: 5px;

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
  max-width: 20vw;
  align-items: center;
  font-size: 2rem;
`
const FAQContainer = styled.img`
  display: flex;
  height: 15vh;
  width: 6.5vw;
  border-radius: 1rem;
  margin-right: 4vw;
`
const LBContainer = styled.div`
  display: flex;
`

const Header = () => {

  return(
    
    <HeaderContainer>
      <LBContainer>
        <LogoContainer src={Logo}/>
        <BrandInfoContainer>Water 다운로드 센터</BrandInfoContainer>
      </LBContainer>
      <FAQContainer src={Faq}/>
    </HeaderContainer>
    
  )
}

export default Header