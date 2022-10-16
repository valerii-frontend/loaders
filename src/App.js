import Circle from "./components/Circle";
import Frame from "./components/Frame";
import Bars from "./components/Bars";
import Dots from "./components/Dots";
import Card from "./components/Card";
import Ring from "./components/Ring";
import Text from "./components/Text";
import Ballance from "./components/Ballance";
import Scale from "./components/Scale";

function App() {
	return (
		<div className='App'>
			<div className='titles'>
				<div>Circle</div>
				<div>Frame</div>
				<div>Bars</div>
				<div>Ballance</div>
				<div style={{ flex: "0 0 110px" }}>Dots</div>
				<div>Card</div>
				<div>Ring</div>
				<div style={{ flex: "0 0 130px" }}>Text</div>
				<div>Scale</div>
			</div>
			<div className='preview'>
				<Circle color='hsl(0,50%,70%)' size='md' speed='1000' />
				<Frame color='hsl(36,50%,70%)' _width={7} size='md' speed='1100' />
				<Bars color='hsl(72,50%,70%)' _width={5} size='md' count={5} speed='1500' />
				<Ballance color='hsl(288,70%,70%)' size='lg' speed='1500' />
				<Dots color='hsl(108,50%,70%)' size='md' speed='1500' count={3} />
				<Card color='hsl(252,50%,70%)' color2='hsl(180,70%,50%)' size='md' speed='1200' />
				<Ring color='hsl(216,50%,80%)' size='md' speed='2000' _width={10} />
				<Text color='hsl(144,50%,50%)' size='sm' speed='1500' text='Loading...' uppercase />
				<Scale color='hsl(324,60%,80%)' color2='hsl(252,60%,80%)' size='md' speed='2000' />
			</div>
		</div>
	);
}

export default App;
