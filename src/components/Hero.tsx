//@ts-ignore
import Typewriter from 'typewriter-effect'

export default function Hero() {
  return (
    <div id="hero" className="relative min-h-screen fundo">
      <div className="absolute z-10 w-full h-full bg-black opacity-50" />
      <div className="z-20 flex flex-col items-center pt-48 ">
        <h2 className="z-20 text-3xl font-medium text-gray-200">Welcome</h2>
        <h1 className="z-20 flex text-6xl font-medium tracking-normal text-gray-100 ">
          I'm a
          <span className="ml-6">
            <Typewriter
              options={{
                strings: [
                  'Web Developer',
                  'UI Designer',
                  'React Addicted',
                  'Tailwind Fan',
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </h1>
        <h3 className="z-20 pt-2 pb-8 text-xl font-normal text-gray-200">
          based in Mirassol, São Paulo
        </h3>
        <button className="z-20 px-5 py-3 font-semibold tracking-wide transition duration-200 ease-in-out border-2 rounded-full text-primary-600 border-primary-600 hover:text-white hover:bg-primary-600">
          <a href="#portfolio">See My Projects</a>
        </button>
      </div>
    </div>
  )
}
