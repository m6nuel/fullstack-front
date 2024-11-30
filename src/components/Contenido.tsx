import { Link, useLocation, useParams } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Contenido = () => {
  const { id } = useParams();
  const location = useLocation();
  const temaId = location.state?.temaId;
  const subtema = location.state?.subtema;

  if (!id) {
    console.error("ID no encontrado en la URL");
    return <div>Error: ID no válido</div>;
  }

  const subTemaId = parseInt(id, 10);
  if (isNaN(subTemaId)) {
    console.error("El ID proporcionado no es un número válido");
    return <div>Error: ID no válido</div>;
  }

  // Validación del formulario
  const validationSchema = Yup.object({
    titulo: Yup.string()
      .max(100, "El título no debe exceder los 100 caracteres")
      .required("El título es obligatorio"),
    descripcion1: Yup.string().required("La descripción 1 es obligatoria"),
    codigo: Yup.string(),
    imagen: Yup.mixed().nullable(),
    descripcion2: Yup.string(),
  });

  const initialValues = {
    titulo: "",
    descripcion1: "",
    codigo: "",
    imagen: null,
    descripcion2: "",
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (values: typeof initialValues) => {
    console.log("Formulario enviado con los valores:", values);
    alert("Formulario enviado correctamente");
  };

  return (
    <div className="p-6 bg-gray-500 rounded shadow-md max-w-full">
      <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
        {subtema?.subtema}
      </h2>

      <div className="w-1/2 mx-auto">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ setFieldValue }) => (
            <Form className="space-y-4 text-black">
              {/* Campo Título */}
              <div>
                <label htmlFor="titulo" className="block text-sm font-medium text-gray-700">
                  Título
                </label>
                <Field
                  type="text"
                  name="titulo"
                  id="titulo"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
                <ErrorMessage
                  name="titulo"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Campo Descripción 1 */}
              <div>
                <label htmlFor="descripcion1" className="block text-sm font-medium text-gray-700">
                  Descripción 1
                </label>
                <Field
                  as="textarea"
                  name="descripcion1"
                  id="descripcion1"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
                <ErrorMessage
                  name="descripcion1"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Campo Código */}
              <div>
                <label htmlFor="codigo" className="block text-sm font-medium text-gray-700">
                  Código (opcional)
                </label>
                <Field
                  as="textarea"
                  name="codigo"
                  id="codigo"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
                <ErrorMessage
                  name="codigo"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Campo Imagen */}
              <div>
                <label htmlFor="imagen" className="block text-sm font-medium text-gray-700">
                  Imagen (opcional)
                </label>
                <input
                  type="file"
                  name="imagen"
                  id="imagen"
                  accept="image/*"
                  onChange={(event) =>
                    setFieldValue("imagen", event.currentTarget.files?.[0])
                  }
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
                <ErrorMessage
                  name="imagen"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Campo Descripción 2 */}
              <div>
                <label htmlFor="descripcion2" className="block text-sm font-medium text-gray-700">
                  Descripción 2 (opcional)
                </label>
                <Field
                  as="textarea"
                  name="descripcion2"
                  id="descripcion2"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
                <ErrorMessage
                  name="descripcion2"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Botón de Enviar */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Guardar contenido
                </button>
              </div>
            </Form>
          )}
        </Formik>

        {/* Botón para volver a la página anterior */}
        <Link to={`../creartema/crearsubtema/${temaId}`} state={{ temaId }} className="mt-4 inline-block">
          <button className="bg-gray-700 text-white py-2 px-4 rounded hover:bg-gray-800">
            Volver
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Contenido;
