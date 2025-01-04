import React from 'react';

function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav>
        <ul className="flex justify-center space-x-8">
          <li><a href="#about" className="text-xl hover:text-yellow-400">Про мене</a></li>
          <li><a href="#projects" className="text-xl hover:text-yellow-400">Мої проекти</a></li>
          <li><a href="#contact" className="text-xl hover:text-yellow-400">Контакти</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
