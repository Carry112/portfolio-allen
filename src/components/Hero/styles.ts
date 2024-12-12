import styled from "styled-components";

export const Container = styled.section`
  .discord-tooltip {
    position: relative;
    display: inline-block;
  }

  .discord-tooltip .discord-tooltip-text {
    display: none;
    width: 130px;
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 5px 0;
    border-radius: 6px;
    position: absolute;
    z-index: 1;
    bottom: 35px;
    left: 50%;
    margin-left: -60px;
    opacity: 0;
    transition: opacity 0.3s, transform 0.3s;
    transform: translateY(10px);
    font-size: 15px;
  }

  .discord-tooltip .discord-tooltip-text::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #333 transparent transparent transparent;
  }

  .discord-tooltip:hover .discord-tooltip-text {
    display: block;
    opacity: 1;
    transform: translateY(0);
  }

  .discord-tooltip-text {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    animation: fadeIn 0.5s;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  padding-top: 15%;
  display: flex;
  justify-content: space-between;
  gap: 8rem;
  background: rgba(0, 0, 0, 0);

  .hero-text {
    & > p {
      font-size: 1.8rem;
    }

    h1 {
      font-size: 7rem;
    }

    h3 {
      color: var(--green);
      margin: 1rem 0;
    }

    p.small-resume {
      margin-bottom: 5rem;
    }
  }

  .social-media {
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding-top: 5rem;
    padding-left: 1rem;

    img,
    span {
      font-size: 3rem;
      width: 3.5rem;
    }
  }

  .button {
    margin-top: 5rem;
    padding: 1.4rem 6rem;
  }

  .hero-image {
    img {
      max-width: 500px;
    }
  }

  @media (max-width: 960px) {
    display: block;
    margin-top: 15%;
    .hero-text {
      h1 {
        font-size: 5rem;
      }
    }

    .hero-image {
      display: none;
    }
  }

  @media (max-width: 768px) {
    .hero-image {
      img {
        max-width: 80%;
      }
    }
  }

  @media (max-width: 600px) {
    margin-top: 35%;
  }

  @media (max-width: 480px) {
    margin-top: 45%;
  }

  @media (max-width: 414px) {
    .hero-image {
      img {
        max-width: 90%;
      }
    }
  }
`;