import Image from "next/image";
import Link from "next/link";

export default function Works() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-bold">Works</h2>
        <div>
          <div className="flex flex-wrap justify-center sm:justify-around gap-8">
            <div className="flex flex-col gap-2 items-start">
              <h3 className="font-bold">sake no kiroku (酒の記録)</h3>
              <div className="w-80 sm:w-80">
                <Image
                  className="border border-slate-200"
                  src="/images/sake-no-kiroku.png"
                  alt="sake no kiroku image"
                  layout="responsive"
                  width={16}
                  height={9}
                />
              </div>
              <p className="w-80">
                This is a drinking diary app that allows you to easily record
                your alcohol consumption and visualize your drinking and alcohol
                intake.
              </p>
              <div className="w-full flex justify-end">
                <Link
                  href="https://apps.apple.com/jp/app/酒の記録/id1661597567"
                  target="_blank"
                >
                  See more -&gt;
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-2 items-start">
              <h3 className="font-bold">rhythmo</h3>
              <div className="w-80 sm:w-80">
                <Image
                  className="border border-slate-200"
                  src="/images/rhythmo.png"
                  alt="sake no kiroku image"
                  layout="responsive"
                  width={16}
                  height={9}
                />
              </div>
              <p className="w-80">
                This is a habit-forming app with personalized tracking and a
                heat map to visualize progress, perfect for various goals like
                exercise and reading.
              </p>
              <Link
                className="w-full flex justify-end"
                href="https://apps.apple.com/jp/app/rhythmo/id6447278189"
                target="_blank"
              >
                See more -&gt;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
