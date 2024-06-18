import { image } from '@config/constant/image';
import quotes from '@data/quotes/quotes.json';

const LandingRight = () => {
    return (
        <div className="grid grid-cols-1 gap-8">
            {quotes.map((item, index) => {
                const imageUrl = image[item.image.url];

                return (
                    <div
                        key={index}
                        className="flex flex-col md:flex-row items-center justify-center text-black rounded-lg"
                    >

                        <div className="w-full flex justify-center md:justify-start   md:w-1/2">
                            <img
                                src={imageUrl}
                                alt={item.image.alt}
                                className="w-52 h-52 object-contain"
                            />
                        </div>
                        <div className="w-full text-center md:text-left  md:w-2/2 p-6">
                            <p className="text-lg  italic">{item.quote.text}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default LandingRight;
