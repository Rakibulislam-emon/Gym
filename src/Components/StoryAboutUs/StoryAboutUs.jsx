import { useState } from "react";
import Buttons from "../../Shared/Buttons/Buttons";
import aboutImg from "../../assets/img/about-pic.jpg";
import playPng from "../../assets/img/genarel/play.png";
import Modal from "./Modal"; // Import your Modal component

export default function StoryAboutUs() {
  const [showModal, setShowModal] = useState(false); // State to toggle modal display

  // Function to open modal
  const openModal = () => {
    setShowModal(true);
  };

  // Function to close modal
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <main className="">
      <div className="mx-auto my-10 grid max-w-screen-xl gap-y-8 sm:grid-cols-2 lg:grid-cols-2">
        <div className="group cursor mx-4 overflow-hidden rounded-2xl bg-white shadow-xl duration-200 hover:-translate-y-4">
          <div className="flex h-70 relative">
            <img
              src={aboutImg}
              className="group-hover:scale-110 h-full w-full object-cover duration-200"
              alt="About Image"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src={playPng}
                alt="Play Icon"
                onClick={openModal}
                style={{ cursor: "pointer" }}
              />
            </div>
          </div>
        </div>
        <div className="mx-2 rounded-xl bg-gray-100">
          <h1>STORY ABOUT US</h1>
          <p>
            Lorem ipsum proin gravida nibh vel velit auctor aliquet. Aenean
            pretium sollicitudin, nascetur auci elit consequat ipsutissem niuis
            sed odio sit amet nibh vulputate cursus a amet. Etiam rhoncus.
            Maecenas tempus, tellus eget condimentum rhoncus, gravida quam
            semper libero sit amet. Etiam rhoncus. Maecenas tempus, tellus eget
            condimentum rhoncus, gravida quam semper libero sit amet.
          </p>
          <Buttons text={"Read More"} />
        </div>
      </div>
      <Modal
        isOpen={showModal}
        onClose={closeModal}
        videoSrc="https://www.youtube.com/embed/zJwbZX4i-N4?autoplay=1"
      />
    </main>
  );
}
