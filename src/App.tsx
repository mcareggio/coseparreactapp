import './App.css'
import HeaderComp from './components/HeaderComp.tsx'
import { ListadoTipoEnvio } from './components/ListadoTipoEnvio.tsx'
function App() {

  return (
    <>
      <HeaderComp></HeaderComp>
      <main className='main-content'>
        <ListadoTipoEnvio />
      </main>
      <footer className='main-footer'><div>@Copiright - Marcos Careggio</div></footer>
    </>
  )
}

export default App
