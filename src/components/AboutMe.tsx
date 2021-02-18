export default function AboutMe() {
  return (
    <div id="aboutme" className="pb-40 bg-white ">
      <div className="container flex flex-col items-center px-10 pt-20 mx-auto">
        <div className="flex flex-col items-center leading-none">
          <h3 className="text-6xl font-semibold text-gray-500 opacity-25">
            KNOW ME MORE
          </h3>
          <h4 className="-mt-8 text-5xl font-semibold md:text-4xl ">
            ABOUT ME
          </h4>
        </div>
        <div className="flex flex-col items-center pt-20 md:justify-between md:items-start md:flex-row md:space-x-3">
          <div className="flex flex-col w-10/12 pb-10 md:w-7/12">
            <h2 className="pb-3 text-4xl font-semibold text-gray-700 md:text-3xl">
              I'm <span className="text-primary-600">Gustavo Silva,</span> a Web
              Developer
            </h2>
            <p className="text-lg font-light leading-loose text-gray-900 md:text-base">
              A focused and hardworking Web Developer, who always seeks to
              evolve and give his best. I seek a good professional and personal
              life, and I believe that both are only acquired with a lot of
              effort and perspicacity.
            </p>
          </div>
          <div className="flex flex-col items-center w-10/12 text-center md:items-start md:text-left md:w-1/3">
            <ul className="flex flex-col items-start justify-start mt-1 space-y-3 ">
              <li className="w-full pb-3 text-xl text-gray-700 border-b md:text-lg">
                <span className="text-base text-gray-900 opacity-50 md:text-sm">
                  NAME:
                </span>{' '}
                Gustavo Silva
              </li>
              <li className="w-full pb-3 text-xl text-gray-700 border-b md:text-lg">
                <span className="text-base text-gray-900 opacity-50 md:text-sm">
                  EMAIL:
                </span>{' '}
                gustavosilv1234@gmail.com
              </li>
              <li className="w-full pb-3 text-xl text-gray-700 border-b md:text-lg">
                <span className="text-base text-gray-900 opacity-50 md:text-sm">
                  AGE:
                </span>{' '}
                21
              </li>
              <li className="w-full pb-3 text-xl text-gray-700 md:text-lg ">
                <span className="text-base text-gray-900 opacity-50 md:text-sm">
                  FROM:
                </span>{' '}
                Mirassol, São Paulo
              </li>
            </ul>
            <a
              href="https://drive.google.com/file/d/1GvTPBTOknyNQ9_opaHWta8-6-mGspzX2/view?usp=sharing"
              className="flex justify-center w-7/12 px-8 py-4 mt-6 text-white transition duration-300 ease-in-out border-none rounded-full shadow-lg hover:bg-primary-700 bg-primary-600"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
