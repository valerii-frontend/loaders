import { Circle } from "./components/Circle";
import { Spinner } from "./components/Spinner";
import Bars from "./components/Bars";

function App() {
	return (
		<div className='App'>
			<Circle color='blue' size='100' speed='1000' />
			<Spinner color='green' borderWidth='10' size='100' speed='1100' />
			<Bars color='#333' barWidth={10} size='100' count={3} speed='1000' />
		</div>
	);
}

export default App;
