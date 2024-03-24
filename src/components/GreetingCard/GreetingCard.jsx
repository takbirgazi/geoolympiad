import PropTypes from 'prop-types';
function GreetingCard({cradInfo}) {
    const {image, title, desc} = cradInfo;
    return (
        <div className="grid grid-cols-12 gap-5 bg-white p-4 border">
            <div className='lg:col-span-2 col-span-12'>
                <div className='flex items-center justify-center'>
                    <img className='p-3 border rounded-full bg-gray-200' src={image} alt="" />
                </div>
            </div>
            <div className='lg:col-span-10 col-span-12'>
                <h2 className='text-xl mb-2 font-semibold'>{title}</h2>
                <p>{desc}</p>
            </div>
        </div>
    );
}

export default GreetingCard;

GreetingCard.propTypes = {
    cradInfo: PropTypes.object,
}