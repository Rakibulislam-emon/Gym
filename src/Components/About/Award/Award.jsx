import award from '../../../assets/img/award.jpg';

export default function Award() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col items-center justify-center gap-y-10 lg:flex-row lg:gap-x-16">
        <div className="w-full lg:w-1/2">
          <img className="object-cover w-full h-auto rounded-lg" src={award} alt="Award" />
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col justify-center gap-y-8 lg:pl-8">
            <h1 className="font-bold text-4xl lg:text-5xl">BEST GYM AWARD</h1>
            <p className="text-gray-700 leading-relaxed">
              Lorem ipsum proin gravida nibh vel velit auctor aliquet. Aenean pretium
              sollicitudin, nascetur auci elit consequat ipsutissem niuis sed odio sit amet
              nibh vulputate cursus a amet. Etiam rhoncus. Maecenas tempus, tellus eget
              condimentum rhoncus, gravida quam semper libero sit amet. Etiam rhoncus. Maecenas
              tempus, tellus eget condimentum rhoncus, gravida quam semper libero sit amet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
