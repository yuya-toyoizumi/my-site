import Image from 'next/image'

export default function Home() {
  return (
    <>
      <section className='my-12'>
        <Image
          className='rounded-full border-2 border-slate-200 mb-8'
          src='/images/profile-image.png'
          alt='Profile image'
          width={108}
          height={108}
        />
        <p>Hello, I am a software developer based in Japan.</p>
      </section>
    </>
  );
}
