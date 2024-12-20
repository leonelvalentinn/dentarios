import FotoHero from "../../assets/images/bg-curso.png";
import FotoHeroCell from "../../assets/images/bg-curso-cel.png";
export const Hero = () => {
  return (
    <>
      <section>
        <img src={FotoHero} alt="" className="hidden md:block" />
        <img src={FotoHeroCell} alt="" className="md:hidden" />
        <a
          href="https://api.whatsapp.com/send?phone=525575791467"
          target="_blank"
          className="bg-green-600 py-3 px-3 block m-auto w-[250px] my-4 text-sm text-center rounded-xl text-white md:w-[320px]  md:text-lg md:hover:scale-90 duration-200"
        >
          Contáctanos por Whatsapp
        </a>
      </section>
    </>
  );
};
