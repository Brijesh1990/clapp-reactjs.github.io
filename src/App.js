import React from 'react';
import {add,subs,mult} from './components/CalcApp';
import clcphoto from './clc.gif';
function App()
{
    return (
       <>
       <section id='main-app'>
       <div className='clc-img'>
        <img src={clcphoto} alt='calculator' title='my calculators' />  
       </div>
       <div className='clc-app'>
        <button type='button' onClick={add}>Add here</button>
        <button type='button' onClick={subs}>Substract here</button>
        <button type='button' onClick={mult}>Multiplication here</button>
       </div>
       </section>
       </>

    )
}
export default App;