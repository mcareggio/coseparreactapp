import './App.css'
import HeaderComp from './components/HeaderComp.tsx'
import { ListadoUsuariosEnvio } from './components/ListadoUsuariosEnvio.tsx'

function App() {

  return (
    <>
      <HeaderComp></HeaderComp>
      <main className='main-content'>
        <ListadoUsuariosEnvio />
      </main>
      <footer className='main-footer'><div>@Copiright - Marcos Careggio</div></footer>
    </>
  )
}

export default App
