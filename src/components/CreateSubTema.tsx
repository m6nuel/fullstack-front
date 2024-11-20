import { useParams, useLocation } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useTemaApp } from "../hooks/useTemaApp";

const CreateSubTema = () => {
  const { id } = useParams();
  const { addSubTema, initialState } = useTemaApp();
  const location = useLocation();
  const titulo = location.state?.titulo;

  if (!id) {
    console.error("ID no encontrado en la URL");
    return <div>Error: ID no válido</div>;
  }

  const temaId = parseInt(id, 10);
  if (isNaN(temaId)) {
    console.error("El ID proporcionado no es un número válido");
    return <div>Error: ID no válido</div>;
  }

  const initialValues = {
    subtema: "",
  };

  const validationSchema = Yup.object({
    subtema: Yup.string().min(3, "El subtema debe tener al menos 3 caracteres").required("El subtema es obligatorio"),
  });

  const handleSubmit = async (
    values: typeof initialValues,
    { setSubmitting, resetForm }: { setSubmitting: (isSubmitting: boolean) => void; resetForm: () => void }
  ) => {
    try {
      await addSubTema(values, temaId); // Suponiendo que addSubTema es una función asincrónica
      resetForm(); // Limpiar el formulario después de enviar los datos
    } catch (error) {
      console.error("Error al agregar subtema:", error);
    } finally {
      setSubmitting(false); // Asegurarse de detener el estado de envío
    }
  };

  return (
    <>
      <div className="max-w-lg mx-auto mt-0 p-6 bg-white text-gray-800 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">{titulo}</h1>
        {/* <h2 className="text-xl text-gray-600 mb-6">Agregar un nuevo subtema</h2> */}
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
          {({ isSubmitting }) => (
            <Form>
              <div className="mb-4">
                {/* <label htmlFor="subtema" className="block text-sm font-medium text-gray-700">
                Subtema
              </label> */}
                <Field
                  id="subtema"
                  name="subtema"
                  type="text"
                  className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Ingrese el subtema"
                />
                <ErrorMessage name="subtema" component="div" className="text-sm text-red-600 mt-1" />
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
      <div className="text-black mt-6">
        <h2 className="text-xl font-bold mb-4">Lista de Subtemas</h2>
        <ul className="list-disc list-inside">
          {(() => {
            const tema = initialState.temas?.find((tema) => tema?.id === temaId);
            if (!tema || !tema.subtema || tema.subtema.length === 0) {
              // Si no hay tema o los subtemas están vacíos
              return <p className="text-gray-500">No hay subtemas disponibles.</p>;
            }
            return tema.subtema.map((subtema) => (
              <li key={subtema.id} className="text-gray-700">
                {subtema.subtema}
              </li>
            ));
          })()}
        </ul>
      </div>
    </>
  );
};

export default CreateSubTema;
