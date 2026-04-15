import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#244D3F] text-white py-12 px-4">
      <div className="max-w-5xl mx-auto text-center">
        
        {/* Logo / Title */}
        <h2 className="text-4xl md:text-5xl font-semibold mb-4">
          KeenKeeper
        </h2>

        {/* Description */}
        <p className="text-gray-200 text-[16px] tracking-normal md:text-base max-w-xl mx-auto mb-8">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        {/* Social Links */}
        <div className="mb-10">
          <p className="text-sm text-gray-200 mb-4">Social Links</p>

          <div className="flex justify-center gap-4">
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center bg-white text-black rounded-full hover:scale-110 transition"
            >
              
              <FaYoutube />
            </a>

            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center bg-white text-black rounded-full hover:scale-110 transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center bg-white text-black rounded-full hover:scale-110 transition"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-200">
          
          <p>© 2026 KeenKeeper. All rights reserved.</p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;