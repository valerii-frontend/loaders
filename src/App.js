import { Circle, Round, Bars, Dots, Card, Ring, Text, Ballance, Scale, Pulse, Whirlpool, Cube } from "./Loaders";

function App() {
  return (
    <div className='App'>
      <h1>Animations preview</h1>
      <div className='row'>
        <div className='col'>
          <h2>Circle</h2>
          <Circle color='hsl(0,50%,70%)' size='md' speed='1000' />
        </div>
        <div className='col'>
          <h2>Round</h2>
          <div>
            <Round color='hsl(36,50%,70%)' _width={7} size='md' speed='1100' />
          </div>
        </div>
        <div className='col'>
          <h2>Scale</h2>
          <div>
            <Scale color='hsl(324,60%,80%)' color2='hsl(252,60%,80%)' size='md' speed='2000' />
          </div>
        </div>
        <div className='col'>
          <h2>Bars</h2>
          <div>
            <Bars color='hsl(72,50%,70%)' _width={5} size='md' count={5} speed='1500' />
          </div>
        </div>
        <div className='col'>
          <h2>Ballance</h2>
          <div>
            <Ballance color='hsl(288,70%,70%)' size='lg' speed='1500' />
          </div>
        </div>
        <div className='col'>
          <h2>Dots</h2>
          <div>
            <Dots color='hsl(108,50%,70%)' size='md' speed='1500' count={3} />
          </div>
        </div>
        <div className='col'>
          <h2>Card</h2>
          <div>
            <Card color='hsl(252,50%,70%)' color2='hsl(180,70%,50%)' size='md' speed='1200' />
          </div>
        </div>
        <div className='col'>
          <h2>Ring</h2>
          <div>
            <Ring color='hsl(216,50%,80%)' size='md' speed='2000' _width={10} />
          </div>
        </div>
        <div className='col'>
          <h2>Pulse</h2>
          <div>
            <Pulse color='hsl(30,50%,80%)' size='md' speed='1500' _width='5' />
          </div>
        </div>
        <div className='col'>
          <h2>Text</h2>
          <div>
            <Text color='#FFAE21' size='md' speed='1500' text='Loading' uppercase='true' pulse='true' />
          </div>
        </div>
        <div className='col'>
          <h2>Whirlpool</h2>
          <div>
            <Whirlpool color='yellow' color2='cyan' color3='orangered' size='md' speed='2500' />
          </div>
        </div>
        <div className='col'>
          <h2>Cube</h2>
          <div>
            <Cube color='hsl(150,100%,45%)' size='md' speed='1500' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
