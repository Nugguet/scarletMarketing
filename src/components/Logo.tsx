import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
}

export default function Logo({ className = '' }: LogoProps) {
  return (
    <Link 
      to="/" 
      className={`flex items-center gap-3 ${className}`}
    >
      <div className="relative w-7 h-7">
        {/* Caixa base */}
        <div className="absolute inset-0 border-2 border-gray-800 transform rotate-45"></div>
        
        {/* Elementos escapando da caixa */}
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-600 rounded-full transform scale-75 animate-pulse"></div>
        <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-red-400 transform rotate-45"></div>
        <div className="absolute top-1/2 -right-3 w-4 h-1 bg-red-500 transform -rotate-45"></div>
        
        {/* Elemento central dinâmico */}
        <div className="absolute inset-[4px] bg-gradient-to-br from-red-500 to-red-600 transform rotate-45 transition-transform hover:scale-110 hover:rotate-90 duration-300"></div>
      </div>
      <div className="flex flex-col">
        <span className="text-2xl font-light text-gray-900 leading-none tracking-widest uppercase">Scarlat</span>
        <span className="text-xs font-medium text-red-600 leading-none tracking-[0.2em] uppercase mt-0.5">Marketing</span>
      </div>
    </Link>
  );
}