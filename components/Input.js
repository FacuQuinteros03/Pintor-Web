import React from 'react';
import {
  Input,
  ContenedorLabel,
  Label,
  GrupoInput,
  IconoValidacion,
  LeyendaError,
} from './../app/elements/Formularios';
import {
  faCircleCheck,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';

const ComponenteInput = ({
  estado,
  cambiarEstado,
  tipo,
  label,
  placeholder,
  name,
  nombre,
  leyendaError,
  expresionRegular,
}) => {
  const onChange = (e) => {
    cambiarEstado({ ...estado, campo: e.target.value });
  };

  const validacion = () => {
    if (expresionRegular) {
      if (expresionRegular.test(estado.campo)) {
        cambiarEstado({ ...estado, valido: 'true' });
      } else {
        cambiarEstado({ ...estado, valido: 'false' });
      }
    }
  };

  return (
    <ContenedorLabel>
      <Label htmlFor={name} valido={estado.valido}>
        {label}
      </Label>
      <GrupoInput>
        <Input
          type={tipo}
          placeholder={placeholder}
          id={name}
          name={nombre}
          value={estado.campo}
          onChange={onChange}
          onKeyUp={validacion}
          onBlur={validacion}
          valido={estado.valido}
        />
        <IconoValidacion
          icon={estado.valido === 'true' ? faCircleCheck : faTimesCircle}
          valido={estado.valido}
        />
      </GrupoInput>
      <LeyendaError valido={estado.valido}>{leyendaError}</LeyendaError>
    </ContenedorLabel>
  );
};

export default ComponenteInput;
