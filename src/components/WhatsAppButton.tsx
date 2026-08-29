import { FaWhatsapp } from "react-icons/fa";

export const WhatsAppButton = () => {
  const phoneNumber = "919877095889"; // India country code + your number
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hello%20Harpreet!`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Contact via WhatsApp"
    >
      <div className="relative">
        {/* Animated background circle */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Main button */}
        <div className="relative flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
          <FaWhatsapp size={28} className="text-white" />
        </div>
        
        {/* Tooltip on hover */}
        <div className="absolute bottom-full right-0 mb-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Chat with us on WhatsApp
          <div className="absolute top-full right-4 w-2 h-2 bg-gray-900 transform rotate-45" />
        </div>
      </div>
    </a>
  );
};
