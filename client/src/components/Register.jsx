import axios from "axios";
import { useFormik } from "formik";
import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./style/formulario.css";
import Swal from "sweetalert2";
import * as Yup from "yup";

const Register = () => {
  const formRef = useRef(null);

  const validationSchema = Yup.object({
    nombre: Yup.string().min(3, "El nombre debe tener al menos 3 letras").required("El nombre es requerido"),
    apellido: Yup.string().min(3, "El apellido debe tener al menos 3 letras").required("El apellido es requerido"),
    email: Yup.string().email("El correo electrónico no es válido").required("El correo electrónico es requerido"),
    documentoIdentidad: Yup.string().min(7,"El documento debe tener al menos 7 numeros").required("El Documento de Identidad es requerido"),
  })

  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const { handleSubmit, handleChange, errors} = useFormik({
    initialValues: {
      nombre:"",
      apellido:"",
      email: "",
      documentoIdentidad: "",
      telefono: "",
    },validationSchema,
    onSubmit: (values, ) => {
      console.log(values);
      axios.post("http://localhost:8000/api/usuario", values, { withCredentials: true })
        .then((resp) => {
          console.log(resp);
          if (resp.data === 200) {
            console.log(resp);
          } else {
            navigate("/");
            Swal.fire({
              icon: 'success',
              title: 'Te registraste con exito!',
              showConfirmButton: false,
              timer: 2000
            });
            formRef.current.reset()
          }
        })
        .catch((error) => {
          if (error.response && error.response.status === 400) {
            setErrorMessage("* Ya existe un usuario registrado con este correo.");
          } else {
            console.error(error);
          }
        });            

    },
  });
  return (
    <>
    <form ref={formRef} onSubmit={handleSubmit}>
      <div className="wrapper bg-white">
        <div className="h2 text-center">Registrarse</div>
        <div className="h4 text-muted text-center pt-2">Ingrese tus Datos</div>
          <div className="form-group py-2">
            <div className="input-field">
              <input
                id="nombre"
                type="nombre"
                placeholder="Escriba su Nombre"
                name="nombre"
                onChange={handleChange}
              />
            </div>
            {errors.nombre ? <div className="error-message" style={{color:"red"}}>{errors.nombre}</div> : null}
          </div>
          <div className="form-group py-2">
            <div className="input-field">
              <input
                id="apellido"
                type="apellido"
                placeholder="Escriba su Apellido"
                name="apellido"
                onChange={handleChange}
              />
            </div>
            {errors.apellido ? <div className="error-message" style={{color:"red"}}>{errors.apellido}</div> : null}
          </div>
          <div className="form-group py-2">
            <div className="input-field">
            <div className="error-message" style={{color:"red"}}>{errorMessage}</div>
              <input
                id="email"
                type="email"
                placeholder="Escriba su E-mail"
                name="email"
                onChange={handleChange}
              />
            </div>
            {errors.email ? <div className="error-message" style={{color:"red"}}>{errors.email}</div> : null}  

          </div>
          <div className="form-group py-2">
            <div className="input-field">
              <input
                id="documentoIdentidad"
                type="number"
                placeholder="Escriba su C.I"
                name="documentoIdentidad"
                onChange={handleChange}
              />
            </div>
            {errors.documentoIdentidad ? <div className="error-message" style={{color:"red"}}>{errors.documentoIdentidad}</div> : null}

          </div>
          <div className="form-group py-1 pb-2">
            <div className="input-field">
              <input
                  id="telefono"
                  type="number"
                  placeholder="Escriba su numero de teléfono."
                  name="telefono"
                  onChange={handleChange}
                />
              <button className="btn bg-white text-muted">
                <span className="far fa-eye-slash"></span>
              </button>
            </div>
          </div>
          <button type="submit" className="btn btn-block text-center my-3" id="botonLogin">Crear Cuenta</button>

      </div>
      <div className="h2 text-center">Milena Isasi</div>

      </form>
    </>
  );
};

export default Register;
