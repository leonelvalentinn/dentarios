import CortoMetraje from "../../assets/images/google.mp4";
import { IoIosArrowDown } from "react-icons/io";
import { useEffect, useState } from "react";
export const SectionVideo = () => {
  const [selected, setSelected] = useState(null);

  const toogle = (i) => {
    if (selected == i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  const Razones = [
    {
      id: 1,
      razon: "Inmediatez en los primeros resultados de búsqueda",
      respuesta:
        "Al invertir en campañas de Google Ads, tu clínica dental aparecerá de inmediato entre los primeros resultados cuando alguien busque servicios relacionados con odontología, como dentista cerca de mí o implantes dentales. Esto te permite captar la atención de potenciales pacientes justo cuando están buscando tus servicios, aumentando las posibilidades de conversión.",
    },
    {
      id: 2,
      razon: " Acceso a un público altamente segmentado",
      respuesta:
        "Las campañas de Google Ads permiten dirigir tus anuncios a personas que ya están buscando activamente servicios dentales específicos. Esto significa que no solo estarás llegando a más personas, sino que serás visible para aquellas que tienen una necesidad real y urgente. Puedes segmentar por ubicación, intereses o incluso por tipo de tratamiento, lo cual aumenta la relevancia de los anuncios y mejora las probabilidades de que los usuarios se conviertan en pacientes.",
    },
    {
      id: 3,
      razon: "Genera confianza y credibilidad",
      respuesta:
        "Los usuarios tienden a confiar más en los negocios que aparecen en las primeras posiciones de búsqueda. Esto se debe a que Google asocia estas posiciones con relevancia y calidad. Un buen SEO también implica tener reseñas positivas de pacientes, lo que refuerza aún más la confianza en tu clínica. Las personas prefieren buscar recomendaciones y opiniones antes de elegir un dentista, por lo que estar visible y bien posicionado aumenta la percepción de profesionalismo y confiabilidad.",
    },
    {
      id: 4,
      razon: "Resultados medibles y ajustables",
      respuesta:
        "Una de las ventajas clave de las campañas pagadas en Google es la capacidad de medir los resultados en tiempo real. Puedes ver cuántas personas han hecho clic en tu anuncio, qué acciones han tomado en tu sitio web y cómo estas interacciones se traducen en nuevos pacientes. Esta información te permite ajustar y optimizar tus campañas para obtener un mayor retorno de inversión.",
    },
    {
      id: 5,
      razon: "Ventaja sobre la competencia local",
      respuesta:
        "En muchas ciudades, la competencia entre clínicas dentales es fuerte. Una campaña pagada te da la oportunidad de destacarte frente a tus competidores, especialmente si ellos no están invirtiendo en publicidad en Google. Al estar en los primeros resultados, captas la atención de los usuarios antes que otros, lo que puede marcar la diferencia en la elección de un paciente potencial.",
    },
  ];
  return (
    <>
      <section>
        <div className="container-video md:grid md:grid-cols-2 md:max-w-7xl md:py-0">
          <div className="item-video">
            <video
              src={CortoMetraje}
              controls
              lopp
              muted
              className="h-[500px]"
            ></video>
          </div>
          <div className="item-video md:flex md:justify-center  md:flex-col md:px-8">
            <h2 className="text-center text-cyan-600 font-bold text-xl md:text-left md:mb-4 md:text-3xl">
              Razones para posicionar tu clínica en Google
            </h2>
            {Razones.map((item, i) => (
              <div className="w-full ">
                <div
                  className="flex w-full question  justify-between md:text-base cursor-pointer  p-1 rounded-lg"
                  onClick={() => toogle(i)}
                >
                  <p className="text-black text-left text-xs md:text-base ">
                    {item.razon}
                  </p>
                  <IoIosArrowDown
                    className={`${
                      selected == i ? "rotate-180" : "rotate-0"
                    } duration-500 text-base `}
                  />
                </div>
                <p
                  className={`${
                    selected == i ? "efecto " : "respuesta  "
                  } w-full text-xs md:text-sm  mt-2  text-justify px-2`}
                >
                  {item.respuesta}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
