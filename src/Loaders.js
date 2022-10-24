import styled from "styled-components";

const BallanceStyled = styled.div`
  --size: ${({ size }) => (size === "sm" ? 50 : size === "md" ? 75 : size === "lg" ? 100 : 50)}px;
  --speed: ${({ speed }) => (speed >= 500 && speed <= 3000 ? speed : 1200)}ms;
  --color: ${({ color }) => color};
  width: var(--size);
  height: var(--size);
  &::after {
    content: "";
    height: 0;
    width: 0;
    margin: 0;
    display: block;
    border-width: calc(var(--size) / 2);
    border-style: solid;
    border-radius: 50%;
    border-color: var(--color, white) transparent;
    animation: ballance var(--speed) ease-in-out infinite;
    @keyframes ballance {
      0% {
        transform: rotate(0deg);
      }
      50% {
        transform: rotate(180deg);
      }
      100% {
        transform: rotate(-180deg);
      }
    }
  }
`;
const BarsStyled = styled.div`
  --size: ${({ size }) => (size === "sm" ? 50 : size === "md" ? 100 : size === "lg" ? 150 : 100)}px;
  --width: ${({ _width }) => (_width >= 5 && _width <= 15 ? _width : 5)}px;
  --color: ${({ color }) => color};
  --speed: ${({ speed }) => (speed >= 500 && speed <= 2000 ? speed : 1000)}ms;
  display: flex;
  flex-direction: row;
  height: var(--size);
  min-width: var(--size);
  justify-content: center;
  align-items: center;
  @keyframes bars {
    0%,
    80%,
    100% {
      height: calc(var(--size) / 3);
    }
    40% {
      height: calc(var(--size) * 1.2);
    }
  }
  & span {
    width: var(--width);
    background-color: var(--color, white);
    margin-right: var(--width);
    animation: bars var(--speed) ease-in-out infinite;
    --delay: 0.15s;
    &:nth-child(1) {
      animation-delay: var(--delay);
    }
    &:nth-child(2) {
      animation-delay: calc(var(--delay) * 2);
    }
    &:nth-child(3) {
      animation-delay: calc(var(--delay) * 3);
    }
    &:nth-child(4) {
      animation-delay: calc(var(--delay) * 4);
    }
    &:nth-child(5) {
      animation-delay: calc(var(--delay) * 5);
    }
    &:nth-child(6) {
      animation-delay: calc(var(--delay) * 6);
    }
    &:nth-child(7) {
      animation-delay: calc(var(--delay) * 7);
    }
  }
`;
const CardStyled = styled.div`
  --size: ${({ size }) => (size === "sm" ? 50 : size === "md" ? 75 : size === "lg" ? 100 : 50)}px;
  --speed: ${({ speed }) => (speed >= 500 && speed <= 3000 ? speed : 1200)}ms;
  --color: ${({ color }) => color};
  --color2: ${({ color2 }) => color2};
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: calc(var(--size) + 25px);
  & span {
    width: var(--size);
    height: var(--size);
    background-color: var(--color, white);
    animation: rotate var(--speed) ease-in-out infinite;
  }
  @keyframes rotate {
    0% {
      transform: perspective(100px) rotateY(0deg);
    }
    50% {
      transform: perspective(100px) rotateX(-180deg) rotateY(0deg);
      background-color: var(--color2, var(--color));
    }
    100% {
      transform: perspective(100px) rotateX(-180deg) rotateY(-180deg);
    }
  }
`;
const CircleStyled = styled.div`
  --size: ${({ size }) => (size === "sm" ? 50 : size === "md" ? 100 : size === "lg" ? 150 : 100)}px;
  --speed: ${({ speed }) => (speed >= 500 && speed <= 3000 ? speed : 1100)}ms;
  --color: ${({ color }) => color};
  height: var(--size);
  width: var(--size);
  border-top: 3px solid var(--color, white);
  border-radius: 100%;
  animation: spin var(--speed) linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
const CubeStyled = styled.div`
  --size: ${({ size }) => (size === "sm" ? 50 : size === "md" ? 100 : size === "lg" ? 150 : 100)}px;
  --speed: ${({ speed }) => (speed >= 1500 && speed <= 5000 ? speed : 2500)}ms;
  --color: ${({ color }) => color};
  --color2: ${({ color2 }) => color2};
  --border: calc(var(--size) / 15);
  --height: calc(var(--size) - var(--border) - var(--border) - 4px);
  height: var(--size);
  width: var(--size);
  border: var(--border) solid var(--color, white);
  animation: CubeRotate var(--speed) linear infinite;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    width: calc(var(--size) - var(--border) - var(--border) - 4px);
    height: 0px;
    background: var(--color2,var(--color));
    top: 2px;
    left: 2px;
    animation: LoadCube var(--speed) linear infinite;
  }
  @keyframes CubeRotate {
    0% {
      transform: rotate(0deg);
    }
    50%,100% {
      transform: rotate(180deg);
    }
  }
    @keyframes LoadCube {
      from,50% {
        height: 0px;
      }
       80%,100% {
        height: var(--height);
      }
    }
  }
