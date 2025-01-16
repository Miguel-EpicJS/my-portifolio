import Image from 'next/image'

export default function Introduction() {
  return (
    <section id="about" className="my-16 text-center">
      <Image
        src="https://avatars.githubusercontent.com/u/51725685?v=4"
        alt="Miguel Martinez"
        width={150}
        height={150}
        className="rounded-full mx-auto mb-4"
      />
      <h1 className="text-4xl font-bold mb-4">Miguel Martinez</h1>
      <h2 className="text-2xl text-gray-600 mb-8">QA Professional</h2>
      <p className="max-w-2xl mx-auto text-gray-700">
        Experienced QA professional with a passion for ensuring software quality. 
        Specialized in automated testing, performance testing, and continuous integration.
      </p>
    </section>
  )
}

