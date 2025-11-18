import React from "react";

interface CertificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
}

const CertificationModal: React.FC<CertificationModalProps> = ({
  isOpen,
  onClose,
  imageUrl,
}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
      onClick={onClose}
    >
      <div
        className="bg-gray-800 rounded-lg shadow-xl relative max-w-3xl w-full overflow-hidden"
        onClick={(e) => e.stopPropagation()} // Prevent click from closing modal
      >
        <div className="p-4">
          <img src={imageUrl} alt="Certificate" className="max-w-full h-auto rounded-md mx-auto" />
        </div>
        <button
          className="absolute top-2 right-2 text-white bg-gray-700 hover:bg-gray-600 rounded-full p-2 transition-colors"
          onClick={onClose}
          aria-label="Close"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CertificationModal;
