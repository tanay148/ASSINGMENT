


import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/jquery/dist/jquery.min.js'
import './App.css'
import Datatable from './project-componant/Datatable'
import Header from './project-componant/Header'
import Items from './project-componant/Items'
import Supplier from './project-componant/Supplier'

function App() {
  

  return (
    <>
     
     <Header/>
     <Items/> 
     <Supplier/>
     <Datatable/>
    </>
  )
}

export default App
