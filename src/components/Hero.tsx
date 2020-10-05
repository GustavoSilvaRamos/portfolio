export function Hero() {
  return (
    <div id="hero" className="relative min-h-screen fundo">
      <div className="absolute z-10 w-full h-full bg-black opacity-75" />
      <div className="container fixed z-20 flex flex-col w-2/12 h-screen bg-black ">
        <div className="flex flex-col items-center pt-10">
          <img
            className="h-40 border-4 rounded-full border-primary-600"
            src="perfil.jpg"
            alt="Perfil"
          />
          <p className="pt-3 text-2xl text-gray-300">Gustavo Silva</p>
          <ul className="flex flex-col items-center pt-16 space-y-3 text-lg text-gray-300">
            <a
              className="transition duration-300 ease-in-out hover:text-primary-600"
              href="#hero"
            >
              Home
            </a>
            <a
              className="transition duration-300 ease-in-out hover:text-primary-600"
              href="#portfolio"
            >
              Portfolio
            </a>
          </ul>
          <div className="flex flex-row justify-around pt-48 space-x-5">
            <a
              href="https://www.linkedin.com/in/gustavo-da-silva-ramos-9b1433169/"
              className="text-lg text-gray-300 transition duration-300 ease-in-out fab fa-linkedin hover:text-primary-600"
            />
            <a
              href="https://github.com/GustavoSilvaRamos"
              className="text-lg text-gray-300 transition duration-300 ease-in-out fab fa-github hover:text-primary-600"
            />
          </div>
        </div>
      </div>
      <div className="z-20 flex flex-col items-center pt-48 pl-56 text-white">
        <h2 className="z-20 text-3xl font-medium">Welcome</h2>
        <h1 className="z-20 text-6xl font-medium tracking-normal">
          I'm a Designer
        </h1>
        <h3 className="z-20 pt-2 pb-8 text-xl font-normal">
          based in Mirassol, São Paulo
        </h3>
        <button className="z-20 px-5 py-3 font-medium tracking-wide transition duration-200 ease-in-out border-2 rounded-full text-primary-600 border-primary-600 hover:text-white hover:bg-primary-600">
          <a href="#portfolio">See My Projects</a>
        </button>
      </div>
    </div>
  )
}
