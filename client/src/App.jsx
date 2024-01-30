import Delivery from './components/Delivery'
import Featured from './components/Featured'
import TopNav from './components/TopNav'

const App = () => {
  return (
    <div className="App">
      <TopNav />
      <Featured />
      <Delivery />
    </div>
  )
}

export default App