import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen p-12 lg:p-24 bg-zinc-700 text-white flex-col">
      <div className="flex flex-row w-full">
        {/* First row content (if any) */}
      </div>
      <div className="hidden lg:flex lg:h-[17vh] w-full"></div>
      <div className="flex flex-row w-full">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-6xl text-white font-semibold sm:text-7xl">
              <span className="hidden lg:block">Kumo Labs</span>
              <span className="block lg:hidden">
                Kumo
                <br />
                Labs
              </span>
            </h2>
            <p className="mt-8 text-base leading-6 text-gray-300 max-w-full">
              Showcasing innovative ideas & machine learning applications that{" "}
              <br></br>
              positively impact communities and individuals.
            </p>

            <svg height="10" width="100%" className="mt-6">
              <line
                x1="0"
                y1="0"
                x2="100%"
                y2="0"
                style={{ stroke: "rgb(244, 204, 119)", strokeWidth: 5 }}
              />
            </svg>

            <div className="group relative w-64">
              <p className="mt-6 font-medium text-lg leading-6 text-gray-300 max-w-full">
                <a href="#" className="relative inline-block ">
                  <span className="block opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                    Projects
                  </span>
                  <span className="whitespace-nowrap absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-amber-300">
                    Coming Soon
                  </span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex flex-row w-full invisible lg:visible">
        <div className="basis-1/2"></div>
        <div className="basis-1/2 flex justify-center lg:justify-end">
          <Image
            src="/cloud_export.png"
            alt="Cloud"
            width={700}
            height={300}
            className="lg:mr-0"
            priority={true}
          />
        </div>
        </div>
      </div> */}
      <div className="fixed bottom-0 left-0 p-6">
        <a href="https://www.calvinkorver.com">
          <p className="text-xs">© Calvin</p>
        </a>
      </div>
    </main>
  );
}
