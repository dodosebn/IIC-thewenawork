'use client';
import React from "react";
import Image from "next/image";
import { FaGlobe, FaInstagram, FaTiktok } from "react-icons/fa";
import Slider from "./slider/Slider";

const InfoFive = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Header Section */}
      <div className="mb-16">
        <span className="block text-sm uppercase tracking-wider text-gray-500 mb-2">
          Interiors, Travel | By The Spaces Team
        </span>
        <h1 className="text-4xl font-serif font-bold mb-4 leading-tight">
          This new Mediterranean restaurant in Miami has Michelin cred
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Chef Michael White helms the kitchen at Mika in Coral Gables
        </p>
        
        <div className="relative w-full h-[500px] mb-6">
          <Image
            src="/assets/images/temp/header-image-5.jpg"
            alt="header-image"
            fill
            className="object-cover"
            priority
          />
          <span className="absolute bottom-4 left-4 text-sm text-white/80 bg-black/50 px-2 py-1 rounded">
            Photography: Pablo Enriquez
          </span>
        </div>
        
        <div className="prose max-w-none">
          <p className="mb-6">
            A recipient of six Michelin stars over his career, the American chef Michael White is a safe 
            pair of hands in the kitchen. This fact, along with a burnished dining room in an olive-grove palette, 
            is what makes Mika a boon to the tidy white streets of Coral Gables in Miami.
          </p>
          <p className="mb-6">
            The elegant dining room was imagined by Bishop Design and Mika co-owner Alex Pirez in rustic raw woods 
            and wicker, made more sumptuous with the addition of velvet and leather.
          </p>
        </div>
      </div>
      
      {/* Slider Section */}
      <div className="mb-16">
        <Slider />
        <div className="prose max-w-none mt-8">
          <p className="mb-6">
            The Riviera-inspired restaurant, with its menu of seafood pastas and crudos, is a new hub on Ponce de Leon Boulevard.
          </p>
        </div>
      </div>
      
      {/* Single Image Section */}
      <div className="mb-16">
        <div className="relative w-full h-[500px] mb-4">
          <Image
            src="/assets/images/temp/sample-1.jpg"
            alt="home"
            fill
            className="object-cover"
          />
        </div>
        <span className="text-sm text-gray-500">Photography: Pablo Enriquez</span>
      </div>
      
      {/* Footer Share Section */}
      <div className="border-t border-b border-gray-200 py-8 mb-16">
        <p className="text-sm font-medium mb-4">Share this story</p>
        <div className="flex flex-wrap gap-4">
          <a href="#" className="flex items-center gap-2 text-sm hover:text-gray-600 transition-colors">
            <img src="/assets/icons/x-icon-black.png" className="w-5 h-5" alt="X" />
            <span>X</span>
          </a>
          <a href="#" className="flex items-center gap-2 text-sm hover:text-gray-600 transition-colors">
            <FaInstagram />
            <span>Instagram</span>
          </a>
          <a href="#" className="flex items-center gap-2 text-sm hover:text-gray-600 transition-colors">
            <FaTiktok />
            <span>Tiktok</span>
          </a>
          <a href="#" className="flex items-center gap-2 text-sm hover:text-gray-600 transition-colors">
            <FaGlobe />
            <span>Visit website</span>
          </a>
        </div>
      </div>
      
      {/* Recommended Products */}
      <div className="mb-16">
        <h2 className="text-xl font-medium mb-6">SUPPORT US BY BUYING ONE OF THESE PRODUCTS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="group cursor-pointer">
              <div className="relative h-60 mb-3 overflow-hidden rounded-lg">
                <Image
                  src="/assets/images/temp/sample-1.jpg"
                  alt="product"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <span className="text-sm text-gray-500">Interiors, News</span>
              <p className="font-medium mt-1">The cedar-clad hillside home is decidedly Canadian in style — woody</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-gray-50 p-8 rounded-lg">
        <h3 className="text-lg font-medium mb-6 text-center">SHARE WITH A FRIEND OR LOVED ONE</h3>
        <form className="max-w-lg mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <input 
                type="text" 
                placeholder="Sender's name" 
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black transition"
              />
            </div>
            <div>
              <input 
                type="text" 
                placeholder="Receiver's name" 
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black transition"
              />
            </div>
          </div>
          <div className="mb-6">
            <input 
              type="email" 
              placeholder="Receiver's email" 
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black transition"
            />
          </div>
          <button 
            type="submit"
            className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition-colors"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default InfoFive;