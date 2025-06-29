import gsap from 'gsap';
import {ScrollTrigger, SplitText} from 'gsap/all';
gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <div className='h-[100vh] flex-center text-3xl text-blue-700'>
      <h1>App</h1>
    </div>
  )
}

export default App