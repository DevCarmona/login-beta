import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LayoutComponents } from "../../components/layoutComponents";

import mediScan from "../../assets/MediscanCor.png";

import { useFormik } from "formik";
import * as yup from "yup";

export const Register = () => {
  const [submitted, setSubmitted] = useState(false);

  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .required("Por favor, insira seu nome."),

    lastName: yup
      .string()
      .required("Por favor, insira seu sobrenome."),

    email: yup
      .string()
      .email("Por favor, insira um email válido.")
      .required("Campo obrigatório."),

    password: yup
      .string()
      .min(6, "A senha deve ter pelo menos 6 caracteres.")
      .required("Campo obrigatório."),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Here you can deal with a form send after validation
      // Aqui você pode lidar com o envio de um formulário após validação
      console.log("Formulário válido. Valores:", values);
      setSubmitted(true);
    },
  });

  return (
    <LayoutComponents>
      <form className="login-form" onSubmit={formik.handleSubmit}>
        <span className="login-form-title">Criar conta</span>
        <span className="login-form-title">
          <img src={mediScan} alt="" />
        </span>

        {/* Nome */}
        <div className="wrap-input">
          <input
            className={formik.values.name !== "" ? "has-val input" : "input"}
            type="text"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <span className="focus-input" data-placeholder="Nome"></span>
          {formik.touched.name && formik.errors.name && (
            <span className="invalid-feedback">{(formik.errors.name)}</span>
          )}
        </div>

        {/* Sobrenome */}
        <div className="wrap-input">
          <input
            className={formik.values.lastName !== "" ? "has-val input" : "input"}
            type="text"
            name="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <span className="focus-input" data-placeholder="Sobrenome"></span>
          {formik.touched.lastName && formik.errors.lastName && (
            <span className="invalid-feedback">{formik.errors.lastName}</span>
          )}
        </div>

        {/* E-mail */}
        <div className="wrap-input">
          <input
            className={formik.values.email !== "" ? "has-val input" : "input"}
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <span className="focus-input" data-placeholder="E-mail"></span>
          {formik.touched.email && formik.errors.email && (
            <span className="invalid-feedback">{formik.errors.email}</span>
          )}
        </div>

        {/* Senha */}
        <div className="wrap-input">
          <input
            className={formik.values.password !== "" ? "has-val input" : "input"}
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <span className="focus-input" data-placeholder="Senha"></span>
          {formik.touched.password && formik.errors.password && (
            <span className="invalid-feedback">{formik.errors.password}</span>
          )}
        </div>

        {/* Botão - Criar */}
        <div className="container-login-form-btn">
          <button className="login-form-btn" type="submit">Criar</button>
        </div>

        <div className="text-center">
          <span className="txt1">Já possui conta?</span>

          <Link className="txt2" to="/">
            Acessar com E-mail e Senha.
          </Link>
        </div>
      </form>
    </LayoutComponents>
  );
};
