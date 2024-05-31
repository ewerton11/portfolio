import ArrowRightIcon from '@/public/ArrowRightIcon'
import Link from 'next/link'

const Contact = () => {
  return (
    <div className="w-full h-screen flex justify-center" id="contact">
      <div className="w-[80%] h-full flex items-center">
        <div className="w-full h-2/3 border rounded-3xl flex flex-col justify-center items-center">
          <div className="w-[80%] h-[80%] flex flex-col">
            <div className="w-full h-5/6 flex flex-col border-b font-robotoMono">
              <h1 className="text-5xl font-normal">
                Vamos criar <br />
                algo incrível <br /> juntos.
              </h1>
              <div className="flex-1 flex justify-end items-center">
                <div className="w-24 mr-5">
                  <ArrowRightIcon />
                </div>
                <Link
                  className="text-xl"
                  href="mailto:ewertonreisc01@gmail.com"
                >
                  ENVIE-ME UM EMAIL
                </Link>
              </div>
            </div>
            <div className="flex-1">
              <ul className="flex h-full items-center font-semibold font-roboto">
                <li className="">
                  <Link
                    href="https://www.linkedin.com/in/ewerton11"
                    target="_blank"
                  >
                    LinkedIn
                  </Link>
                </li>
                <li className="ml-5">
                  <Link href="https://github.com/ewerton11" target="_blank">
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
