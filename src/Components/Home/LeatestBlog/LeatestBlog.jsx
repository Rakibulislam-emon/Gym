import blog1 from '../../../assets/img/blog/blog-1.jpg'
import blog2 from '../../../assets/img/blog/blog-2.jpg'
import blog3 from '../../../assets/img/blog/blog-3.jpg'
export default function LeatestBlog() {
    const data = [
        {
            title: 'How to Improve Your Cardiovascular Health',
            img: blog1,
            author: 'John Doe',
            date: '2022-01-01',
            comments: 10,
            tags: "gym",
        },
        {
            title: 'Tips for Staying Fit and Healthy',
            img: blog2,
            author: 'Jane Smith',
            date: '2022-02-01',
            comments: 5,
            tags: "fitness"
        },
        {
            title: 'The Power of Yoga for Your Body and Mind',
            img: blog3,
            author: 'Mike Johnson',
            date: '2022-03-01',
            comments: 8,
             tags: "yoga"
        }
    ]
    return (
        <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
            <h1 className='text-center font-bold text-5xl mb-10'>LatestBlog</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
               { data.map((item,idx)=>  <div key={idx}
                    className="border-r border-b border-l border-gray-400 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
                    <img src={item.img} className="w-full mb-3" />
                    <div className="p-4 pt-2">
                        <div className="mb-8">
                            <p className="text-sm text-gray-600 flex items-center">
                                {item.date} <span className='ml-2 underline text-blue-700 font-medium'>{item.tags}</span>
                            </p>
                            <a href="#" className="text-gray-900 font-bold text-lg mb-2 hover:text-indigo-600 inline-block">{item.title}</a>
                        
                        </div>
                        <div className="flex items-center">
                            <a
                                href="#"><img className="w-10 h-10 rounded-full mr-4" src="https://tailwindcss.com/img/jonathan.jpg" alt="Avatar of Jonathan Reinink" /></a>
                            <div className="text-sm">
                                <a href="#" className="text-gray-900 font-semibold leading-none hover:text-indigo-600">Jonathan
                                    Reinink</a>
                            </div>
                        </div>
                    </div>
                </div>)
               }

               


            </div>
        </div>
    )
}
