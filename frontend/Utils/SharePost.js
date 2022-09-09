import { FaInstagram, FaTwitter, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import {
  WhatsappShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from 'next-share';

const SharePost = ({slug}) => {
  console.log(slug)
  const startsWith = process.env.DEPLOYED_URL || 'http://localhost:3000'
  return (
    <div className="flex gap-2">
      <LinkedinShareButton url={`${startsWith}/post/${slug}`}>
        <FaLinkedin className="bg-[#525086] p-2 w-10 h-10 flex items-center justify-center rounded-full hover:cursor-pointer hover:bg-blue-600 text-white transition-colors"/>
      </LinkedinShareButton>
      
      <WhatsappShareButton url={`${startsWith}/post/${slug}`}>
        <FaWhatsapp className="bg-[#525086] p-2 w-10 h-10 flex items-center justify-center rounded-full hover:cursor-pointer hover:bg-green-500 text-white transition-colors"/>
      </WhatsappShareButton>
      
      <TwitterShareButton url={`${startsWith}/post/${slug}`}>
        <FaTwitter className="bg-[#525086] p-2 w-10 h-10 flex items-center justify-center rounded-full hover:cursor-pointer hover:bg-blue-500 text-white transition-colors"/>
      </TwitterShareButton>
    </div>
  )
}

export default SharePost