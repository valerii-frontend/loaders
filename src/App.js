import Circle from "./components/Circle";
import Spinner from "./components/Spinner";
import Bars from "./components/Bars";
import Dots from "./components/Dots";
import Card from "./components/Card";

function App() {
	return (
		<div className='App'>
			<div className='titles'>
				<div>Circle</div>
				<div>Spinner</div>
				<div>Bars</div>
				<div style={{ flex: "0 0 110px" }}>Dots</div>
				<div>Card</div>
			</div>
			<div className='preview'>
				<Circle color='hsl(0,50%,70%)' size='md' speed='1000' />
				<Spinner color='hsl(36,50%,70%)' _width='7' size='md' speed='1100' />
				<Bars color='hsl(72,50%,70%)' _width={5} size='md' count={5} speed='1500' />
				<Dots color='hsl(108,50%,70%)' size='md' speed='1500' count={3} />
				<Card color='hsl(144,50%,50%)' color2='hsl(180,70%,50%)' size='md' speed='1200' />
			</div>
		</div>
	);
}

export default App;
