import { Circle } from "./components/Circle";
import { Spinner } from "./components/Spinner";

function App() {
	return (
		<div className='App'>
			<Circle color='blue' size='100' speed='1000' animation='linear' />
			<Spinner color='green' borderWidth='10' size='100' />
		</div>
	);
}

export default App;
