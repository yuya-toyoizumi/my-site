import Image from 'next/image'
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className='flex flex-col gap-8 sm:gap-12'>
        <section>
          <div className='w-20 sm:w-24 h-20 sm:h-24 mb-4 sm:mb-8'>
            <Image
              className='rounded-full border-2 border-slate-200'
              src='/images/profile-image.png'
              alt='Profile image'
              layout='responsive'
              width={100}
              height={100}
            />
          </div>
          <p>Hello, I am a software developer based in Japan.</p>
        </section>
        <section>
          <h3 className='text-xl font-bold my-2'>Contact</h3>
          <p>Contact me at <Link href='mailto:gbr.eng123@gmail.com'>gbr.eng123@gmail.com</Link>.</p>
        </section>
      </div>
    </>
  );
}
