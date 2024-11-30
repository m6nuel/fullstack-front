import { useParams, useLocation } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useTemaApp } from "../hooks/useTemaApp";
const CreateSubTema = () => {
  const { id } = useParams();
  const { addSubTema, initialState } = useTemaApp();
  const location = useLocation();
  const titulo = location.state?.titulo;
  const temaId = location.state?.temaId;

  let tituloTema = "";

  if (temaId !== undefined) {
    const temaEncontrado = initialState.temas.find((temaItem) => temaItem.id === temaId);
    tituloTema = temaEncontrado?.tema || "Título desconocido"; // Si no encuentra el tema, mostrar "Título desconocido"
  }

  if (!id) {
    console.error("ID no encontrado en la URL");
    return <div>Error: ID no válido</div>;
  }

  const parsedTemaId = parseInt(id, 10);
  if (isNaN(parsedTemaId)) {
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
      await addSubTema(values, parsedTemaId); // Suponiendo que addSubTema es una función asincrónica
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
        <h1 className="text-2xl font-bold text-gray-800 mb-4">{titulo || tituloTema}</h1>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
          {({ isSubmitting }) => (
            <Form>
              <div className="mb-4">
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
    </>
  );
};

export default CreateSubTema;
