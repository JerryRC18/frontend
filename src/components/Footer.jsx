import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
      <footer className="py-10 bg-[#154360]">
        <div className="flex justify-center  my-5">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00df9a] hover:text-white mr-4"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/jesus-gerardo-robles-cuellar/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00df9a] hover:text-white mr-4"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/JerryRC18"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00df9a] hover:text-white"
          >
            <FaGithub size={24} />
          </a>
        </div>
        <p className="text-center text-gray-300 font-bold">
          Jesus Robles {''}
          <span className="text-[#00df9a]">Veterinaria</span>
        </p>
      </footer>
    );
  };
  
  export default Footer;
  