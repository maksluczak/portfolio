import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const ContactRotation = () => {
  const contacts = [
    { icon: faFacebook, link: 'https://www.facebook.com/profile.php?id=100015286782095' },
    { icon: faLinkedin, link: 'https://www.linkedin.com/in/maksymilian-łuczak-69a10b331' },
    { icon: faGithub, link: 'https://github.com/maksluczak?tab=repositories' },
  ];

  const animationDuration = 12;
  const totalItems = contacts.length;
  const delayIncrement = animationDuration / totalItems;

  return (
    <div className="contact-rotation-container">

      {contacts.map((item, index) => (
        <a
          key={index}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="rotation-item"
          style={{ animationDelay: `-${index * delayIncrement}s` }}
        >
          <FontAwesomeIcon icon={item.icon} color="#08CB00" />
        </a>
      ))}
    </div>
  );
}

export default ContactRotation;