import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const colores = {
  borde: '#0075FF',
  error: '#bb2929',
  exito: '#2ecc70',
};

const Formul = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

const Contenedor = styled.div`
  font-family: 'Space Grotesk', sans-serif;
  max-width: 1000px;
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
  padding: 25px 30px;
  border-radius: 5px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 1100px) {
    width: 80%;
  }
  @media (max-width: 600px) {
    width: 80%;
    padding-top: 50px;
    margin-top:50px;
  }
`;

const ContenedorLabel = styled.div`
  padding: 0px 15px 0px 15px;

  @media (max-width: 800px) {
    grid-column: 1/2;
  }
`;

const Label = styled.form`
  color : rgba(255,255,255,0.7) ;
  display: block;
  font-weight: 700;
  font-size: 19px;
  padding: 10px;
  min-height 40px;
  cursor : pointer; 

  ${(props) =>
    props.valido === 'false' &&
    css`
      color: ${colores.error};
    `}
`;

const GrupoInput = styled.div`
  position: relative;
  z-index: 90;
`;

const Input = styled.input`
  font-family: 'Space Grotesk', sans-serif;
  height: 45px;
  width: 100%;
  outline: none;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  border: 3px solid transparent;
  padding-left: 15px;
  font-size: 18px;
  border-bottom-width: 2px;
  transition: all 0.3s ease;
  &:focus {
    border: 3px solid ${colores.borde};
    outline: none;
    box-shadow: 3px 0px 30px rgba(163, 163, 163, 0.4);
  }

  ${(props) =>
    props.valido === 'true' &&
    css`
      border: 3px solid transparent;
    `}

  ${(props) =>
    props.valido === 'false' &&
    css`
      border: 3px solid ${colores.error};
    `}
`;

const LeyendaError = styled.p`
  font-size: 16px;
  margin-bottom: 0;
  color: ${colores.error};
  display: none;
  ${(props) =>
    props.valido === 'true' &&
    css`
      display: none;
    `}

  ${(props) =>
    props.valido === 'false' &&
    css`
      display: block;
    `}
`;

const IconoValidacion = styled(FontAwesomeIcon)`
  position: absolute;
  right: 10px;
  bottom: 14px;
  z-index: 100;
  font-size: 16px;
  opacity: 0;

  ${(props) =>
    props.valido === 'false' &&
    css`
      opacity: 1;
      color: ${colores.error};
    `}

  ${(props) =>
    props.valido === 'true' &&
    css`
      opacity: 1;
      color: ${colores.exito};
    `}
`;

const ContenedorBoton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-column: span 2;
`;

const Boton = styled.button`
  border: 0;
  background-image: linear-gradient(150deg, #9500ff, #09f, #00ddff);
  border-radius: 8px;
  color: #fff;
  display: flex;
  font-size: 18px;
  padding: 4px;
  margin: auto;
  cursor: pointer;
  transition: 0.3s;
  margin-top: 20px;
  &:hover span {
    background: none;
  }
  &:active {
    transform: scale(0.9);
  }
  @media (max-width: 480px) {
    margin-top: 10px;
    font-size: 16px;
    padding: 2.5px
  }
`;

const Span = styled.span`
  background-color: #111;
  padding: 16px 24px;
  border-radius: 6px;
  transition: 0.3s;
`;

const MensajeExito = styled.div`
  height: 45px;
  line-height: 45px;
  background: ${colores.exito};
  padding: 0px 15px;
  border-radius: 3px;
  grid-column: span 2;
  margin-top: 20px;
  margin-left: 20px;

  p {
    margin: 0;
  }

  @media (max-width: 480px) {
    line-height: 25px;
    text-align: center;
    padding: 2px;
  }
`;

const MensajeError = styled.div`
  height: 45px;
  line-height: 45px;
  background: ${colores.error};
  padding: 0px 15px;
  border-radius: 3px;
  grid-column: span 2;
  margin-left: 20px;
  p {
    margin: 0;
  }

  @media (max-width: 800px) {
    grid-column: 1/2;
  }

  @media (max-width: 600px) {
    line-height: 25px;
    text-align: center;
  }

  @media (max-width: 350px) {
    line-height: 15px;
  }
`;

export {
  Formul,
  Contenedor,
  ContenedorLabel,
  Label,
  GrupoInput,
  Input,
  LeyendaError,
  IconoValidacion,
  ContenedorBoton,
  Boton,
  Span,
  MensajeExito,
  MensajeError,
};
