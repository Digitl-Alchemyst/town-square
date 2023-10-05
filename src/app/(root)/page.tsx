import LSide from '@/c/global/LSide';
import RSide from '@/c/global/RSide';
import BulletinBoard from '@/c/global/BulletinBoard';

const Home: React.FC = (): JSX.Element => {
  return (
    <div className='flex h-full w-full items-center justify-center '>
      <div className='relative flex h-full w-full max-w-screen-xl text-slate-100'>
        <LSide />
        <BulletinBoard />
        <RSide />
      </div>
    </div>
  );
};

export default Home;
