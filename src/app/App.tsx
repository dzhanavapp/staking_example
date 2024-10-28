import { Header } from '../widgets/Header';
import { RatesInfo } from '../widgets/RatesInfo';
import { StakingCard } from '../widgets/StakingCard';

function App() {
  return (
    <>
      <Header />
      <main>
        <StakingCard />

        <RatesInfo />
      </main>
    </>
  );
}

export default App;
