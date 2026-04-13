import {
  FaLock,
  FaShieldAlt,
  FaKey,
  FaGithub,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const footerData = [
  {
    title: "Product",
    links: ["Features", "Security", "Pricing", "Updates"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Blog", "Contact"],
  },
  {
    title: "Support",
    links: ["Help Center", "FAQs", "Privacy Policy", "Terms"],
  },
];

const socialLinks = [
  { icon: <FaGithub />, name: "GitHub" },
  { icon: <FaTwitter />, name: "Twitter" },
  { icon: <FaLinkedin />, name: "LinkedIn" },
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-white text-xl font-semibold">
            <FaLock />
            <span>PasswordVault</span>
          </div>
          <p className="text-sm text-gray-400">
            Securely store, manage, and protect your passwords with advanced
            encryption and privacy-first design.
          </p>
          <div className="flex gap-4 pt-2">
            <FaShieldAlt className="text-green-400 text-lg" />
            <FaKey className="text-yellow-400 text-lg" />
          </div>
        </div>

        {footerData.map((section, index) => (
          <div key={index}>
            <h3 className="text-white font-semibold mb-4">
              {section.title}
            </h3>
            <ul className="space-y-2 text-sm">
              {section.links.map((link, i) => (
                <li
                  key={i}
                  className="hover:text-white cursor-pointer transition hover:underline hover:underline-offset-4 hover:decoration-gray-500 hover:font-serif"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h3 className="text-white font-semibold mb-4">Connect</h3>
          <div className="flex gap-4">
            {socialLinks.map((item, index) => (
              <div
                key={index}
                className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition cursor-pointer"
              >
                {item.icon}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 text-center text-sm text-gray-500 py-4">
        © {new Date().getFullYear()} PasswordVault. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;