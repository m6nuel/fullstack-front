import { useParams, useLocation } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const CreateSubTema = () => {
  const { id } = useParams();
  const location = useLocation();
  const titulo = location.state?.titulo;

  const initialValues = {
    subtemaTitulo: "",
    descripcion: "",
  };

  const validationSchema = Yup.object({
    subtemaTitulo: Yup.string()
      .min(3, "El título debe tener al menos 3 caracteres")
      .required("El título es obligatorio"),
    descripcion: Yup.string()
      .min(10, "La descripción debe tener al menos 10 caracteres")
      .required("La descripción es obligatoria"),
  });

  const handleSubmit = (values: typeof initialValues) => {
    console.log("Datos del formulario:", { ...values, temaId: id });
    // Aquí puedes realizar una solicitud POST para agregar el subtema al backend
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-slate-100 text-gray-800 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">{titulo}</h1>
      <h2 className="text-xl text-gray-600 mb-6">Agregar un nuevo subtema</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="mb-4">
              <label
                htmlFor="subtemaTitulo"
                className="block text-sm font-medium text-gray-700"
              >
                Título del Subtema
              </label>
              <Field
                id="subtemaTitulo"
                name="subtemaTitulo"
                type="text"
                className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Ingrese el título del subtema"
              />
              <ErrorMessage
                name="subtemaTitulo"
                component="div"
                className="text-sm text-red-600 mt-1"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="descripcion"
                className="block text-sm font-medium text-gray-700"
              >
                Descripción
              </label>
              <Field
                id="descripcion"
                name="descripcion"
                as="textarea"
                rows={4}
                className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Ingrese la descripción del subtema"
              />
              <ErrorMessage
                name="descripcion"
                component="div"
                className="text-sm text-red-600 mt-1"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              {isSubmitting ? "Guardando..." : "Agregar Subtema"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateSubTema;
