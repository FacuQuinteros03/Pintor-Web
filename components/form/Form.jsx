'use client';
import React, { useState } from 'react';
import styles from '../../app/styles/contact.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Formul,
  Contenedor,
  ContenedorBoton,
  Boton,
  Span,
  MensajeExito,
  MensajeError,
} from '@/app/elements/Formularios';
import {
  faExclamationTriangle,
  faCircleCheck,
} from '@fortawesome/free-solid-svg-icons';
import Input from '../Input';

const Formulario = () => {
  const [nombre, cambiarNombre] = useState({ campo: '', valido: null });
  const [email, cambiarEmail] = useState({ campo: '', valido: null });
  const [telefono, cambiarTelefono] = useState({ campo: '', valido: null });
  const [tema, cambiarTema] = useState({ campo: '', valido: null });
  const [formularioValido, cambiarFormularioValido] = useState(null);

  const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/, // 7 a 14 numeros.
    tema: /^[\w\d\sáéíóúüñÁÉÍÓÚÜÑ¡¿,!.:;()-_@#%&+={}[\]|\\/\"\'<>\$^*?]{1,300}$/, //permite todo, menos que estee vacio
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      nombre.valido === 'true' &&
      email.valido === 'true' &&
      telefono.valido === 'true' &&
      tema.valido === 'true'
    ) {
      cambiarFormularioValido(true);
      cambiarNombre({ campo: '', valido: null });
      cambiarEmail({ campo: '', valido: null });
      cambiarTelefono({ campo: '', valido: null });
      cambiarTema({ campo: '', valido: null });
    } else {
      cambiarFormularioValido(false);
    }
  };

  return (
    <section
      style={{
        backgroundImage: 'url("/images/pintura.jpg")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
      }}
    >
      <Contenedor>
        <h2 className={styles.titulo}>Contacto</h2>
        <Formul action="" onSubmit={onSubmit}>
          <Input
            estado={nombre}
            cambiarEstado={cambiarNombre}
            tipo="text"
            label="Nombre"
            placeholder="Jorge Ruiz"
            name="user_name"
            leyendaError="El nombre solo puede contener letras y espacios y no puede estar vacio"
            expresionRegular={expresiones.nombre}
          />

          <Input
            estado={email}
            cambiarEstado={cambiarEmail}
            tipo="email"
            label="Correo electronico"
            placeholder="correo@correo.com"
            name="user_email"
            leyendaError="Por favor ingrese un correo valido"
            expresionRegular={expresiones.email}
          />

          <Input
            estado={telefono}
            cambiarEstado={cambiarTelefono}
            tipo="text"
            label="Telefono"
            placeholder="3416178592"
            name="telefono"
            leyendaError="El telefono debe contener de 7 a 14 números"
            expresionRegular={expresiones.telefono}
          />

          <Input
            estado={tema}
            cambiarEstado={cambiarTema}
            tipo="text"
            label="Tema"
            placeholder="Ingresa tu consulta"
            name="message"
            leyendaError="El tema no puede estar vacio"
            expresionRegular={expresiones.tema}
          />

          {formularioValido === false && (
            <MensajeError>
              <p>
                <FontAwesomeIcon icon={faExclamationTriangle} />
                <b> Error:</b> Por favor rellena el formulario correctamente
              </p>
            </MensajeError>
          )}
          <ContenedorBoton>
            <Boton type="submit">
              <Span>ENVIAR</Span>
            </Boton>

            {formularioValido === true && (
              <MensajeExito>
                <p>
                  <FontAwesomeIcon icon={faCircleCheck} />
                  <b>¡Exito!</b> Formulario enviado correctamente
                </p>
              </MensajeExito>
            )}
          </ContenedorBoton>
        </Formul>
      </Contenedor>
    </section>
  );
};

export default Formulario;
