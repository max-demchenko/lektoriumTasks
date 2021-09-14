import { move } from './Elements/useSpiralAlgorithm'

function App() {

  let facing,
    storage = [],
    currentPos = {
      row: '',
      collumn: ''
    }


  currentPos.collumn = 1
  currentPos.row = 3
  move('right', 'right', currentPos)
  console.dir(currentPos)


  return (
    <>
    </>
  );
}

export default App;
