import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-8 sm:gap-12">
        <section>
          <div className="w-20 sm:w-24 h-20 sm:h-24 mb-4 sm:mb-8">
            <Image
              className="rounded-full border-2 border-slate-200"
              src="/images/profile-image.png"
              alt="Profile image"
              layout="responsive"
              width={100}
              height={100}
            />
          </div>
          <p>Hello, I am a software developer based in Japan.</p>
        </section>
        <section>
          <h3 className="text-xl font-bold my-2">Education</h3>
          <div className="flex flex-col sm:flex-row sm:gap-4">
            <p className="font-bold">2010-2014:</p>
            <p>Bachelor of Economics, Sophia university.</p>
          </div>
        </section>
        <section>
          <h3 className="text-xl font-bold my-2">Experience</h3>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col sm:flex-row sm:gap-4">
              <p className="font-bold">2014-2018:</p>
              <p>Corporate sales, Sony Group</p>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-4">
              <p className="font-bold">2019-2020:</p>
              <p>Travel</p>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-4">
              <p className="font-bold">2020-present:</p>
              <p>Software developer, currently freelancing</p>
            </div>
          </div>
        </section>
        <section>
          <h3 className="text-xl font-bold my-2">Loves</h3>
          <p>Traveling, Music, Art, Nature</p>
        </section>
        <section>
          <h3 className="text-xl font-bold my-2">On the web</h3>
          <div className="flex flex-col gap-2">
            <Link href="https://github.com/yuya-toyoizumi" target="_blank">
              GitHub
            </Link>
            <Link
              href="https://www.instagram.com/yuya_toyoizumi"
              target="_blank"
            >
              Instagram
            </Link>
            <Link href="https://x.com/yuyatoyoizumi" target="_blank">
              X
            </Link>
            <Link
              href="https://www.linkedin.com/in/yuya-toyoizumi"
              target="_blank"
            >
              LinkedIn
            </Link>
          </div>
        </section>
        <section>
          <h3 className="text-xl font-bold my-2">Contact</h3>
          <p>
            Feel free to reach out to me at{" "}
            <Link href="mailto:gbr.eng123@gmail.com">gbr.eng123@gmail.com</Link>{" "}
            or connect with me on social media.
          </p>
        </section>
      </div>
    </>
  );
}