`;
const DotsStyled = styled.div`
  --size: ${({ size }) => (size === "sm" ? 15 : size === "md" ? 30 : size === "lg" ? 45 : 30)}px;
  --speed: ${({ speed }) => (speed >= 500 && speed <= 3000 ? speed : 1500)}ms;
  --color: ${({ color }) => color};
  display: flex;
  align-items: center;
  gap: calc(var(--size) / 3);
  height: 100px;
  --delay: 0.15s;
  span {
    height: var(--size);
    width: var(--size);
    margin-bottom: calc(var(--size) * 2.33);
    border-radius: 50%;
    animation: balls var(--speed) ease-in-out infinite;
    &:nth-child(1) {
      animation-delay: var(--delay);
    }
    &:nth-child(2) {
      animation-delay: calc(var(--delay) * 2);
    }
    &:nth-child(3) {
      animation-delay: calc(var(--delay) * 3);
    }
    &:nth-child(4) {
      animation-delay: calc(var(--delay) * 4);
    }
    &:nth-child(5) {
      animation-delay: calc(var(--delay) * 5);
    }
  }
  @keyframes balls {
    0%,
    80%,
    100% {
      box-shadow: 0 calc(var(--size) * 1.33) 0 0px var(--color, white);
    }
    40% {
      box-shadow: 0 calc(var(--size) * 1.33) 0 calc(var(--size) * -0.67) var(--color, white);
    }
  }
