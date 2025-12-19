import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import gym from "../../assets/gym.png";

const Foot = () => {
  return (
    <div className="bg-black text-white">
      <Footer container className="bg-black text-white border-t border-gray-800">
        <div className="w-full px-5 md:px-16 lg:px-32 py-8">
          {/* Top Section */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-8 sm:gap-0">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img className="w-10 h-10 object-contain" src={gym} alt="Fitness King Logo" />
              <p className="text-2xl text-teal-400 font-semibold">FITNESS KING</p>
            </div>

            {/* Links */}
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 sm:gap-8">
              <div>
                <Footer.Title title="About" className="text-teal-400" />
                <Footer.LinkGroup col>
                  <Footer.Link className="text-teal-300 hover:text-teal-400" href="#">View</Footer.Link>
                  <Footer.Link className="text-teal-300 hover:text-teal-400" href="#">History</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Follow Us" className="text-teal-400" />
                <Footer.LinkGroup col>
                  <Footer.Link className="text-teal-300 hover:text-teal-400" href="#">Github</Footer.Link>
                  <Footer.Link className="text-teal-300 hover:text-teal-400" href="#">Discord</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Legal" className="text-teal-400" />
                <Footer.LinkGroup col>
                  <Footer.Link className="text-teal-300 hover:text-teal-400" href="#">Privacy Policy</Footer.Link>
                  <Footer.Link className="text-teal-300 hover:text-teal-400" href="#">Terms & Conditions</Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-8 border-t border-teal-400 pt-5 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
            <Footer.Copyright 
              href="#" 
              by="FITNESS KING™" 
              year={2025} 
              className="text-gray-300" 
            />

            <div className="flex justify-center sm:justify-end space-x-6">
              <Footer.Icon href="#" icon={BsFacebook} className="hover:text-teal-400" />
              <Footer.Icon href="#" icon={BsInstagram} className="hover:text-teal-400" />
              <Footer.Icon href="#" icon={BsTwitter} className="hover:text-teal-400" />
              <Footer.Icon href="#" icon={BsGithub} className="hover:text-teal-400" />
              <Footer.Icon href="#" icon={BsDribbble} className="hover:text-teal-400" />
            </div>
          </div>
        </div>
      </Footer>
    </div>
  );
};

export default Foot;
