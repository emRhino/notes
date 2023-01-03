import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <h1>The Home Page</h1>
      <Link href={{
        pathname: '/shop/[id]',
        query: { id: 'testss' } 
      }}>Sklep</Link>
    </div>
  )
}

export default HomePage;