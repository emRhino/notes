import fs from 'fs/promises';
import path from 'path';

function Home(props) {
  const { products } = props;
  console.log();

  return (
    <div>
      {products.map(product => <div key={product.id}>{product.title}</div>)}
    </div>
  )
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data', 'dummy.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  return {
    props: data
  }
}

export default Home;