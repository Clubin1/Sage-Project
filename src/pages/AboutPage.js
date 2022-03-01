import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
const AboutPage = () => {
    return (
        <main>
            <PageHero title="about" />
            <Wrapper className="page section section-center">
                <img src="https://cdn.discordapp.com/attachments/946234053290500146/946972351311015958/Sage_meditating_forest.png" alt="nice desk" />
                <article>
                    <div className="title">
                        <h2>House Sage</h2>
                        <div className="underline"></div>
                    </div>
                    <p>
                        House sage is the home to many gentle giants. I mean, I
                        think boop is at least 6 feet, T'challa nearly stacked
                        with gains but wouldn't hurt a fly. Joey always lending
                        a helping hand coding for hours. Etc. - Baca
                    </p>
                </article>
            </Wrapper>
        </main>
    );
};
const Wrapper = styled.section`
    display: grid;
    gap: 4rem;
    img {
        width: 100%;
        display: block;
        border-radius: var(--radius);
        height: 500px;
        object-fit: cover;
    }
    p {
        line-height: 2;
        max-width: 45em;
        margin: 0 auto;
        margin-top: 2rem;
        color: var(--clr-grey-5);
    }
    .title {
        text-align: left;
    }
    .underline {
        margin-left: 0;
    }
    @media (min-width: 992px) {
        grid-template-columns: 1fr 1fr;
    }
`;
export default AboutPage;
