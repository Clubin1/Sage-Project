import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useUserContext } from "../context/user_context";

const Hero = () => {
  const { myUser } = useUserContext();

  return (
    <Wrapper className="section-center">
      <article className="content">
        {myUser && (
          <h1 style={{ color: "#ab7a5f", fontSize: "2.5rem" }}>
            Welcome,{" "}
            <span
              style={{
                backgroundImage:
                  "linear-gradient(transparent 0%, transparent -76%, #fbf2f2 62%, #ffd2d2 105%, transparent 90%, transparent)",
              }}
            >
              {myUser?.name}
            </span>
            !
          </h1>
        )}
        <h1>
          House Sage <br />
          Cool designs
        </h1>
        <p>
          Pick any merch from our large selection. Get anything ranging from clothes to nametag holders.
        </p>
        <Link to="/products" className="btn hero-btn">
          shop now
        </Link>
      </article>
      <article className="img-container">
        <img src="https://i.pinimg.com/originals/bb/e9/f3/bbe9f30c8b31948e3282fba93aa43ddd.jpg" alt="nice table" className="main-img" />
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  .img-container {
    display: none;
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: 550px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }
    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
      transform: translateX(-50%);
      border-radius: var(--radius);
    }
    .img-container::before {
      content: "";
      position: absolute;
      width: 10%;
      height: 80%;
      background: var(--clr-primary-9);
      bottom: 0%;
      left: -8%;
      border-radius: var(--radius);
    }
  }
`;

export default Hero;
