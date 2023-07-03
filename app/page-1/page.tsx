
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page 1',
}


export default function Page1() {
  return (
    <main className={`h-screen`}>
      <p className="text-center">Page 1</p>
    </main>
  );
}