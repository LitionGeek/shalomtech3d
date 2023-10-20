import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../assets/css/ChatWhatsapp.css";

const ChatWhatsapp = () => {
  return (
    <div>
      <a href="https://wa.me/+541169660444" className="whatsapp-icon">
        <FontAwesomeIcon icon={faWhatsapp} />
      </a>
    </div>
  );
};

export default ChatWhatsapp;
