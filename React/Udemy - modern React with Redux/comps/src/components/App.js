import Button from './Button';

function App() {
  return (
    <div>
      <div>
        <Button primary rounded>
          Hi there 1
        </Button>
      </div>
      <div>
        <Button rounded>Hi there 2</Button>
      </div>
      <div>
        <Button outline>Hi there 3</Button>
      </div>
      <div>
        <Button success outline>
          Hi there 4
        </Button>
      </div>
    </div>
  );
}

export default App;
