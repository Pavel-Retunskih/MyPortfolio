import { Section } from "../../components/section/Section";
import { Container } from "../../components/container/Container";
import { FlexWrapper } from './../../components/flexwrapper/FlexWrapper';
import styled from "styled-components";
import { Theme } from "../../styles/Theme";
import { SnakeGame } from "./snakeGame/SnakeGame";




type HomePropsType = {
    greeting: string
    headLine: string
    mainTitle: string
    link: string
}

export function Home(props:HomePropsType){
    return (
        <Section>
            <Container>
                <FlexWrapper direction="row" justify="space-around" align="center" wrap="wrap"
                    style={{padding:"180px 0"}}>
                        <FlexWrapper direction="column" align="flex-start">
                            <MainTextGreeting>{props.greeting}</MainTextGreeting>
                            <HeadlineText>{props.headLine}</HeadlineText>
                            <MainTitle>&lt; {props.mainTitle}</MainTitle>
                            <MainComentsText>// complete the game to continue</MainComentsText>
                            <MainComentsText>// you can also see it on my Github page</MainComentsText>
                            <Text color = "#E5E9F0" size = {Theme.font.size.labes}>
                            <ColorText color={Theme.colors.secondary.blue} size = {Theme.font.size.labes}>const githubLink</ColorText> = <a href={props.link}><ColorText color={Theme.colors.accent.pink} size = {Theme.font.size.labes}>“${props.link}”</ColorText></a>
                            </Text>
                        </FlexWrapper>
                        <SnakeGame/>
                </FlexWrapper>
                
            </Container>
        </Section>
    )
}

const HeadlineText = styled.span`
    font-family:${Theme.font.family};
    font-size: ${Theme.font.size.headline};
    color: #E5E9F0;
    white-space: nowrap;
    margin-top: 20px;
    margin-bottom: 25px;
`
const MainTitle = styled.h1`
    font-family:${Theme.font.family};
    font-size: ${Theme.font.size.subHeadline};
    color: ${Theme.colors.secondary.blue};
    margin-bottom: 90px;
    white-space: nowrap;
`
const MainTextGreeting = styled.span`
    font-family:${Theme.font.family};
    font-size: ${Theme.font.size.body};
    color: #E5E9F0;
`
const MainComentsText = styled.span`
    font-family:${Theme.font.family};
    font-size: ${Theme.font.size.labes};
    color: ${Theme.colors.secondary.grey};
    margin-bottom: 15px;
`
type TextPropsType = {
    color: string
    size: string
}
const ColorText = styled.span<TextPropsType>`
    display: inline-block;
    color:${props=>props.color};
    font-size:${props=>props.size};
`
const Text = styled.p<TextPropsType>`
    color:${props=>props.color};
    font-size:${props=>props.size};
    line-height: 1.2;
`

