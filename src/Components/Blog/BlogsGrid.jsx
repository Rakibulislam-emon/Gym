import blog1 from '../../assets/img/blog/blog-1.jpg';
import blog2 from '../../assets/img/blog/blog-2.jpg';
import blog3 from '../../assets/img/blog/blog-3.jpg';
import blog4 from '../../assets/img/blog/blog-4.jpg';
import blog5 from '../../assets/img/blog/blog-5.jpg';
import blog6 from '../../assets/img/blog/blog-6.jpg';
import blog7 from '../../assets/img/blog/blog-7.jpg';
import blog8 from '../../assets/img/blog/blog-8.jpg';
import blog9 from '../../assets/img/blog/blog-9.jpg';
// import BlogsCard from './Blogscard';

export default function BlogsGrid() {
    const data = [
        {
            title: "The Ultimate Guide to Building Muscle",
            description: "Building muscle requires a combination of the right workouts, nutrition, and consistency. In this comprehensive guide, we'll cover the most effective exercises, the importance of protein intake, and how to create a sustainable muscle-building routine. Learn how to avoid common mistakes and stay motivated on your journey to a stronger, healthier body.",
            date: "2023-07-01",
            author: "John Doe",
            image: blog1
        },
        {
            title: "Top 10 Cardio Exercises for Weight Loss",
            description: "Cardio exercises are essential for burning calories and losing weight. This article explores the top 10 cardio exercises that are both effective and enjoyable. From running and cycling to high-intensity interval training (HIIT), discover the best ways to incorporate cardio into your fitness routine and achieve your weight loss goals.",
            date: "2023-07-05",
            author: "Jane Smith",
            image: blog2
        },
        {
            title: "Yoga for Flexibility and Relaxation",
            description: "Yoga is an excellent practice for improving flexibility and reducing stress. This detailed guide covers various yoga poses that target different muscle groups, helping you to enhance your flexibility and find relaxation. Learn the benefits of each pose, how to perform them correctly, and tips for incorporating yoga into your daily routine.",
            date: "2023-07-10",
            author: "Emma Brown",
            image: blog3
        },
        {
            title: "The Importance of a Balanced Diet",
            description: "A balanced diet is crucial for overall health and fitness. This article delves into the components of a balanced diet, including the right mix of carbohydrates, proteins, fats, vitamins, and minerals. Understand how to create meal plans that support your fitness goals and learn about the role of hydration in maintaining optimal health.",
            date: "2023-07-15",
            author: "Michael Johnson",
            image: blog4
        },
        {
            title: "Home Workouts for Busy Professionals",
            description: "Staying fit can be challenging for busy professionals. This article provides practical tips and quick home workout routines that can be done with minimal equipment. Learn how to maximize your time and stay consistent with your fitness goals, even with a hectic schedule. Discover exercises that target all major muscle groups and keep you in shape.",
            date: "2023-07-20",
            author: "Sophia Davis",
            image: blog5
        },
        {
            title: "How to Stay Motivated to Exercise",
            description: "Maintaining motivation to exercise regularly can be difficult. This article explores strategies to keep yourself motivated, including setting realistic goals, tracking your progress, and finding a workout routine that you enjoy. Learn how to overcome common obstacles and stay committed to your fitness journey.",
            date: "2023-07-25",
            author: "James Wilson",
            image: blog6
        },
        {
            title: "Strength Training for Beginners",
            description: "Strength training is essential for building muscle and improving overall fitness. This beginner's guide covers the basics of strength training, including proper form, key exercises, and how to create a balanced workout plan. Learn how to start your strength training journey safely and effectively, and avoid common beginner mistakes.",
            date: "2023-07-30",
            author: "Olivia Martinez",
            image: blog7
        },
        {
            title: "HIIT Workouts: Benefits and Routines",
            description: "High-Intensity Interval Training (HIIT) is a popular and effective workout method. This article explains the benefits of HIIT, including improved cardiovascular health and increased calorie burn. Discover various HIIT routines that you can try, ranging from beginner to advanced levels, and learn how to incorporate HIIT into your fitness program.",
            date: "2023-08-04",
            author: "Liam Anderson",
            image: blog8
        },
        {
            title: "Recovery Tips After Intense Workouts",
            description: "Proper recovery is essential for preventing injuries and improving performance. This article provides tips on how to recover effectively after intense workout sessions. Learn about the importance of rest, nutrition, hydration, and techniques such as stretching and foam rolling. Discover how to create a recovery plan that supports your fitness goals.",
            date: "2023-08-09",
            author: "Ava Thompson",
            image: blog9
        }
    ];

    return (
        <div className='mb-10'>
          

            <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-8">
                <div className="mx-auto mt-8 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {data.map((item, idx) => (
                        <article key={idx} className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 dark:bg-gray-700 px-8 py-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
                            <img src={item.image} alt={item.title} className="absolute inset-0 -z-10 h-full w-full object-cover" />
                            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                            <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
                            <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                                <time dateTime={item.date} className="mr-8">{new Date(item.date).toLocaleDateString()}</time>
                                <div className="-ml-4 flex items-center gap-x-4">
                                    <svg viewBox="0 0 2 2" className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
                                        <circle cx="1" cy="1" r="1"></circle>
                                    </svg>
                                    <div className="flex gap-x-2.5">
                                        <img src="https://randomuser.me/api/portraits/men/2.jpg" alt={item.author} className="h-6 w-6 flex-none rounded-full bg-white/10" />
                                        {item.author}
                                    </div>
                                </div>
                            </div>
                            <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                                <a href="/tech-blog/post1"><span className="absolute inset-0"></span>{item.title}</a>
                            </h3>
                            <p className="mt-5 text-sm leading-6 text-gray-400">{item.description}</p>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}
