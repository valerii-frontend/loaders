import styled from "styled-components";

const WhirlpoolStyled = styled.div`
  --size: ${({ size }) => (size === "sm" ? 50 : size === "md" ? 100 : size === "lg" ? 150 : 100)}px;
  --speed: ${({ speed }) => (speed >= 1500 && speed <= 3500 ? speed : 1500)}ms;
  --color: ${({ color }) => color};
  --color2: ${({ color, color2 }) => color2 ?? color};
  --color3: ${({ color, color3 }) => color3 ?? color};
  width: var(--size);
  height: var(--size);
  position: relative;
  span:first-child {
    position: absolute;
    width: 100%;
    height: 100%;
    border-width: calc(var(--size) / 10);
    border-style: solid;
    border-color: var(--color, white) var(--color, white) transparent transparent;
    border-radius: 50%;
    animation: whirlpool var(--speed) linear infinite;
    position: absolute;
    top: 0;
    left: 0;
  }
  span:nth-child(2) {
    position: absolute;
    width: 70%;
    height: 70%;
    top: calc(50% - var(--size) * 0.35);
    left: calc(50% - var(--size) * 0.35);
    border-width: calc(var(--size) / 10 - 2px);
    border-style: solid;
    border-color: var(--color2) var(--color2) transparent transparent;
    border-radius: 50%;
    animation: whirlpool calc(var(--speed) / 2) linear infinite;
  }
  span:last-child {
    content: "";
    position: absolute;
    width: 40%;
    height: 40%;
    top: calc(50% - var(--size) * 0.2);
    left: calc(50% - var(--size) * 0.2);
    border-width: calc(var(--size) / 15);
    border-style: solid;
    border-color: transparent transparent var(--color3) var(--color3);
    border-radius: 50%;
    animation: whirlpool calc(var(--speed) / 2.1) linear infinite reverse;
  }
  @keyframes whirlpool {
    0 {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default function Whirlpool({ size, color, color2, color3, speed }) {
  return (
    <WhirlpoolStyled size={size} color={color} color2={color2} color3={color3} speed={speed}>
      <span></span>
      <span></span>
      <span></span>
    </WhirlpoolStyled>
  );
}
