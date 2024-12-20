import Logo from "../../assets/images/logo-white.png";
export const Resena = () => {
  return (
    <>
      <section>
        <div className="container-reseña py-4 md:grid md:grid-cols-2 md:max-w-7xl md:gap-8 md:py-14">
          <div className="item-resena flex justify-center items-center flex-col gap-3">
            <img src={Logo} alt="" className="max-w-[200px] md:max-w-[320px]" />
            <h2 className="text-center text-sm md:text-xl">
              Contactanos y descubre las opciones de marketing para tu clínica
              dental
            </h2>
            <a
              href="https://api.whatsapp.com/send?phone=525575791467"
              target="_blank"
              className="bg-green-600 py-3 px-3 block m-auto w-[250px]  text-sm text-center rounded-xl text-white md:w-[320px]  md:text-lg md:hover:scale-90 duration-200"
            >
              Contáctanos
            </a>
          </div>
          <div className="item-resena pt-5">
            <h2 className="text-xl text-sky-500 font-bold md:text-3xl">
              Un poco de nuestra historia
            </h2>
            <p className="text-sm text-justify md:text-base">
              En Dentarios, somos una agencia de marketing digital especializada
              en el sector odontológico. Este 2025 celebramos 10 años de
              experiencia ayudando a odontólogos a captar nuevos pacientes.
              Nuestra experiencia abarca además de clínicas dentales a
              laboratorios y depósitos dentales en mercados como México,
              Colombia y California; lo que nos convierte en un aliado global
              con un enfoque local para odontólogos en España.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
