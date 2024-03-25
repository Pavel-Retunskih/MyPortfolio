import { Section } from "../../components/section/Section";
import { Container } from "../../components/container/Container";
import { Aside } from "../../components/aside/Aside";
import { FlexWrapper } from "../../components/flexwrapper/FlexWrapper";
import styled from "styled-components";
import { Theme } from "../../styles/Theme";


export function About(){
    return (
        <Section>
            <Container>
                <FlexWrapper direction="row" align = "flex-start" justify="stretch">
                    <Aside/>
                    <Content>
                        <Description>
                            <Title>personal-info</Title>
                            <DescriptionText>
                                <p>
                                    /* /** * About me * I have 5 years of еxperience in web * development lorem ipsum dolor sit amet, * consectetur adipiscing elit, sed do eiusmod * tempor incididunt ut labore et dolore * magna aliqua. Ut enim ad minim veniam, * quis nostrud exercitation ullamco laboris * nisi ut aliquip ex ea commodo consequat. * Duis aute irure dolor in reprehenderit in * * Duis aute irure dolor in reprehenderit in * voluptate velit esse cillum dolore eu fugiat * nulla pariatur. Excepteur sint occaecat * officia deserunt mollit anim id est laborum. */ */
                                </p>
                            </DescriptionText>
                        </Description>
                        <Snipets></Snipets>
                    </Content>
                </FlexWrapper>
            </Container>
        </Section>
    )
}

const Content = styled.div`
    display: flex;
    width: 100%;
    max-width: 1471px;
` 
const Description = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 100vh ;
    border-right: 1px solid ${Theme.colors.lines};

`
const DescriptionText = styled.div`
    padding: 17px 30px 0 100px;
    border-top: 1px solid ${Theme.colors.lines};
    p{
        color: ${Theme.colors.secondary.grey};
        font-size: ${Theme.font.size.body};
        line-height: 150%;
    }

`

const Snipets = styled.div`
    width: 50%;
    border-right: 1px solid ${Theme.colors.lines};
`
const Title = styled.h3`
    font-size: ${Theme.font.size.labes};
    color: ${Theme.colors.secondary.grey};
    border-right: 1px solid ${Theme.colors.lines};
    max-width: 218px;
    padding: 10px 10px;
    font-weight: 400;

`