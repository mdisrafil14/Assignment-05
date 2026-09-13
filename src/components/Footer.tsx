import logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="mt-20 border-t bg-white">
      <div className="mx-auto grid w-[92%] max-w-7xl gap-10 py-12 md:grid-cols-4">
        
        {/* Brand */}
        <div className="md:col-span-2">
          <img src={logo} alt="Dev Stack" className="w-24" />

          <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">
            Curated tools, technologies, and resources for developers
            building modern software.
          </p>

          <div className="mt-5 flex gap-5 text-xs text-slate-600">
            <a href="#">GitHub</a>
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>

        {/* Product */}
        <div>
          <h3 className="text-xs font-bold uppercase text-slate-700">
            Product
          </h3>

          <div className="mt-4 space-y-3 text-sm text-slate-400">
            <a href="#">Home</a>
            <a href="#" className="block">Technologies</a>
            <a href="#" className="block">Projects</a>
          </div>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-xs font-bold uppercase text-slate-700">
            Company
          </h3>

          <div className="mt-4 space-y-3 text-sm text-slate-400">
            <a href="#" className="block">About</a>
            <a href="#" className="block">Contact</a>
            <a href="#" className="block">Careers</a>
          </div>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-xs font-bold uppercase text-slate-700">
            Legal
          </h3>

          <div className="mt-4 space-y-3 text-sm text-slate-400">
            <a href="#" className="block">Privacy Policy</a>
            <a href="#" className="block">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mx-auto flex w-[92%] max-w-7xl items-center justify-between border-t py-5 text-xs text-slate-400">
        <p>© 2026 Dev Stack. All rights reserved.</p>

        <div className="flex gap-6">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;