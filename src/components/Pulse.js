import styled from "styled-components";

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

export default function Pulse({ color, _width, size, speed }) {
  return <PulseStyled color={color} _width={_width} size={size} speed={speed} />;
}
