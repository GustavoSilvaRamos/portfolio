import { useState } from 'react'

export default function Contact() {
  const [message, setMessage] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [name, setName] = useState<string>('')

  function onSubmit(e) {
    e.preventDefault()
    const payload = {
      message: message,
      email: email,
      name: name,
    }
    console.log(payload)
    fetch('/api/send-email', {
      method: 'POST',
      body: JSON.stringify(payload),
    })
  }

  return (
    <div id="contact" className="pb-40 bg-white ">
      <div className="container flex flex-col items-center px-10 pt-20 mx-auto">
        <div className="flex flex-col items-center leading-none">
          <h3 className="text-6xl font-semibold text-gray-500 opacity-25">
            GET IN TOUCH
          </h3>
          <h4 className="-mt-8 text-5xl font-semibold md:text-4xl ">CONTACT</h4>
        </div>
        <div className="flex flex-col-reverse items-center justify-between pt-20 md:items-start md:space-x-10 md:flex-row">
          <div className="flex flex-col w-full pt-10 md:pt-0 md:w-8/12">
            <h2 className="pb-5 text-3xl font-semibold text-center md:text-2xl md:text-left text-primary-700 ">
              Send me a message
            </h2>
            <form onSubmit={onSubmit}>
              <div className="flex justify-between space-x-10">
                <input
                  value={name}
                  onChange={e => setName(e.target.value)}
                  type="text"
                  className="w-6/12 px-2 py-2 bg-gray-100 border rounded-md focus:border-gray-800"
                  placeholder="Name"
                />
                <input
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  type="email"
                  className="w-6/12 px-2 py-2 bg-gray-100 border rounded-md focus:border-gray-800"
                  placeholder="Email"
                />
              </div>
              <div className="flex flex-col items-center mt-8">
                <textarea
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  className="w-full px-2 pt-2 pb-32 bg-gray-100 border rounded-md focus:border-gray-800 "
                  placeholder="Tell me more about what you need..."
                ></textarea>
                <button
                  type="submit"
                  className="px-8 py-4 mt-6 text-white transition duration-300 ease-in-out border-none rounded-full shadow-lg hover:bg-primary-700 bg-primary-600"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
          <div className="w-10/12 text-center md:text-left md:w-4/12">
            <h2 className="mb-3 text-3xl font-semibold md:text-2xl text-primary-700">
              Contact Info
            </h2>
            <p className="text-lg font-light text-gray-600 md:text-base">
              Always available for freelance work if the right project comes
              along. Feel free to contact me!
            </p>
            <ul className="flex flex-col mt-5 space-y-3 leading-tight">
              <li className="text-base font-light text-gray-600 md:text-sm ">
                Name <br />
                <span className="text-lg font-semibold text-gray-900 md:text-base ">
                  Gustavo Silva
                </span>
              </li>
              <li className="text-base font-light text-gray-600 md:text-sm ">
                Location <br />{' '}
                <span className="text-lg font-semibold text-gray-900 md:text-base ">
                  Brazil
                </span>
              </li>
              <li className="text-base font-light text-gray-600 md:text-sm ">
                Phone <br />{' '}
                <span className="text-lg font-semibold text-gray-900 md:text-base ">
                  +55(17) 98199-9084
                </span>
              </li>
              <li className="text-base font-light text-gray-600 md:text-sm ">
                Email <br />{' '}
                <span className="text-lg font-semibold text-gray-900 md:text-base ">
                  gustavosilv1234@gmail.com
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
