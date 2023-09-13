'use client';
import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
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
  const [nombre, cambiarNombre] = useState({ campo: '', valido: '' });
  const [email, cambiarEmail] = useState({ campo: '', valido: '' });
  const [telefono, cambiarTelefono] = useState({ campo: '', valido: '' });
  const [tema, cambiarTema] = useState({ campo: '', valido: '' });
  const [formularioValido, cambiarFormularioValido] = useState('');

  const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/, // 7 a 14 numeros.
    tema: /^[\w\d\sáéíóúüñÁÉÍÓÚÜÑ¡¿,!.:;()-_@#%&+={}[\]|\\/\"\'<>\$^*?]{1,300}$/, //permite todo, menos que estee vacio
  };

  const form = useRef();
  const sendEmail = (e) => {
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
      emailjs
        .sendForm(
          'service_eb38jpf',
          'template_9tgb4s9',
          form.current,
          '0zjeuTUxqGa8pxpMm'
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
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
        height: '120vh',
      }}
    >
      <Contenedor>
        <h2 className={styles.titulo}>Contacto</h2>
        <Formul action="" ref={form} onSubmit={sendEmail}>
          <Input
            estado={nombre}
            cambiarEstado={cambiarNombre}
            tipo="text"
            label="Nombre"
            placeholder="Jorge Ruiz"
            name="user_name"
            nombre="user_name"
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
            nombre="user_email"
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
            nombre="telefono"
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
            nombre="message"
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
            <Boton type="submit" value="Send">
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
