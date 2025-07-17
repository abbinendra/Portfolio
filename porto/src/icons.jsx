import "./icons.css";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Icons() {
  return (
    <div className="icons">
      <a href="https://www.linkedin.com/in/abbinendra/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="icon" />
      </a>
      <a href="https://github.com/abbinendra" target="_blank" rel="noopener noreferrer">
        <FaGithub className="icon" />
      </a>
      <a href="https://x.com/abbinendra" target="_blank" rel="noopener noreferrer">
        <FaTwitter className="icon" />
      </a>
      <a href="mailto:abhinendra0211@gmail.com">
        <MdEmail className="icon" />
      </a>
    </div>
  );
}