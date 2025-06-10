import React from "react";
import { Link } from "react-router-dom"
const Home = () => {

    const homePageImages = [
        {
            id:1,
            image:"/assets/images/shoes1.jpg",
            price:4000,
            name:"CR7 Adidas GT2 Elite"
        },
          {
            id:2,
            image:"/assets/images/shoes2.jpg",
            price:4000,
            name:"Nike Phantom GT2 Elite"
        },
          {
            id:3,
            image:"/assets/images/shoes3.jpg",
            price:4000,
            name:"Nike Phantom GT2 Elite"
        }
    ]
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section with Animated Background */}
      <section className="relative h-screen flex items-center justify-center bg-gray-900 overflow-hidden">
        {/* Animated football pattern in background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-white rounded-full"></div>
          <div className="absolute top-1/3 right-1/3 w-12 h-12 bg-white rounded-full"></div>
          <div className="absolute bottom-1/4 right-1/4 w-14 h-14 bg-white rounded-full"></div>
          <div className="absolute bottom-1/3 left-1/3 w-10 h-10 bg-white rounded-full"></div>
        </div>
        
        {/* Video background or dynamic image slider would go here in production */}
        <div className="absolute inset-0 bg-[url('/dynamic-football-action.jpg')] bg-cover bg-center opacity-70"></div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center px-4">
          <div className="bg-gradient-to-r from-black/70 to-transparent p-8 rounded-xl backdrop-blur-sm inline-block">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              DOMINATE THE PITCH
            </h1>
            <p className="text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto">
              Precision-engineered football boots for every playing style. 
              Experience unmatched traction, comfort, and ball control.
            </p>
            <div className="flex gap-4 justify-center">
              <Link to = "/products"> 
                <button className="  bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                SHOP COLLECTION
              </button>
              </Link>
              <button className="border-2 border-white text-white hover:bg-white hover:text-black font-bold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
                NEW ARRIVALS
              </button>
            </div>
          </div>
        </div>
        
        {/* Scrolling indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            <span className="border-b-4 border-yellow-500 pb-2">FEATURED BOOTS</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {homePageImages.map((item) => (
              <div key={item.id} className="group relative overflow-hidden rounded-xl bg-gray-700 hover:bg-gray-600 transition-all duration-500 h-96">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                <div className="relative z-20 h-full flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{item.name}</h3>
                  <p className="text-yellow-400 mb-4">{item.price}</p>
                  <button className="bg-yellow-500 text-black font-medium py-2 px-4 rounded-full w-full hover:bg-yellow-600 transition">
                    View Detail
                  </button>
                </div>
                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-yellow-500 rounded-full opacity-20 group-hover:opacity-30 transition-all duration-700"></div>
                <img 
                  src={item.image} 
                  alt="Football boot" 
                  className="absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-64 object-contain group-hover:scale-110 transition-all duration-500"
                />
                <p>{item.image}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
       
      {/* Performance Features Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              ENGINEERED FOR <span className="text-yellow-400">PERFORMANCE</span>
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Our football boots incorporate cutting-edge technology to give you the competitive edge on any surface.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {icon: "⚡", title: "Explosive Traction", desc: "Multi-stud configurations for quick turns and acceleration"},
              {icon: "🎯", title: "Precision Control", desc: "Textured surfaces for enhanced ball touch and control"},
              {icon: "🛡️", title: "Ankle Support", desc: "Dynamic collar systems for stability and comfort"}
            ].map((feature, index) => (
              <div key={index} className="bg-gray-700 p-8 rounded-xl hover:bg-gray-600 transition-all duration-300 group">
                <div className="text-4xl mb-4 group-hover:text-yellow-400 transition-all duration-300">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 bg-[url('/stadium-lights.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            READY TO ELEVATE YOUR GAME?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of players who trust our footwear for their most important matches.
          </p>
          <button className="xs:px-6 xs:py-4 bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-10 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-xl">
            SHOP ALL FOOTBALL BOOTS
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;