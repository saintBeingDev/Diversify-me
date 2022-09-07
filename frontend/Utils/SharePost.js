import { FaInstagram, FaTwitter, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import {
  WhatsappShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from 'next-share';

const SharePost = () => {
  return (
    <div className="flex gap-2">
      <WhatsappShareButton url={'http://localhost:3000'}>
        <FaWhatsapp className="bg-[#525086] p-2 w-10 h-10 flex items-center justify-center rounded-full hover:cursor-pointer hover:bg-blue-500 text-white"/>
      </WhatsappShareButton>
        

        <LinkedinShareButton url={'http://localhost:3000'}>
          <FaLinkedin className="bg-[#525086] p-2 w-10 h-10 flex items-center justify-center rounded-full hover:cursor-pointer hover:bg-blue-500 text-white"/>
        </LinkedinShareButton>
        
        <TwitterShareButton url={'http://localhost:3000'}>
          <FaTwitter className="bg-[#525086] p-2 w-10 h-10 flex items-center justify-center rounded-full hover:cursor-pointer hover:bg-blue-500 text-white"/>
        </TwitterShareButton>
    </div>
  )
}

export default SharePost