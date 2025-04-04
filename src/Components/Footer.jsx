import List from './List'
import Constants from '../assets/constants';
const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-white to-blue-100 text-gray-700 py-8 px-6 font-primary">
      <div className="max-w-7xl lg:mx-60 flex flex-col justify-between">
        {/* Logo */}
        <div className="flex justify-start mb-6">
          <a href="/">
            <img
              src="https://supreme-group.vercel.app/static/media/logo.68f5b8493efb88f7cd65756bf67a1f5b.svg"
              alt="logo"
              width="144"
              height="44    "
            />
          </a>
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm space-x-2">
        <List data={Constants} />
        </div>

        {/* Copyright & Address */}
        <div className="md:flex md:justify-between items-center mt-32 mb-8 text-xs font-semibold text-gray-600 max-sm:text-center max-md:text-center">
          <p>&copy;2024. All Rights Reserved.</p>
          <p className='max-sm:hidden'>Supreme House, 110, 16th Road, Chembur, Mumbai – 400071.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
