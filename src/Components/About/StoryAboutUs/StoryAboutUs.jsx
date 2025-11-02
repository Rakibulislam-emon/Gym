import { useState } from "react";
import aboutImg from "../../../assets/img/about-pic.jpg";
import playPng from "../../../assets/img/genarel/play.png";
import Modal from "../../StoryAboutUs/Modal";
import png from '../../../assets/img/about-signature.png'
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

    const isPCScreen = () => {
        // Function to check if screen width is large enough to consider as PC screen
        return window.innerWidth >= 1024; // Example threshold for PC screen width
    };

    return (
        <main className="my-20">
            <div className="mx-auto my-10 grid max-w-screen-xl gap-y-8 sm:grid-cols-2 lg:grid-cols-2">
                <div className="group cursor mx-4 overflow-hidden rounded-2xl bg-white shadow-xl duration-200 ">
                    <div className="flex h-70 relative">
                        <img
                            src={aboutImg}
                            className=" h-full w-full object-cover "
                            alt="About Image"
                        />
                        {isPCScreen() ? (
                            <div className="absolute inset-0 flex items-center justify-center">
                                <img
                                    src={playPng}
                                    alt="Play Icon"
                                    onClick={openModal}
                                    style={{ cursor: "pointer" }}
                                />
                            </div>
                        ) : null}
                    </div>
                </div>
                <div className="mx-20 rounded-xl space-y-10 ">
                    <h1 className="text-5xl font-bold">STORY ABOUT US</h1>
                    <p>
                        Lorem ipsum proin gravida nibh vel velit auctor aliquet. Aenean
                        pretium sollicitudin, nascetur auci elit consequat ipsutissem niuis
                        sed odio sit amet nibh vulputate cursus a amet. Etiam rhoncus.
                        Maecenas tempus, tellus eget condimentum rhoncus, gravida quam
                        semper libero sit amet. Etiam rhoncus. Maecenas tempus, tellus eget
                        condimentum rhoncus, gravida quam semper libero sit amet.
                    </p>
                    <img src={png} alt="" />
                    <span className="font-bold "><span className="text-2xl">Lettie Chavez</span>
                        <br />
                        <span className="text-[#F57533]">CEO - Founder</span>
                    </span>
                </div>
            </div>
            {isPCScreen() && (
                <Modal
                    isOpen={showModal}
                    onClose={closeModal}
                    // videoSrc="https://www.youtube.com/embed/zJwbZX4i-N4?autoplay=1"
                    videoSrc="https://www.youtube.com/embed/fvFQU6NvJo8"
                />
            )}
        </main>
    );
}
