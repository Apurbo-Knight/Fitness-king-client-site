import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import gym from "../../assets/gym.png"

const Foot = () => {
  return (
    <div className="bg-black">
      <Footer container className="bg-black text-white border-t border-gray-800 ">
        <div className="w-full">
          <div className="grid w-full pb-5 justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
            <div className="flex items-center gap-2">
              <img className="w-10" src={gym} alt="" />
              <p className="text-2xl text-teal-400 font-semibold">FITNESS KING</p>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
              <div>
                <Footer.Title title="about" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#">View</Footer.Link>
                  <Footer.Link href="#">History</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Follow us" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#">Github</Footer.Link>
                  <Footer.Link href="#">Discord</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Legal" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#">Privacy Policy</Footer.Link>
                  <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
          
          <div className="w-full sm:flex sm:items-center sm:justify-between border-t pt-5 border-teal-400">
            <Footer.Copyright href="#" by="FITNESS KING™" year={2025} />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <Footer.Icon href="#" icon={BsFacebook} />
              <Footer.Icon href="#" icon={BsInstagram} />
              <Footer.Icon href="#" icon={BsTwitter} />
              <Footer.Icon href="#" icon={BsGithub} />
              <Footer.Icon href="#" icon={BsDribbble} />
            </div>
          </div>
        </div>
      </Footer>
    </div>
  );
};

export default Foot;
