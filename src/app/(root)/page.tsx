import LSide from "@/c/global/LSide";
import RSide from "@/c/global/RSide";


const Home: React.FC = (): JSX.Element => {
  return (
    <div className='flex h-full w-full items-center justify-center bg-slate-950'>
      <div className='relative flex h-full w-full max-w-screen-xl text-slate-100'>
        <LSide />
        {/* <main>Feed</main>
        <section><RSide /></section> */}
      </div>
    </div>
  );
};

export default Home;
