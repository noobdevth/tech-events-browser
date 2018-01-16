import styled, {keyframes} from 'react-emotion'

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(15px);
  }

  40% {
    opacity: 1;
  }

  100% {
    transform: translateY(0);
  }
`

const Card = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  flex: 0 1 100%;

  animation: ${fadeIn} 0.8s ease-in-out;
  transition: all 1s cubic-bezier(0.22, 0.61, 0.36, 1);

  color: #555;
  background: hsla(0, 0%, 100%, 0.9);
  border-radius: 6px;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);

  width: 100%;
  margin-bottom: 1em;

  @media screen and (max-width: 800px) {
    flex-basis: 100%;
  }
`

export default Card
