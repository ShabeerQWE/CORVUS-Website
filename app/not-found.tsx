import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        Page Not Found
      </h2>
      <p className="text-lg md:text-xl mb-8 max-w-2xl text-gray-300">
        Sorry, we couldn&apos;t find the page you&apos;re looking for.
      </p>
      <Link 
        href="/" 
        className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium hover:opacity-90 transition-opacity"
      >
        Return Home
      </Link>
    </div>
  )
}