import styled from "styled-components"
import { Theme } from "../../styles/Theme"

export function Footer(){
    return(
        <StyledFooter>
            <ContactIcons>
                <ContactIconsItem>find me in:</ContactIconsItem>
                <ContactIconsItem></ContactIconsItem>
                <ContactIconsItem></ContactIconsItem>
                <ContactIconsItem></ContactIconsItem>
            </ContactIcons>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
    margin: 0 auto;
    width: 100%;
    max-width: 1782px;
    height: 50px;
    border: 2px solid green;
    background-color: ${Theme.colors.primary.blue};
`
const ContactIcons = styled.ul`
    
`
const ContactIconsItem = styled.li`
    
`