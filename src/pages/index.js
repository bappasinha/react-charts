import Head from 'next/head'
import TestChart from '~/components/test.js'

export default function Home() {
  return (
    <div>
      <Head>
        <title>COVID19 Charts</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>

      <div>
        <div className="container mx-auto">
          <h1 className="text-lg text-center m-4">Next.js + Tailwind + React-vis</h1>
          <p className="bg-indigo-600 text-white text-center">Next Tailwind React-vis template</p>
          <TestChart />
          <p className="inline-block mt-4 px-2 rounded-lg shadow-xl text-white bg-indigo-600 mx-1/2">Submit</p>
        </div>

        <div className="container py-12 flex mx-3/4">
          <img className="h-4" src="chartinsights.png" alt="ChartInsights Logo"/>
          <p className="text-xs font-thin italic">Powered by ChartInsights</p>
        </div>
      </div>
    </div>
  )
}
