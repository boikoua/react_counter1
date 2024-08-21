import { useState } from 'react';
import Counter from './components/Counter/Counter';
import style from './App.module.scss';

function App() {
  const [showMessage, setShowMessage] = useState(true);

  return (
    <div className={style.app}>
      <Counter showMessage={setShowMessage} />
      {showMessage && (
        <p className={style.message}>Press button to activate the counter</p>
      )}
    </div>
  );
}

export default App;
