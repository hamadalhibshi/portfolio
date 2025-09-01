import { useLocation } from "react-router-dom"
import { navigation } from "../constants"

const NavigationBar = () => {
  const path = useLocation();

  return (
    <div className="fixed top-0 w-full border-b border-b-gray-500 p-5">
      <div className="flex items-center justify-between">
        <div className="text-2xl uppercase">
          <a href="/">
            Hamad Alhibshi
          </a>
        </div>

        <nav className="hidden lg:flex">
          <div className="flex justify-center">
            {navigation.map((nav)=> (
              <a
              key={nav.id}
              href={nav.url}
              className={`text-2xl uppercase transition-colors 
                ${path.pathname === nav.url ? 
                  'text-amber-400': 
                  'text-neutral-100'}  
                  hover:text-amber-200 ml-5`}
              >
                {nav.title}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </div>
  )
}

export default NavigationBar
