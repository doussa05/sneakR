import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, LogIn, Home, Heart } from 'lucide-react'; // Importation des icônes User, LogIn, Home et Heart


export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-purple-200 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0    " >
            <Link to="/" className="text-3xl font-bold  text-fuchsia-950 hover:text-slate-700">Anisus</Link>
          </div>
          <div className="hidden md:flex items-center space-x-4 ">
          <Link to="/home" className="text-fuchsia-950 hover:text-white font-bold no-underline"> <Home size={24} /> {/* Utilisation de l'icône Home */} </Link>
   
            <Link to="/MyProfile" className="text-fuchsia-950 hover:text-white no-underline font-bold"> <User size={24} />  </Link>
            <Link to="/MyWishList" className="text-fuchsia-950 hover:text-white no-underline font-bold"> <Heart size={24} /> {/* Utilisation de l'icône Heart */}</Link> 
            <Link to="/" className="text-fuchsia-950 hover:text-white font-bold no-underline"> <LogIn size={24} /> {/* Utilisation de l'icône LogIn */} </Link>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button onClick={toggleMenu} type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white">
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path className={!isOpen ? "inline-flex" : "hidden"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"/>
                <path className={isOpen ? "inline-flex" : "hidden"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <Link to="/home" className="text-fuchsia-950 hover:text-white font-bold no-underline"> <Home size={24} /> {/* Utilisation de l'icône Home */} </Link>
    

          <Link to="/MyProfile" className="block px-3 py-2 rounded-md text-base font-bold no-underline text-fuchsia-950 hover:text-white"> <User size={24} /> {/* Utilisation de l'icône User */} </Link>
          
          <Link to="/MyWishList" className="text-fuchsia-950 hover:text-white no-underline font-bold"> <Heart size={24} /> {/* Utilisation de l'icône Heart */}</Link> 

          <Link to="/" className="text-fuchsia-950 hover:text-white font-bold no-underline"> <LogIn size={24} /> {/* Utilisation de l'icône LogIn */} </Link>
        </div>
      </div>
    </nav>
  );
}
