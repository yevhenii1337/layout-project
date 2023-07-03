
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page 2',
}


export default function Page2() {
  return (
    <main className={`h-screen`}>
      <p className="text-center">Page 2</p>
    </main>
  );
}