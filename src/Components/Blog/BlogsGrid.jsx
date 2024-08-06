import { useNavigate } from 'react-router-dom';
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
    const navigate = useNavigate()
    const data = [
        {
            id: 1,
            title: "The Ultimate Guide to Building Muscle",
            description: "Building muscle requires a combination of the right workouts, nutrition, and consistency. In this comprehensive guide, we'll cover the most effective exercises, the importance of protein intake, and how to create a sustainable muscle-building routine. Learn how to avoid common mistakes and stay motivated on your journey to a stronger, healthier body. Understanding the physiology behind muscle growth can help you tailor your workouts for maximum efficiency. This guide also includes advice on rest and recovery, supplements, and advanced techniques like progressive overload and periodization. Whether you're a beginner or an experienced lifter, you'll find valuable tips to enhance your muscle-building efforts.",
            date: "2023-07-01",
            author: "John Doe",
            image: blog1
        },
        {
            id: 2,
            title: "Top 10 Cardio Exercises for Weight Loss",
            description: "Cardio exercises are essential for burning calories and losing weight. This article explores the top 10 cardio exercises that are both effective and enjoyable. From running and cycling to high-intensity interval training (HIIT), discover the best ways to incorporate cardio into your fitness routine and achieve your weight loss goals. We also discuss the benefits of each exercise, how to perform them correctly, and how to combine different cardio workouts for a balanced fitness plan. Additionally, learn how to track your progress, set realistic goals, and stay motivated. Whether you prefer indoor or outdoor activities, there's a cardio exercise for everyone.",
            date: "2023-07-05",
            author: "Jane Smith",
            image: blog2
        },
        {
            id: 3,
            title: "Yoga for Flexibility and Relaxation",
            description: "Yoga is an excellent practice for improving flexibility and reducing stress. This detailed guide covers various yoga poses that target different muscle groups, helping you to enhance your flexibility and find relaxation. Learn the benefits of each pose, how to perform them correctly, and tips for incorporating yoga into your daily routine. Beyond physical benefits, yoga also promotes mental well-being through mindfulness and meditation techniques. Explore different styles of yoga, such as Hatha, Vinyasa, and Yin, and find out how to create a personalized yoga practice that suits your lifestyle and fitness goals. Discover the transformative power of yoga for both body and mind.",
            date: "2023-07-10",
            author: "Emma Brown",
            image: blog3
        },
        {
            id: 4,
            title: "The Importance of a Balanced Diet",
            description: "A balanced diet is crucial for overall health and fitness. This article delves into the components of a balanced diet, including the right mix of carbohydrates, proteins, fats, vitamins, and minerals. Understand how to create meal plans that support your fitness goals and learn about the role of hydration in maintaining optimal health. We also address common dietary myths and provide practical tips for making healthier food choices. Discover how to read nutrition labels, manage portion sizes, and plan meals that are both nutritious and delicious. By adopting a balanced diet, you can improve your energy levels, boost your immune system, and enhance your overall well-being.",
            date: "2023-07-15",
            author: "Michael Johnson",
            image: blog4
        },
        {
            id: 5,
            title: "Home Workouts for Busy Professionals",
            description: "Staying fit can be challenging for busy professionals. This article provides practical tips and quick home workout routines that can be done with minimal equipment. Learn how to maximize your time and stay consistent with your fitness goals, even with a hectic schedule. Discover exercises that target all major muscle groups and keep you in shape. We also explore the benefits of short, high-intensity workouts that can fit into your daily routine. Additionally, find advice on setting up a home gym, staying motivated, and balancing work-life commitments with your fitness goals. With these strategies, you can achieve a healthy and active lifestyle despite a busy schedule.",
            date: "2023-07-20",
            author: "Sophia Davis",
            image: blog5
        },
        {
            id: 6,
            title: "How to Stay Motivated to Exercise",
            description: "Maintaining motivation to exercise regularly can be difficult. This article explores strategies to keep yourself motivated, including setting realistic goals, tracking your progress, and finding a workout routine that you enjoy. Learn how to overcome common obstacles and stay committed to your fitness journey. We also discuss the importance of creating a supportive environment, whether through workout buddies, fitness communities, or online resources. Find out how to celebrate your achievements, no matter how small, and stay inspired by setting new challenges. By understanding the psychological aspects of motivation, you can build a sustainable fitness habit that lasts.",
            date: "2023-07-25",
            author: "James Wilson",
            image: blog6
        },
        {
            id: 7,
            title: "Strength Training for Beginners",
            description: "Strength training is essential for building muscle and improving overall fitness. This beginner's guide covers the basics of strength training, including proper form, key exercises, and how to create a balanced workout plan. Learn how to start your strength training journey safely and effectively, and avoid common beginner mistakes. We also provide tips on selecting the right equipment, understanding the principles of progressive overload, and incorporating rest and recovery into your routine. Discover how to tailor your workouts to your specific goals, whether it's building muscle, increasing strength, or enhancing athletic performance. With the right approach, you can achieve impressive results and enjoy the benefits of strength training.",
            date: "2023-07-30",
            author: "Olivia Martinez",
            image: blog7
        },
        {
            id: 8,
            title: "HIIT Workouts: Benefits and Routines",
            description: "High-Intensity Interval Training (HIIT) is a popular and effective workout method. This article explains the benefits of HIIT, including improved cardiovascular health and increased calorie burn. Discover various HIIT routines that you can try, ranging from beginner to advanced levels, and learn how to incorporate HIIT into your fitness program. We also discuss the science behind HIIT, how it compares to other forms of exercise, and tips for maximizing your HIIT sessions. Whether you have 10 minutes or an hour, HIIT can be adapted to fit your schedule and fitness level. Learn how to combine HIIT with other workouts for a comprehensive fitness plan that delivers results.",
            date: "2023-08-04",
            author: "Liam Anderson",
            image: blog8
        },
        {
            id: 9,
            title: "Recovery Tips After Intense Workouts",
            description: "Proper recovery is essential for preventing injuries and improving performance. This article provides tips on how to recover effectively after intense workout sessions. Learn about the importance of rest, nutrition, hydration, and techniques such as stretching and foam rolling. Discover how to create a recovery plan that supports your fitness goals. We also explore the role of active recovery, the benefits of massage therapy, and the importance of listening to your body. By prioritizing recovery, you can enhance your performance, reduce the risk of injury, and maintain a consistent fitness routine. Find out how to balance your workouts with adequate recovery for optimal results.",
            date: "2023-08-09",
            author: "Ava Thompson",
            image: blog9
        }
    ];

    const handleBlogDetails = (item) => {
        navigate('/blog/details', { state: { item } });
    }

    return (
        <div className='mb-10'>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-8 ">
          <div className="mx-auto mt-8 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {data.map((item, idx) => (
              <div key={idx} onClick={() => handleBlogDetails(item)}>
                <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 dark:bg-gray-700 px-8 py-8 pb-8 pt-80 sm:pt-48 lg:pt-80 h-80">
                  <img src={item.image} alt={item.title} className="absolute inset-0 -z-10 h-full w-full object-cover" />
                  <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                 
                 
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                    <p ><span className="absolute inset-0"></span>{item.title}</p>
                  </h3>
                  <p className="mt-5 text-sm leading-6 text-gray-400">{item?.description?.split(' ').slice(0, 20).join(' ')}</p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}
