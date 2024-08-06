import { Link } from 'react-router-dom'
import blog1 from '../../../assets/img/blog/blog-1.jpg'
import blog2 from '../../../assets/img/blog/blog-2.jpg'
import blog3 from '../../../assets/img/blog/blog-3.jpg'
export default function LeatestBlog() {
    const data = [
        {
            "title": "How to Improve Your Cardiovascular Health",
            "img": blog1,
            "author": "John Doe",
            "date": "2022-01-01",
            "tags": "gym",
            "description": "Cardiovascular health is crucial for overall well-being and longevity. Improving it involves a combination of regular exercise, a balanced diet, and healthy lifestyle choices. This article delves into various strategies to enhance cardiovascular health, starting with the importance of aerobic exercises. Activities such as running, swimming, and cycling can significantly improve heart health by increasing heart rate and boosting circulation. Regular physical activity helps to strengthen the heart muscle, lower blood pressure, and improve cholesterol levels.\n\nAlongside exercise, diet plays a vital role in cardiovascular health. Incorporating heart-healthy foods like fruits, vegetables, whole grains, lean proteins, and healthy fats can help manage weight and reduce the risk of heart disease. Foods rich in omega-3 fatty acids, such as salmon and flaxseeds, have been shown to reduce inflammation and lower the risk of heart disease.\n\nLifestyle changes are also essential for maintaining good cardiovascular health. Avoiding smoking and excessive alcohol consumption, managing stress through mindfulness practices, and getting adequate sleep are critical components of a heart-healthy lifestyle. This article provides practical tips on how to implement these changes in daily life, offering guidance on setting realistic goals and tracking progress.\n\nUnderstanding and managing risk factors such as high blood pressure, high cholesterol, and diabetes is crucial for preventing cardiovascular disease. Regular check-ups with a healthcare provider can help monitor these risk factors and provide personalized recommendations.\n\nOverall, improving cardiovascular health is a proactive and ongoing process. By adopting a comprehensive approach that includes exercise, diet, and lifestyle changes, individuals can enhance their heart health and lead a more active and fulfilling life."
        },
        {
            "title": "Tips for Staying Fit and Healthy",
            "img": blog2,
            "author": "Jane Smith",
            "date": "2022-02-01",
            "tags": "fitness",
            "description": "Staying fit and healthy is a multifaceted goal that requires consistent effort and dedication. This article provides valuable tips on how to maintain fitness and overall health through a combination of exercise, nutrition, and lifestyle habits.\n\nOne of the key aspects of staying fit is incorporating regular physical activity into daily life. Whether it’s through structured workouts, recreational sports, or simple activities like walking or cycling, staying active helps to improve cardiovascular health, build strength, and enhance mental well-being. The article emphasizes the importance of finding activities that you enjoy and can sustain in the long term.\n\nNutrition is another critical component of maintaining health. A balanced diet rich in fruits, vegetables, lean proteins, and whole grains supports overall wellness and provides the energy needed for physical activity. The article offers practical advice on meal planning, portion control, and making healthier food choices.\n\nAdditionally, staying hydrated and getting enough sleep are essential for overall health. Proper hydration supports bodily functions and helps to prevent fatigue, while quality sleep is crucial for recovery and energy levels. The article provides tips on how to stay hydrated and establish a healthy sleep routine.\n\nThe article also covers the importance of setting realistic fitness goals and tracking progress. By setting achievable goals and celebrating milestones, individuals can stay motivated and maintain a positive outlook on their fitness journey.\n\nOverall, staying fit and healthy is about adopting a balanced approach that includes regular exercise, healthy eating, and lifestyle habits. By following these tips, individuals can improve their quality of life and achieve long-term wellness."
        },
        {
            "title": "The Power of Yoga for Your Body and Mind",
            "img": blog3,
            "author": "Mike Johnson",
            "date": "2022-03-01",
            "tags": "yoga",
            "description": "Yoga is a holistic practice that offers numerous benefits for both the body and mind. This article explores the transformative power of yoga and how it can enhance physical fitness, mental clarity, and overall well-being.\n\nYoga promotes physical health by improving flexibility, strength, and balance. Through a series of postures and stretches, practitioners can increase their range of motion, build muscle strength, and enhance posture. The article highlights various yoga poses that target different muscle groups and offers practical tips for beginners.\n\nBeyond physical benefits, yoga is known for its positive impact on mental health. The practice incorporates breathing exercises and mindfulness techniques that help reduce stress, anxiety, and depression. The article discusses how regular yoga practice can lead to improved emotional resilience, better focus, and a greater sense of inner peace.\n\nThe article also covers the importance of incorporating yoga into a daily routine and how to find a style that suits individual needs. Whether through guided classes or home practice, yoga can be adapted to fit different lifestyles and preferences.\n\nOverall, yoga is a powerful tool for achieving a balanced and healthy life. By integrating yoga into daily routines, individuals can experience improved physical health, mental clarity, and a deeper connection to themselves."
        }
    ]
    
    return (
        <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
            <h1 className='text-center font-bold text-5xl mb-10'>LatestBlog</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
               { data.map((item,idx)=>  <Link to={'/blog'} key={idx}
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
                </Link>)
               }

               


            </div>
        </div>
    )
}
