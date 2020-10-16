export default function Contact() {
  return (
    <div id="contact" className="pb-40 bg-white ">
      <div className="container flex flex-col items-center px-10 pt-20 mx-auto">
        <div className="flex flex-col items-center leading-none">
          <h3 className="text-6xl font-semibold text-gray-500 opacity-25">
            GET IN TOUCH
          </h3>
          <h4 className="-mt-8 text-4xl font-semibold ">CONTACT</h4>
        </div>

        <div className="flex items-start justify-between pt-20 space-x-10">
        <div className="flex flex-col w-8/12">
            <h2 className="pb-5 text-2xl font-semibold text-primary-700 ">
              Send me a message
            </h2>
            <form >
              <div className="flex justify-between space-x-10">
                <input
                  type="text"
                  className="w-6/12 px-2 py-2 bg-gray-100 border rounded-md focus:border-primary-700 focus:text-primary-700"
                  placeholder="Name"
                />
                <input
                  type="email"
                  className="w-6/12 px-2 py-2 bg-gray-100 border rounded-md focus:border-primary-700 focus:text-primary-700"
                  placeholder="Email"
                />
              </div>
              <div className="flex flex-col items-center mt-5">
              <textarea className="w-full px-2 pt-2 pb-20 bg-gray-100 border rounded-md focus:border-primary-700 " placeholder="Tell me more about what you need..."></textarea>
              <button className="w-4/12 px-8 py-4 mt-6 text-white transition duration-300 ease-in-out border-none rounded-full shadow-lg hover:bg-primary-700 bg-primary-600">Send Message</button>
              </div>
            </form>
          </div>
          <div className="w-4/12">
            <h2 className="text-2xl font-semibold text-primary-700">
              Contact Info
            </h2>
            <p className="text-base font-light text-gray-600">
              Always available for freelance work if the right project comes
              along. Feel free to contact me!
            </p>
            <ul className="flex flex-col mt-5 space-y-3 leading-tight">
              <li className="text-sm font-light text-gray-600 ">
                Name <br />
                <span className="text-base font-semibold text-gray-900 ">
                  Gustavo Silva
                </span>
              </li>
              <li className="text-sm font-light text-gray-600 ">
                Location <br />{' '}
                <span className="text-base font-semibold text-gray-900 ">
                  Brazil
                </span>
              </li>
              <li className="text-sm font-light text-gray-600 ">
                Phone <br />{' '}
                <span className="text-base font-semibold text-gray-900 ">
                  +55(17) 98199-9084
                </span>
              </li>
              <li className="text-sm font-light text-gray-600 ">
                Email <br />{' '}
                <span className="text-base font-semibold text-gray-900 ">
                  gustavosramos1@hotmail.com
                </span>
              </li>
            </ul>
          </div>
          
        </div>
      </div>
    </div>
  )
}
