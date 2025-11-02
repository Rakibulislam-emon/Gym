import { useLocation } from 'react-router-dom';

export default function BlogDetails() {
    const location = useLocation();
    const { item } = location?.state || {};

    if (!item) {
        return <div className="max-w-screen-xl mx-auto p-5 sm:p-8 md:p-12">No blog details available.</div>;
    }
 
    return (
       <div className='bg-black'>
            <div className="max-w-screen-xl mx-auto p-5 sm:p-8 md:p-12 ">
                <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[450px] bg-cover text-center overflow-hidden rounded-t-lg">
                    <img src={item.image} alt="Blog Image" className="w-full h-full object-cover" />
                </div>
                <div className="bg-white rounded-b-lg lg:rounded-b-none lg:rounded-r-lg flex flex-col justify-between leading-normal mt-3">
                    <div className="p-6">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl text-center py-4">{item.title}</h1>
                        <div className="flex flex-wrap items-center justify-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-500 mb-4">
                            <time dateTime={item.date} className="mr-8">{new Date(item.date).toLocaleDateString()}</time>
                            <div className="flex items-center gap-x-2">
                                <img src="https://randomuser.me/api/portraits/men/2.jpg" alt={item.author} className="h-6 w-6 flex-none rounded-full bg-white/10" />
                                {item.author}
                            </div>
                        </div>
                        <p className="text-base sm:text-lg text-gray-700">{item.description}</p>
                    </div>
                </div>
            </div>
      </div>
    );
}
