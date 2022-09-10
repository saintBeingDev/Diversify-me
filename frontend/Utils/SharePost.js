import { FaInstagram, FaTwitter, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import {
  WhatsappShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from 'next-share';

const SharePost = ({slug}) => {
  const origin = typeof window !== 'undefined' && window.location.origin ? window.location.origin : '';
  return (
    <div className="flex gap-2">
      <LinkedinShareButton url={`${origin}/post/${slug}`}>
        <FaLinkedin className="bg-[#525086] p-2 w-10 h-10 flex items-center justify-center rounded-full hover:cursor-pointer hover:bg-blue-600 text-white transition-colors"/>
      </LinkedinShareButton>
      
      <WhatsappShareButton url={`${origin}/post/${slug}`}>
        <FaWhatsapp className="bg-[#525086] p-2 w-10 h-10 flex items-center justify-center rounded-full hover:cursor-pointer hover:bg-green-500 text-white transition-colors"/>
      </WhatsappShareButton>
      
      <TwitterShareButton url={`${origin}/post/${slug}`}>
        <FaTwitter className="bg-[#525086] p-2 w-10 h-10 flex items-center justify-center rounded-full hover:cursor-pointer hover:bg-blue-500 text-white transition-colors"/>
      </TwitterShareButton>
    </div>
  )
}

export default SharePost