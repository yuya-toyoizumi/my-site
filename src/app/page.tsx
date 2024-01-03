import Image from 'next/image'

export default function Home() {
  return (
    <>
      <section className='my-8 sm:my-12'>
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
    </>
  );
}
