
import CountUp from 'react-countup';

export default function Stats() {
  return (
    <div className="bg-gradient-to-r from-[#ec4554] to-[#f36a39] px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 text-white mb-20">
      <div className="grid grid-cols-2 row-gap-8 md:grid-cols-4">
        <div className="text-center md:border-r">
          <CountUp end={250} duration={2.5} suffix="+" redraw={true}>
            {({ countUpRef }) => (
              <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl" ref={countUpRef} />
            )}
          </CountUp>
          <p className="text-sm font-medium tracking-widest text-white uppercase lg:text-base">
            Programs Offered
          </p>
        </div>
        <div className="text-center md:border-r">
          <CountUp end={5} duration={2.5} redraw={true}>
            {({ countUpRef }) => (
              <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl" ref={countUpRef} />
            )}
          </CountUp>
          <p className="text-sm font-medium tracking-widest text-white uppercase lg:text-base">
            Prime Locations
          </p>
        </div>
        <div className="text-center md:border-r">
          <CountUp end={10000} duration={2.5} redraw={true}>
            {({ countUpRef }) => (
              <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl" ref={countUpRef} />
            )}
          </CountUp>
          <p className="text-sm font-medium tracking-widest text-white uppercase lg:text-base">
            Dedicated Members
          </p>
        </div>
        <div className="text-center">
          <CountUp end={50} duration={2.5} redraw={true}>
            {({ countUpRef }) => (
              <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl" ref={countUpRef} />
            )}
          </CountUp>
          <p className="text-sm font-medium tracking-widest text-white uppercase lg:text-base">
            Experienced Coaches
          </p>
        </div>
      </div>
    </div>
  );
}
