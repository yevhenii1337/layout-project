
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page 5',
}


export default function Page5() {
  return (
    <main className={`h-screen`}>
      <p className="text-center">Page 5</p>
      <p>Home</p>
    </main>
  );
}