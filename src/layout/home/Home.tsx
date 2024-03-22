import { Outlet } from "react-router-dom";
import { Section } from "../../components/section/Section";
import { Container } from "../../components/container/Container";

export function Home(){
    return (
        <Section>
            <Container>
                <p>Home</p>
            </Container>
        </Section>
    )
}

