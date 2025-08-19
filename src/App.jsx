import './App.css'
import Pessoa from './componentes/Pessoa'
import Hobbies from './componentes/Hobbies'
import Filmes from './componentes/Filmes'
import fotoPerfil from './assets/20240206_173051.jpg'

import fotoHobbie1 from './assets/xadrez.jpg'
import fotoHobbie2 from './assets/tt.jpg'
import fotoHobbie3 from './assets/guitar.jpg'
import fotoHobbie4 from './assets/criar.jpg'
import fotoHobbie5 from './assets/ler.jpg'
import fotoHobbie6 from './assets/drive.jpg'


import fotoFilme1 from './assets/sults.jpg'
import fotoFilme2 from './assets/vk.jpg'
import fotoFilme3 from './assets/batman.jpg'
import fotoFilme4 from './assets/gladiador.jpg'
import fotoFilme5 from './assets/sdl.jpg'
import fotoFilme6 from './assets/auh.jpg'
function App() {
  

  return (
    <div className='App'> 
      <h1>Bem-Vindo</h1>
        <Pessoa foto={fotoPerfil} nome=" Chrystian Gabriel A. da Silva" idade=" 18 anos" profissao=" Jovem Aprendiz" cidade=" Itanhaém" contato="1199698-3046"/>
      
      <div className="tituloGosto">
        <h2>Hobbies:</h2>
          <div className="geral_gosto">
            <Hobbies fotoH={fotoHobbie1} hobbie="Xadrez"  />
            <Hobbies fotoH={fotoHobbie2} hobbie="Tenis de Mesa"  />
            <Hobbies fotoH={fotoHobbie3} hobbie="Música"  />
            <Hobbies fotoH={fotoHobbie4} hobbie="Criar"  />
            <Hobbies fotoH={fotoHobbie5} hobbie="Ler"  />
            <Hobbies fotoH={fotoHobbie6} hobbie="Dirigir"  />
          </div>
       </div>


        <div className="tituloGosto">
        <h2>Filmes e Séries Favoritas:</h2>
          <div className="geral_gosto">
            <Filmes fotoF={fotoFilme1} filme="Suits"  />
            <Filmes fotoF={fotoFilme2} filme="Vikings"  />
            <Filmes fotoF={fotoFilme3} filme="Batman Begins"  />
            <Filmes fotoF={fotoFilme4} filme="Gladiador"  />
            <Filmes fotoF={fotoFilme5} filme="Um Sonho de L."  />
            <Filmes fotoF={fotoFilme6} filme="Até o Ult. H."  />
            
          </div>
        </div>

    </div>
  )
}

export default App