`;
const RoundStyled = styled.div`
  --size: ${({ size }) => (size === "sm" ? 50 : size === "md" ? 100 : size === "lg" ? 150 : 100)}px;
  --border-width: ${({ _width }) => (_width >= 1 && _width <= 50 ? _width : 5)}px;
  --speed: ${({ speed }) => (speed >= 500 && speed <= 3000 ? speed : 1200)}ms;
  --color: ${({ color }) => color};
  height: var(--size);
  width: var(--size);
  position: relative;
  & span {
    display: block;
    position: absolute;
    height: 100%;
    width: 100%;
    border-width: var(--border-width);
    border-style: solid;
    border-radius: 100%;
    border-color: var(--color, white) transparent transparent transparent;
    animation: spin var(--speed) cubic-bezier(0.5, 0, 0.5, 1) infinite;
  }
  & span:nth-child(1) {
    animation-delay: calc(-1 * var(--speed) / 3 + 50);
  }
  & span:nth-child(2) {
    animation-delay: calc(-1 * var(--speed) / 4);
  }
  & span:nth-child(3) {
    animation-delay: calc(-1 * var(--speed) / 8);
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
const PulseStyled = styled.div`
  --size: ${({ size }) => (size === "sm" ? 50 : size === "md" ? 100 : size === "lg" ? 150 : 100)}px;
  --border-width: ${({ _width }) => (_width >= 1 && _width <= 20 ? _width : 5)}px;
  --speed: ${({ speed }) => (speed >= 500 && speed <= 3000 ? speed : 1200)}ms;
  --color: ${({ color }) => color};
  height: var(--size);
  width: var(--size);
  position: relative;
  border-width: var(--border-width);
  border-style: solid;
  border-radius: 50%;
  border-color: var(--color, white);
  animation: pulse var(--speed) infinite;
  @keyframes pulse {
    0% {
      transform: scale(0);
      opacity: 1;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: scale(1);
      opacity: 0;
    }
  }
`;
const RingStyled = styled.div`
  --size: ${({ size }) => (size === "sm" ? 50 : size === "md" ? 100 : size === "lg" ? 150 : 100)}px;
  --border-width: ${({ _width }) => (_width >= 2 && _width <= 20 ? _width : 7)}px;
  --speed: ${({ speed }) => (speed >= 500 && speed <= 3000 ? speed : 1500)}ms;
  --color: ${({ color }) => color};
  width: var(--size);
  height: var(--size);
  border: var(--border-width) dashed var(--color, white);
  border-radius: 50%;
  @keyframes ring {
    0 {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  animation: ring var(--speed) 300ms cubic-bezier(0.15, 1.2, 0.45, 0.65) infinite;
`;
const ScaleStyled = styled.div`
  --size: ${({ size }) => (size === "sm" ? 50 : size === "md" ? 75 : size === "lg" ? 100 : 50)}px;
  --speed: ${({ speed }) => (speed >= 500 && speed <= 4000 ? speed : 2000)}ms;
  --color: ${({ color }) => color};
  --color2: ${({ color2 }) => color2};
  width: var(--size);
  height: var(--size);
  animation: rotate2 var(--speed) linear infinite;
  &::after,
  &::before {
    content: "";
    display: block;
    width: 60%;
    height: 60%;
    background-color: var(--color, white);
    border-radius: 100%;
    animation: scale2 var(--speed) ease-in-out infinite;
  }
  &::before {
    animation-delay: -1s;
    background-color: var(--color2, var(--color));
  }

  @keyframes rotate2 {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes scale2 {
    0%,
    100% {
      transform: scale(0);
    }
    50% {
      transform: scale(1);
    }
  }
`;
const TextStyled = styled.div`
  --size: ${({ size }) => (size >= 12 && size <= 100 ? size : 30)}px;
  --speed: ${({ speed }) => (speed >= 500 && speed <= 6000 ? speed : 1500)}ms;
  --color: ${({ color }) => color};
  --pulse: ${({ pulse }) => (pulse === "true" ? "textJump calc(var(--speed) / 2) linear infinite alternate" : "none")};
  text-transform: ${({ uppercase }) => (uppercase === "true" ? "uppercase" : "normal")};
  letter-spacing: 2px;
  line-height: 100%;
  font-weight: 700;
  animation: var(--pulse);
  display: flex;
  align-items: center;
  justify-content: center;
  & p {
    font-family: monospace;
    font-size: var(--size);
    color: rgba(255, 255, 255, 0.2);
    display: inline-flex;
    text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    position: relative;
    &:after {
      content: "${({ text }) => text ?? "Loading"}";
      position: absolute;
      font: inherit;
      top: 0;
      left: 0;
      color: var(--color, green);
      text-shadow: 1px 0 0 black, 0 1px 0 black, -1px 0 0 black, 0 -1px 0 black;
      animation: textFill var(--speed) linear infinite;
      z-index: 1;
    }
  }
  @keyframes textJump {
    from {
      transform: scale(1);
    }
    100% {
      transform: scale(1.1);
    }
  }
  @keyframes textFill {
    from {
      clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
    }
    80%,
    100% {
      clip-path: polygon(100% 0, 0 0, 0 100%, 100% 100%);
    }
  }
`;
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

export const Bars = ({ color, _width, size, count, speed }) => {
  let childs = [..."s".repeat(count >= 3 && count <= 7 ? count : 3)];
  return (
    <BarsStyled color={color} _width={_width} size={size} speed={speed}>
      {childs.map((s, i) => (
        <span key={i}></span>
      ))}
    </BarsStyled>
  );
};
export const Ballance = (props) => {
  return <BallanceStyled {...props} />;
};
export const Card = ({ size, speed, color, color2 }) => {
  return (
    <CardStyled size={size} speed={speed} color={color} color2={color2}>
      <span></span>
    </CardStyled>
  );
};
export const Circle = ({ size, speed, color }) => {
  return <CircleStyled size={size} speed={speed} color={color} />;
};
export const Cube = ({ size, speed, color, color2 }) => {
  return <CubeStyled size={size} speed={speed} color={color} color2={color2} />;
};
export const Dots = ({ size, speed, color, count }) => {
  let childs = [..."s".repeat(count >= 2 && count <= 5 ? count : 3)];
  return (
    <DotsStyled size={size} speed={speed} color={color}>
      {childs.map((s, i) => (
        <span key={i}></span>
      ))}
    </DotsStyled>
  );
};
export const Round = ({ color, _width, size, speed }) => {
  return (
    <RoundStyled color={color} _width={_width} size={size} speed={speed}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </RoundStyled>
  );
};
export const Pulse = ({ color, _width, size, speed }) => {
  return <PulseStyled color={color} _width={_width} size={size} speed={speed} />;
};
export const Ring = ({ size, _width, color, speed }) => {
  return <RingStyled size={size} _width={_width} color={color} speed={speed} />;
};
export const Scale = ({ size, _width, color, color2, speed }) => {
  return <ScaleStyled size={size} _width={_width} color={color} color2={color2} speed={speed} />;
};
export const Text = ({ color, size, speed, text, uppercase, pulse }) => {
  return (
    <TextStyled color={color} size={size} speed={speed} text={text} uppercase={uppercase} pulse={pulse}>
      <p>{text ?? "Loading"}</p>
    </TextStyled>
  );
};
export const Whirlpool = ({ size, color, color2, color3, speed }) => {
  return (
    <WhirlpoolStyled size={size} color={color} color2={color2} color3={color3} speed={speed}>
      <span></span>
      <span></span>
      <span></span>
    </WhirlpoolStyled>
  );
};
