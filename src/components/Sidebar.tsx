export default function Sidebar() {
  return (
    <div className="fixed z-20 flex flex-col h-screen bg-gray-900 sidebar">
      <div className="flex flex-col items-center justify-between h-screen ">
        <div className="flex flex-col items-center justify-center">
          <img
            className="object-cover border-4 rounded-full logo-img border-primary-600"
            src="perfil3.jpg"
            alt="Perfil"
          />
          <p className="text-xl font-medium text-gray-100 ">Gustavo Silva</p>
        </div>
        <ul className="flex flex-col items-center pt-16 space-y-3 text-base font-light tracking-wide text-gray-200">
          <a
            className="transition duration-300 ease-in-out hover:text-primary-400"
            href="#hero"
          >
            Home
          </a>
          <a
            className="transition duration-300 ease-in-out hover:text-primary-400"
            href="#portfolio"
          >
            Portfolio
          </a>
        </ul>
        <div className="flex flex-row justify-around pt-48 space-x-5">
          <a
            href="https://www.linkedin.com/in/gustavo-da-silva-ramos-9b1433169/"
            className="text-lg text-gray-300 transition duration-300 ease-in-out fab fa-linkedin hover:text-primary-400"
          />
          <a
            href="https://github.com/GustavoSilvaRamos"
            className="text-lg text-gray-300 transition duration-300 ease-in-out fab fa-github hover:text-gray-400"
          />
        </div>
      </div>
    </div>
  )
}
