import logo from './logo.svg';
import './App.css';
import Button from './comp/button';
import Box from './comp/box';
import StyledComponents from './comp/styledComponents';

function App() {
  return (
    <div className="App">
      <div className="buttons">
        <p>SCSS</p>
        <Button size="large">BUTTON</Button>
        <Button>BUTTON</Button>
        <Button size="small">BUTTON</Button>
      </div>
      <div className="buttons">
        <Button size="large" color="gray">BUTTON</Button>
        <Button color="gray">BUTTON</Button>
        <Button size="small" color="gray">BUTTON</Button>
      </div>
      <div className="buttons">
        <Button size="large" color="pink">BUTTON</Button>
        <Button color="pink">BUTTON</Button>
        <Button size="small" color="pink">BUTTON</Button>
      </div>
      <div>
        <Box />
      </div>
      <div>
        <StyledComponents />
      </div>
    </div>
  // <div className='App'>
  //   <div className='buttons'>
  //     <Button size="small"></Button>
  //     <Button>버튼</Button>   {/* 버튼 컴포넌트를 사용: children */}
  //     <Button size="large"></Button>
  //   </div>
  // </div>
  );
}

export default App;
