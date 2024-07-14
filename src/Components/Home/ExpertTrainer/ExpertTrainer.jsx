import img1 from "../../../assets/img/trainer/about-trainer-1.jpg";
import img2 from "../../../assets/img/trainer/about-trainer-2.jpg";
import img3 from "../../../assets/img/trainer/about-trainer-3.jpg";

export default function ExpertTrainer() {
    const data = [
        {
            name: "Patrick Cortez",
            image: img1,
            position: "Leader",
            description: "non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
        },
        {
            name: "Alexander Rose",
            image: img2,
            position: "Gym Coach",
            description: "non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
        },
        {
            name: "Jessica Fitzgerald",
            image: img3,
            position: "Dance trainer",
            description: "non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
        }
    ];

    return (
        <div className="px-4 md:px-8 lg:px-16 bg-[#f5f5f5] pt-10 mt-10 pb-40">
            <h1 className="text-5xl font-bold text-center my-20">Expert Trainer</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {data.map((item, idx) => (
                    <div key={idx} className="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-blue-400 relative">
                        <div className="relative">
                            <img className="w-full h-64 object-cover" src={item.image} alt="Profile Image" />
                        </div>
                        <div className="p-4">
                            <h1 className="text-center my-2">
                                <span className="text-2xl font-bold">{item.name}</span><br />
                                <span className="text-sm font-semibold text-[#f38d83]">{item.position}</span>
                            </h1>
                            <p className="text-sm text-gray-600">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
