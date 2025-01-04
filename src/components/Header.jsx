import React from 'react';

function Header() {
  return (
    <header className="bg-blue-700 text-white p-6 shadow-lg">
      <nav>
        <ul className="flex justify-center space-x-10">
          <li><a href="#about" className="text-xl hover:text-yellow-500">Про мене</a></li>
          <li><a href="#projects" className="text-xl hover:text-yellow-500">Мої проекти</a></li>
          <li><a href="#contact" className="text-xl hover:text-yellow-500">Контакти</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;