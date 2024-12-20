import Whats from "../assets/images/social.png";
export const Flotantes = () => {
  return (
    <>
      <section className="w-full absolute">
        <figure className="fixed w-[50px] h-[50px] bottom-4 right-2 z-40 md:w-[70px] md:h-[70px]">
          <a
            href="https://api.whatsapp.com/send?phone=525575791467"
            target="_blank"
          >
            <img src={Whats} alt="" />
          </a>
        </figure>
      </section>
    </>
  );
};
