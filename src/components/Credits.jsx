import { useState, useContext } from "react";
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
import CreditContext from "../Contexts/creditContext";

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
  const { deleteCredit, credits } = useContext(CreditContext);
  const [editingCredit, setEditingCredit] = useState("");

  const toggle = (id) => {
    setShowIndex((prev) => prev === id ? null : id);
  };

  return (
    <main className="max-w-7xl mx-auto p-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <CreateCard type="add" Ind={1} />
      {editingCredit && (
        <CreateCard type="edit" Ind={editingCredit} />
      )}
      {credits.map((card) => (
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
            <div className="flex flex-col">
              <button
                onClick={() => setEditingCredit(card.id)}
                className="px-4 py-2 bg-blue-500 text-white rounded mb-2">Edit</button>
              <button
                onClick={() => deleteCredit(card.id)}
                className="px-4 py-2 bg-red-500 text-white rounded">Delete</button>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
};

export default Credits;

function CreateCard({ type, Ind }) {
  const isEditing = type === "edit";
  const { credits, addCredit, updateCredit } = useContext(CreditContext);

  const current = isEditing
    ? credits.find((c) => c.id === Ind)
    : null;

  const [name, setName] = useState(current ? current.name : "");
  const [holder, setHolder] = useState(current ? current.holder : "");
  const [number, setNumber] = useState(current ? current.number : "");
  const [expiry, setExpiry] = useState(current ? current.expiry : "");
  const [cvv, setCvv] = useState(current ? current.cvv : "");
  const [showCvv, setShowCvv] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEditing && current) {
      updateCredit(current.id, { name, holder, number, expiry, cvv });
      setEditingCredit(null);
      window.location.reload();
      return;
    }

    addCredit({
      id: Date.now(),
      name,
      holder,
      number,
      expiry,
      cvv,
    });

    setName("");
    setHolder("");
    setNumber("");
    setExpiry("");
    setCvv("");
    setEditingCredit(null);
    window.location.reload();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-5 border border-gray-100"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          {iconMap[name] || <FaCreditCard />}
          <input
            type="text"
            placeholder="Card Type"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="text-lg font-semibold text-gray-800 outline-none bg-transparent"
          />
        </div>
      </div>

      <div className="space-y-3 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <FaUser className="text-gray-400" />
          <input
            type="text"
            placeholder="Card Holder"
            value={holder}
            onChange={(e) => setHolder(e.target.value)}
            className="w-full bg-transparent outline-none"
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 w-full">
            <FaCreditCard className="text-gray-400" />
            <input
              type="text"
              placeholder="Card Number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              className="w-full bg-transparent outline-none"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <FaCalendarAlt className="text-gray-400" />
          <input
            type="text"
            placeholder="MM/YY"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
            className="w-full bg-transparent outline-none"
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 w-full">
            <FaLock className="text-gray-400" />
            <input
              type={showCvv ? "text" : "password"}
              placeholder="CVV"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              className="w-full bg-transparent outline-none"
            />
          </div>
          <button
            type="button"
            onClick={() => setShowCvv((prev) => !prev)}
            className="text-gray-500 hover:text-gray-800"
          >
            {showCvv ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
      </div>

      <button
        type="submit"
        className="mt-5 w-full bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-800 transition"
      >
        {isEditing ? "Update" : "Add"}
      </button>
    </form>
  );
}