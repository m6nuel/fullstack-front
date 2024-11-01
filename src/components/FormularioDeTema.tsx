import { useFormik } from "formik";
import * as Yup from "yup";
import { FaPlus } from "react-icons/fa";
import { useTemaApp } from "../hooks/useTemaApp";
import { TemaType } from "../interfaces/interfaces";

const FormularioDeTema = () => {
  const { addTema } = useTemaApp();

  // Configuración de Formik
  const formik = useFormik({
    initialValues: {
      tema: "",
    },
    validationSchema: Yup.object({
      tema: Yup.string().min(3, "El tema debe tener al menos 3 caracteres").required("Este campo es obligatorio"),
    }),
    onSubmit: (values, { resetForm }) => {
      // Acción al enviar el formulario (ej. enviar datos a la API)
      const nuevoTema: TemaType = { tema: values.tema };
      addTema(nuevoTema);
      // console.log("Nuevo tema:", values.tema);
      // Resetea el formulario después del envío
      resetForm();
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit} className="flex items-center space-x-0.5">
        <input
          type="text"
          id="tema"
          name="tema"
          placeholder="Escribe un tema"
          className="w-full px-3 py-1.5 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={formik.values.tema}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <button
          type="submit"
          className="p-2 bg-blue-500 hover:bg-blue-600 rounded-md flex items-center justify-center h-full"
          aria-label="Crear tema"
        >
          <FaPlus className="text-white" />
        </button>
      </form>
      {/* Mensaje de error */}
      {formik.touched.tema && formik.errors.tema ? <div className="text-red-500 text-sm mt-2">{formik.errors.tema}</div> : null}
    </>
  );
};

export default FormularioDeTema;
