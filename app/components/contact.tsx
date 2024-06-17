import ArrowRightIcon from '@/public/ArrowRightIcon'
import Link from 'next/link'

const Contact = () => {
  return (
    <div
      className="flex flex-col items-center min-h-screen h-screen"
      id="contact"
    >
      <div className="w-[90%] md:w-[88%] h-full flex items-center">
        <div className="w-full h-2/5 sm:h-2/3 border rounded-3xl flex flex-col justify-center items-center">
          <div className="w-[80%] h-[80%] flex flex-col">
            <div className="w-full h-5/6 flex flex-col border-b font-roboto">
              <h1 className="text-2xl sm:text-5xl font-normal">
                Vamos criar algo <br />
                incrível juntos.
              </h1>
              <div className="flex-1 flex justify-end items-center">
                <div className="w-20 sm:w-24 mr-5">
                  <ArrowRightIcon />
                </div>
                <Link
                  className="text-sm sm:text-xl"
                  href="mailto:ewertonreisc01@gmail.com"
                >
                  ENVIE-ME UM EMAIL
                </Link>
              </div>
            </div>
            <div className="flex-1">
              <ul className="flex h-full items-center text-sm font-medium sm:font-semibold font-roboto">
                <li className="p-2">
                  <Link
                    href="https://www.linkedin.com/in/ewerton11"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </Link>
                </li>
                <li className="ml-5 p-2">
                  <Link
                    href="https://github.com/ewerton11"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
