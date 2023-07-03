
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page 1',
}


export default function Page4() {
  return (
    <main className={`h-screen`}>
      <p className="text-center">Page 4</p>
    </main>
  );
}