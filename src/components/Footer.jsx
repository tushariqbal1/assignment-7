import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-emerald-950 text-emerald-100 py-12 mt-auto">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="flex justify-center items-center gap-3 mb-4">
          <div className="w-9 h-9 bg-emerald-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl">K</div>
          <span className="font-semibold text-3xl tracking-tight text-white">KeenKeeper</span>
        </div>
        
        <p className="text-emerald-300 max-w-md mx-auto mb-8">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        <div className="flex justify-center gap-6 text-2xl mb-8">
          <FaInstagramSquare className="text-black bg-white p-1 rounded-full cursor-pointer" />
          <FaFacebook className="text-black bg-white p-1 rounded-full cursor-pointer"/>
          <FaXTwitter className="text-black bg-white p-1 rounded-full cursor-pointer"/>
        </div>

        <div className="text-xs text-emerald-400 pt-6 border-t border-emerald-900 flex justify-between">
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          <p>Privacy Policy           Terms of Service           Cookies</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;