export function Portfolio() {
  return (
    <div id="portfolio" className="bg-gray-100">
      <div className="container flex flex-col items-center pt-20 pl-56 mx-auto">
        <div className="flex flex-col items-center leading-none">
          <h3 className="text-6xl font-semibold text-gray-500 opacity-25">
            MY WORKS
          </h3>
          <h4 className="-mt-8 text-4xl font-semibold">PORTFOLIO</h4>
        </div>
        <div className="container grid grid-flow-row grid-cols-2 gap-8 pt-10 ">
          <div className="transition duration-500 ease-in-out border-4 border-transparent rounded-sm opacity-75 hover:opacity-100 hover:border-primary-600">
            <a href="https://architecture-five.vercel.app/">
              <img className="h-64 " src="HeroArc.jpg" alt="Arquitetura" />
            </a>
          </div>
          <div className="transition duration-500 ease-in-out border-4 border-transparent rounded-sm opacity-75 hover:opacity-100 hover:border-primary-600">
            <a href="https://maridodealuguel.vercel.app/">
              <img className="h-64 " src="HeroMDE.jpg" alt="Marido de Alugel" />
            </a>
          </div>
          <div className="transition duration-500 ease-in-out border-4 border-transparent rounded-sm opacity-75 hover:opacity-100 hover:border-primary-600">
            <a href="https://receitas.vercel.app/">
              <img className="h-64 " src="HeroR.jpg" alt="Receitas" />
            </a>
          </div>
          <div className="transition duration-500 ease-in-out border-4 border-transparent rounded-sm opacity-75 hover:opacity-100 hover:border-primary-600">
            <a href="https://wineryproject.vercel.app/">
              <img className="h-64 " src="HeroV.jpg" alt="Vinicola" />
            </a>
          </div>
          <div className="transition duration-500 ease-in-out border-4 border-transparent rounded-sm opacity-75 hover:opacity-100 hover:border-primary-600">
            <a href="https://personaltrainer.vercel.app/">
              <img className="h-64 " src="HeroPT.jpg" alt="Personal Trainer" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}