import React from 'react';
import { Link } from 'react-router';

const Card = ({ friend }) => {
    return (
        <Link to={`/friend/${friend.id}`}
              key={friend.id}
              className="bg-white rounded-lg shadow-sm p-6 text-center"
            >
              <img
                src={friend.picture}
                alt={friend.name}
                className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
              />

              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                {friend.name}
              </h4>

              <p className="text-sm text-gray-500 mb-3">
                {friend.days_since_contact}d ago
              </p>
              
              <div className="flex flex-wrap gap-2 justify-center mb-3">
                {friend.tags &&
                  friend.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full text-xs font-semibol bg-green-100 text-green-800 uppercase"
                    >
                      {tag}
                    </span>
                  ))}
              </div>
              <div>
                <span
                  className={`px-4 py-2 rounded-full text-xs font-semibold capitalize ${
                    friend.status === "overdue"
                      ? "bg-red-500 text-white"
                      : friend.status === "on-track"
                        ? "bg-green-800 text-white"
                        : "bg-orange-400 text-white"
                  }`}
                >
                  {friend.status === "overdue"
                    ? "Overdue"
                    : friend.status === "active"
                      ? "On Track"
                      : friend.status}
                </span>
              </div>
            </Link>
    );
};

export default Card;