import { data } from '../data';

export const getServerSideProps = async () => {
  const shoes = data;
  return { props: { shoes } };
};

const Home = ({ shoes }) => {
  return (
    <div className='p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
      {shoes &&
        shoes.map((shoe) => (
          <div key={shoe.id} className='rounded shadow-lg h-full relative'>
            <img
              className='w-full object-center object-cover h-48'
              src={shoe.image}
              alt={`${shoe.brand} ${shoe.model}`}
            />
            <div className='px-6 py-4 min-h-[120px]'>
              <div className='font-bold text-md mb-2'>
                {shoe.brand} {shoe.model}
              </div>
              <p className='text-gray-700 text-base'>{shoe.description}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Home;
