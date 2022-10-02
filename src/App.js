import Circle from "./components/Circle";
import Spinner from "./components/Spinner";
import Bars from "./components/Bars";
import Dots from "./components/Dots";

function App() {
	return (
		<div className='App'>
			<div className='titles'>
				<span>Circle</span>
				<span>Spinner</span>
				<span>Bars</span>
				<span>Dots</span>
			</div>
			<div className='preview'>
				<Circle color='hsl(0,50%,70%)' size='md' speed='1000' />
				<Spinner color='hsl(36,50%,70%)' _width='7' size='md' speed='1100' />
				<Bars color='hsl(72,50%,70%)' _width={5} size='md' count={5} speed='1000' />
				<Dots />
			</div>
		</div>
	);
}

export default App;
