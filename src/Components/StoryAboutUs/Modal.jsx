/* eslint-disable react/prop-types */
// Modal.js
import { ImCancelCircle } from "react-icons/im";
const Modal = ({ isOpen, onClose, videoSrc }) => {
    if (!isOpen) return null;

    return (
        <div className=" relative inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white p-6 max-w-screen-md rounded-lg overflow-hidden container mx-auto h-[340px] w-[520px] absolute bottom-20 left-80">
                <button
                    className="absolute text-white top-0 right-0 z-50"
                    onClick={onClose}
                >
                    <ImCancelCircle size={30} />

                </button>
                <div className="aspect-w-16 aspect-h-9">
                    <iframe
                        className="absolute inset-0 w-full h-full"
                        src={videoSrc}
                        title="YouTube Video"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            </div>
        </div>
    );
};

export default Modal;
