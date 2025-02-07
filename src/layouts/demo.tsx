import React from 'react'
import { Link } from 'react-router-dom'

const Demo: React.FC = () => {
  return (
    <div className="relative flex h-screen w-full select-none flex-col items-center justify-center overflow-hidden py-4">
      <div
        className="relative z-10 flex w-full flex-col items-center justify-between px-5 xl:px-0"
        style={{ opacity: 1, transform: 'none' }}
      >
        <div className="flex flex-col items-center">
          <div
            className="mb-8 h-24 w-24 rounded-lg border border-gray-200/20 p-2 shadow-lg backdrop-blur-sm dark:border-gray-600/50"
            style={{ opacity: 1, transform: 'none' }}
          >
            <img src="../src/assets/react.svg" alt="Chat Nio Logo" className="h-full w-full object-contain" />
          </div>
          <h1
            className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-center text-4xl font-bold tracking-tight text-transparent dark:from-white dark:via-gray-300 dark:to-white sm:text-6xl dark:text-base-content"
            style={{ opacity: 1, transform: 'none' }}
          >
            Cursor
          </h1>
          <p
            className="mt-6 text-center text-xl font-medium text-gray-600 dark:text-gray-400"
            style={{ opacity: 1, transform: 'none' }}
          >
            集成 LLM 环境的{' '}
            <strong>
              <span className="relative">
                一站式
                <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path
                    d="M0,5 Q25,9 50,5 T100,5"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>
              </span>
            </strong>
            企业解决方案
          </p>
          <div className="mt-10 flex justify-center gap-x-6" style={{ opacity: 1, transform: 'none' }}>
            {/* <a href="/docs/introduction" className="group flex items-center rounded-full bg-black px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-gray-900 dark:bg-white dark:text-black dark:hover:bg-gray-200">
              了解更多
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right ml-2 h-3.5 w-3.5">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
            <a href="https://chatnio.net" target="_blank" rel="noopener noreferrer" className="group flex items-center rounded-full border border-gray-200 px-4 py-1.5 text-sm font-medium text-gray-700 backdrop-blur-sm transition-colors hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800" style={{ transform: 'none' }}>
              在线体验
              <svg className="ml-2 h-3.5 w-3.5" fill="none" height="1em" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="1em">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                <path d="M15 3h6v6" />
                <path d="M10 14L21 3" />
              </svg>
            </a> */}
            <Link to={'/download'} className="btn btn-primary">
              立即开始
            </Link>
            <Link to={'https://github.com/fromsko'} className="btn btn-outline">
              了解更多
            </Link>
          </div>
        </div>
        {/* <div className="mt-8 flex items-center justify-center" style={{ opacity: 1, transform: 'none' }}>
          <a
            href="https://github.com/zmh-program/chatnio"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:from-yellow-500 hover:to-orange-600"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                clipRule="evenodd"
              />
            </svg>
            <span>GitHub Trending No.1 Repo Of The Day</span>
          </a>
        </div> */}
      </div>
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 w-full fill-gray-400/30 stroke-gray-400/30 opacity-40 [mask-image:radial-gradient(500px_circle_at_center,white,transparent)] inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
      >
        <defs>
          <pattern id=":r0:" width="40" height="40" patternUnits="userSpaceOnUse" x="-1" y="-1">
            <path d="M.5 40V.5H40" fill="none" strokeDasharray="0" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#:r0:)" />
        <svg x="-1" y="-1" className="overflow-visible">
          <rect
            width="39"
            height="39"
            x="601"
            y="1321"
            fill="currentColor"
            strokeWidth="0"
            opacity="0.2042706404317869"
          />
          <rect
            width="39"
            height="39"
            x="81"
            y="1281"
            fill="currentColor"
            strokeWidth="0"
            opacity="0.07580339607375208"
          />
          <rect
            width="39"
            height="39"
            x="641"
            y="1041"
            fill="currentColor"
            strokeWidth="0"
            opacity="0.02556898606417235"
          />
          <rect
            width="39"
            height="39"
            x="161"
            y="1161"
            fill="currentColor"
            strokeWidth="0"
            opacity="0.1431125692470232"
          />
          <rect
            width="39"
            height="39"
            x="281"
            y="1001"
            fill="currentColor"
            strokeWidth="0"
            opacity="0.2512817332899431"
          />
          <rect width="39" height="39" x="601" y="81" fill="currentColor" strokeWidth="0" opacity="0.351506257764413" />
          <rect
            width="39"
            height="39"
            x="41"
            y="1201"
            fill="currentColor"
            strokeWidth="0"
            opacity="0.4250097441399703"
          />
          <rect
            width="39"
            height="39"
            x="321"
            y="1121"
            fill="currentColor"
            strokeWidth="0"
            opacity="0.4834353821206605"
          />
          <rect
            width="39"
            height="39"
            x="761"
            y="561"
            fill="currentColor"
            strokeWidth="0"
            opacity="0.49976938280451577"
          />
          <rect
            width="39"
            height="39"
            x="201"
            y="161"
            fill="currentColor"
            strokeWidth="0"
            opacity="0.47141298481437843"
          />
          <rect
            width="39"
            height="39"
            x="81"
            y="1121"
            fill="currentColor"
            strokeWidth="0"
            opacity="0.4161703632125864"
          />
          <rect
            width="39"
            height="39"
            x="641"
            y="561"
            fill="currentColor"
            strokeWidth="0"
            opacity="0.32529979616811033"
          />
          <rect
            width="39"
            height="39"
            x="681"
            y="1321"
            fill="currentColor"
            strokeWidth="0"
            opacity="0.22604589762340765"
          />
          <rect
            width="39"
            height="39"
            x="241"
            y="481"
            fill="currentColor"
            strokeWidth="0"
            opacity="0.11580947415495757"
          />
          <rect width="39" height="39" x="321" y="361" fill="currentColor" strokeWidth="0" opacity="0" />
          <rect width="39" height="39" x="241" y="1001" fill="currentColor" strokeWidth="0" opacity="0" />
          <rect width="39" height="39" x="881" y="201" fill="currentColor" strokeWidth="0" opacity="0" />
          <rect width="39" height="39" x="1" y="761" fill="currentColor" strokeWidth="0" opacity="0" />
          <rect
            width="39"
            height="39"
            x="521"
            y="521"
            fill="currentColor"
            strokeWidth="0"
            opacity="0.05150875986146275"
          />
          <rect
            width="39"
            height="39"
            x="601"
            y="1361"
            fill="currentColor"
            strokeWidth="0"
            opacity="0.14210949510743376"
          />
          <rect
            width="39"
            height="39"
            x="401"
            y="521"
            fill="currentColor"
            strokeWidth="0"
            opacity="0.24139555379224475"
          />
          <rect
            width="39"
            height="39"
            x="721"
            y="201"
            fill="currentColor"
            strokeWidth="0"
            opacity="0.320018378624809"
          />
          <rect
            width="39"
            height="39"
            x="1"
            y="1241"
            fill="currentColor"
            strokeWidth="0"
            opacity="0.39319752431765664"
          />
          <rect
            width="39"
            height="39"
            x="281"
            y="321"
            fill="currentColor"
            strokeWidth="0"
            opacity="0.4521711997076636"
          />
          <rect
            width="39"
            height="39"
            x="441"
            y="401"
            fill="currentColor"
            strokeWidth="0"
            opacity="0.4887963746004971"
          />
          <rect
            width="39"
            height="39"
            x="681"
            y="1081"
            fill="currentColor"
            strokeWidth="0"
            opacity="0.4999528807675233"
          />
          <rect
            width="39"
            height="39"
            x="761"
            y="721"
            fill="currentColor"
            strokeWidth="0"
            opacity="0.48400055766978767"
          />
          <rect
            width="39"
            height="39"
            x="321"
            y="1321"
            fill="currentColor"
            strokeWidth="0"
            opacity="0.4487244969495805"
          />
          <rect
            width="39"
            height="39"
            x="161"
            y="681"
            fill="currentColor"
            strokeWidth="0"
            opacity="0.39564019087993074"
          />
          <rect
            width="39"
            height="39"
            x="481"
            y="921"
            fill="currentColor"
            strokeWidth="0"
            opacity="0.3203714453120483"
          />
        </svg>
      </svg>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black" style={{ opacity: 1 }}>
        <div
          className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-40 blur-[100px]"
          style={{ opacity: 0.4, transform: 'none' }}
        />
        <div
          className="absolute left-1/3 right-0 top-1/3 -z-10 h-[250px] w-[250px] rounded-full bg-cyan-400 opacity-40 blur-[100px]"
          style={{ opacity: 0.4, transform: 'none' }}
        />
      </div>
    </div>
  )
}

export default Demo
