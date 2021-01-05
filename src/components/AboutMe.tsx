export default function AboutMe() {
  return (
    <div id="aboutme" className="pb-40 bg-white ">
      <div className="container flex flex-col items-center px-10 pt-20 mx-auto">
        <div className="flex flex-col items-center leading-none">
          <h3 className="text-6xl font-semibold text-gray-500 opacity-25">
            KNOW ME MORE
          </h3>
          <h4 className="-mt-8 text-4xl font-semibold ">ABOUT ME</h4>
        </div>
        <div className="flex flex-col items-center pt-20 md:justify-between md:items-start md:flex-row md:space-x-3">
          <div className="flex flex-col w-10/12 pb-10 md:w-8/12">
            <h2 className="pb-3 text-3xl font-semibold text-gray-700">
              I'm <span className="text-primary-600">Gustavo Silva,</span> a Web
              Developer
            </h2>
            <p className="text-base font-light leading-loose text-gray-900">
              A focused and hardworking Web Developer, who always seeks to
              evolve and give his best. I seek a good professional and personal
              life, and I believe that both are only acquired with a lot of
              effort and perspicacity.
            </p>
          </div>
          <div className="flex flex-col items-center w-10/12 text-center md:items-start md:text-left md:w-1/3">
            <ul className="flex flex-col items-start justify-start mt-1 space-y-3 ">
              <li className="w-full pb-3 text-lg text-gray-700 border-b">
                <span className="text-sm text-gray-900 opacity-50">NAME:</span>{' '}
                Gustavo Silva
              </li>
              <li className="w-full pb-3 text-lg text-gray-700 border-b">
                <span className="text-sm text-gray-900 opacity-50">EMAIL:</span>{' '}
                gustavosramos1@hotmail.com
              </li>
              <li className="w-full pb-3 text-lg text-gray-700 border-b">
                <span className="text-sm text-gray-900 opacity-50">AGE:</span>{' '}
                21
              </li>
              <li className="w-full pb-3 text-lg text-gray-700 ">
                <span className="text-sm text-gray-900 opacity-50">FROM:</span>{' '}
                Mirassol, São Paulo
              </li>
            </ul>
            <button className="w-7/12 px-8 py-4 mt-6 text-white transition duration-300 ease-in-out border-none rounded-full shadow-lg hover:bg-primary-700 bg-primary-600">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
