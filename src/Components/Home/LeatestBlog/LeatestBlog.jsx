import { Link } from 'react-router-dom';
import blog1 from '../../../assets/img/blog/blog-1.jpg';
import blog2 from '../../../assets/img/blog/blog-2.jpg';
import blog3 from '../../../assets/img/blog/blog-3.jpg';

export default function LeatestBlog() {
    const data = [
        {
            "title": "How to Improve Your Cardiovascular Health",
            "img": blog1,
            "author": "John Doe",
            "date": "2022-01-01",
            "tags": "gym"
        },
        {
            "title": "Tips for Staying Fit and Healthy",
            "img": blog2,
            "author": "Jane Smith",
            "date": "2022-02-01",
            "tags": "fitness"
        },
        {
            "title": "The Power of Yoga for Your Body and Mind",
            "img": blog3,
            "author": "Mike Johnson",
            "date": "2022-03-01",
            "tags": "yoga"
        }
    ];

    return (
        <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
            <h1 className='text-center font-bold text-5xl mb-10'>Latest Blog</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
                {data.map((item, idx) => (
                    <Link to="/blog" key={idx} className="border border-gray-400 bg-white rounded-lg flex flex-col justify-between leading-normal">
                        <img src={item.img} alt={item.title} className="w-full mb-3" />
                        <div className="p-4 pt-2">
                            <div className="mb-8">
                                <p className="text-sm text-gray-600 flex items-center">
                                    {item.date} <span className='ml-2 underline text-blue-700 font-medium'>{item.tags}</span>
                                </p>
                                <div className="text-gray-900 font-bold text-lg mb-2 hover:text-indigo-600">
                                    {item.title}
                                </div>
                            </div>
                            <div className="flex items-center">
                                <img className="w-10 h-10 rounded-full mr-4" src="https://tailwindcss.com/img/jonathan.jpg" alt={`Avatar of ${item.author}`} />
                                <div className="text-sm">
                                    <div className="text-gray-900 font-semibold leading-none hover:text-indigo-600">{item.author}</div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
