import type { Metadata } from 'next'

interface PageProps {
  params: Promise<{ name: string }>
}

// Generate metadata (also needs to be async now)
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { name } = await params
  
  return {
    title: `About ${name}`,
    description: `Learn more about ${name}`,
  }
}

// Main page component
export default async function AboutPage({ params }: PageProps) {
  const { name } = await params
  
  return (
    <div style={{ padding: '2rem' }}>
      <h1>About {name}</h1>
      <p>Welcome to {name}&apos;s page!</p>
      <p>This is a dynamic route in Next.js 15.</p>
    </div>
  )
}