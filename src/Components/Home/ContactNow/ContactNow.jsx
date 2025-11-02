import img from '../../../assets/img/banner-person.png'
import bg from '../../../assets/img/banner-bg.jpg'
import Buttons from '../../../Shared/Buttons/Buttons'
export default function ContactNow() {
  return (
    <div style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        // height: '100vh',
        // padding: '100px 0'
    }}>
       <div className="flex justify-center items-center  ">
    <div className="text-center text-white py-20">
        <h1 className="text-3xl font-bold mb-4">GET TRAINING TODAY</h1>
        <p className="mb-4">Gimply dummy text of the printing and typesetting industry.<br />Lorem Ipsum has been the industry’s standard.</p>
        <Buttons text={'Contact Now'} />
    </div>
    <div className="ml-4 pt-16">
        <img src={img} alt="" className="w-96 h-auto" />
    </div>
</div>

    </div>
  )
}
