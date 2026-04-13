import { useState } from "react";
import {
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
  FaCreditCard,
  FaUser,
  FaCalendarAlt,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

const cards = [
  {
    id: 1,
    name: "Visa",
    holder: "Muhammad Abdullah",
    number: "4111 1111 1111 1111",
    expiry: "12/28",
    cvv: "123",
  },
  {
    id: 2,
    name: "MasterCard",
    holder: "Muhammad Abdullah",
    number: "5500 0000 0000 0004",
    expiry: "11/27",
    cvv: "456",
  },
  {
    id: 3,
    name: "Amex",
    holder: "Muhammad Abdullah",
    number: "3400 0000 0000 009",
    expiry: "10/29",
    cvv: "789",
  },
];

const iconMap = {
  Visa: <FaCcVisa className="text-blue-600 text-2xl" />,
  MasterCard: <FaCcMastercard className="text-red-500 text-2xl" />,
  Amex: <FaCcAmex className="text-indigo-600 text-2xl" />,
};

const Credits = () => {
  const [showIndex, setShowIndex] = useState(null);

  const toggle = (id) => {
    setShowIndex((prev) => prev === id ? null : id);
  };

  return (
    <main className="max-w-7xl mx-auto p-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {cards.map((card) => (
        <div
          key={card.id}
          className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-5 border border-gray-100"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              {iconMap[card.name] || <FaCreditCard />}
              <h2 className="text-lg font-semibold text-gray-800">
                {card.name}
              </h2>
            </div>
          </div>

          <div className="space-y-3 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <FaUser className="text-gray-400" />
              <span>{card.holder}</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FaCreditCard className="text-gray-400" />
                <span>
                  {card.number}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <FaCalendarAlt className="text-gray-400" />
              <span>{card.expiry}</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FaLock className="text-gray-400" />
                <span>
                  {showIndex === card.id ? card.cvv : "•••"}
                </span>
              </div>
              <button
                onClick={() => toggle(card.id)}
                className="text-gray-500 hover:text-gray-800"
              >
                {showIndex === card.id ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
};

export default Credits;