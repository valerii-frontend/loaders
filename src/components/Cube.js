import styled from "styled-components";

const Cube = styled.div`
  --size: ${({ size }) => (size === "sm" ? 50 : size === "md" ? 100 : size === "lg" ? 150 : 100)}px;
  --speed: ${({ speed }) => (speed >= 1500 && speed <= 5000 ? speed : 2500)}ms;
  --color: ${({ color }) => color};
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
    background: var(--color);
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
export default Cube;
