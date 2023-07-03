
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page 3',
}


export default function Page3() {
  return (
    <main className={`h-screen`}>
      <p className="text-center">Page 3</p>
    </main>
  );
}