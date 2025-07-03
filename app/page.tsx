export default function Home() {
  const environment = process.env.NEXT_PUBLIC_ENVIRONMENT || 'development'
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-4">Corvus Website</h1>
      <p className="text-lg text-gray-600">Environment: {environment}</p>
    </main>
  )
}
