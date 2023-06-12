import { headers, cookies } from 'next/headers';
import { Suspense } from 'react'
import { Component1, Component2 } from './component'

function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// function Component1() {
//   // await delay(5000)
//   // const [count, setCount] = useState(0);
//   return <div>Component1</div>
// }

async function getUser() {
  // const headersList = headers()
  // const cookiesList = cookies()
  console.log('getData >')
  await delay(1000)
  try {
    const userUri = `${process.env.API_URI}/user.json`
    console.log(userUri)
    const res = await fetch(userUri, {
      credentials: 'include',
      cache: 'no-store',
    })
    // console.log('getData: res', res.headers)
    const data = await res.json()
    console.log('getData: data', data)
    return data
  } catch (e) {
    console.log(e)
    throw e
  }
}

export default async function Dashboard({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  console.log('Dashboard >', searchParams)

  const headersList = headers()
  console.log('headersList - ', headersList)
  const cookiesList = cookies()
  console.log('cookiesList - ', cookiesList.toString())
  const referer = headersList.get('referer')
  const user = await getUser()
  return <>
    <h1>Dashboard</h1>
    <div>Referer: {referer}</div>
    <div>{JSON.stringify(user)}</div>
    <Suspense fallback={<p>Loading Component1...</p>}>
      <Component1 />
    </Suspense>
    <Component2 />
  </>;
}
