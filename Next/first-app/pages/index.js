import Link from 'next/link';
import { useRouter } from "next/router";

const HomePage = () => {

  const router = useRouter();

  const goToBlog = () => {
    router.push('/blog')
  }

  return (
    <div>
      <h1>The Home Page</h1>
      <Link href={{
        pathname: '/shop/[id]',
        query: { id: 'testss' } 
      }}>Sklep</Link>
      <button onClick={goToBlog}>Blog</button>
    </div>
  )
}

export default HomePage;