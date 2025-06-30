import { Instagram, Phone } from 'lucide-react';

export default function FloatingSocialButtons() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end gap-4 z-50">
      <a
        href="https://wa.me/5511947189164"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center w-14 h-14 rounded-full bg-green-500 hover:w-48 hover:rounded-full transition-all duration-300 shadow-lg overflow-visible"
      >
        <span className="absolute -top-2 -right-2 flex size-5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex size-5 rounded-full bg-red-600 text-white text-xs font-bold items-center justify-center shadow-md">
            1
          </span>
        </span>


        <div className="flex items-center justify-center w-14 h-14">
          <Phone className="w-12 h-6 text-white" />
        </div>

        <span className="ml-2 text-white text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Fale com a Gente
        </span>
      </a>

      <a
        href="https://www.instagram.com/familiabonsfluidos/"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center w-14 h-14 rounded-full bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 hover:w-48 hover:rounded-full transition-all duration-300 shadow-lg overflow-visible"
      >
        <div className="flex items-center justify-center w-14 h-14">
          <Instagram className="w-12 h-6 text-white" />
        </div>

        <span className="ml-2 text-white text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Siga no Instagram
        </span>
      </a>
    </div>
  );
}
