import { FC } from "react"

const ServiceCard : FC<{ icon:string, name:string }> = ({name, icon}) => {
  return (
    <div
    className="group bg-[#01013A] text-white p-6 rounded-lg shadow-lg transition-transform duration-500 transform hover:scale-105 relative overflow-hidden"
   >
    
      <div
        className={`absolute -top-6 -left-6 text-6xl text-center opacity-10 group-hover:opacity-20 transition-all duration-500`}
      >
        {icon}
      </div>
    

    <div className="relative z-10">
      <div className="text-3xl text-center mb-4 group-hover:animate-bounce">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className="text-sm opacity-80">
        We ensure the highest quality service for{" "}
        {name.toLowerCase()}.
      </p>
    </div>
  </div>
  )
}

export default ServiceCard