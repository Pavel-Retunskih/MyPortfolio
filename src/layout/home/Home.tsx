import { Outlet } from "react-router-dom";
import { Section } from "../../components/section/Section";
import { Container } from "../../components/container/Container";
import { FlexWrapper } from './../../components/flexwrapper/FlexWrapper';
import styled from "styled-components";
import { Theme } from "../../styles/Theme";


export function Home(){
    return (
        <Section>
            <Container>
                
                <FlexWrapper direction="column">
                    <MainText>Hi all. I am</MainText>
                    <HeadlineText>Micheal Weaver</HeadlineText>
                    <MainTitle>&lt; Front-end developer</MainTitle>
                    <MainText>// complete the game to continue</MainText>
                    <MainText>// you can also see it on my Github page</MainText>
                    <ColorText color={Theme.colors.secondary.blue} size = {Theme.font.size.labes}>const githubLink</ColorText> = <ColorText color={Theme.colors.accent.pink} size = {Theme.font.size.labes}>“https://github.com/example/url”</ColorText>
                </FlexWrapper>
            </Container>
        </Section>
    )
}

const HeadlineText = styled.span`
    font-family:${Theme.font.family};
    font-size: ${Theme.font.size.headline};
    color: #E5E9F0;
`
const MainTitle = styled.h1`
    font-family:${Theme.font.family};
    font-size: ${Theme.font.size.subHeadline};
    color: ${Theme.colors.secondary.blue};
`
const MainTextGreeting = styled.span`
    font-family:${Theme.font.family};
    font-size: ${Theme.font.size.body};
    color: #E5E9F0;
`
const MainText = styled.span`
    font-family:${Theme.font.family};
    font-size: ${Theme.font.size.labes};
    color: ${Theme.colors.secondary.grey};
`


type ColorTextPropsType = {
    color: string
    size: string
}
const ColorText = styled.span<ColorTextPropsType>`
    display: inline-block;
    color:${props=>props.color};
    font-size:${props=>props.size};
`
