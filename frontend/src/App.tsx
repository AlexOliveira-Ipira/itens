import Header from './components/Header';
import Card from './components/Card';

function App() {
  return(
    <>
      <Header/>
      <main>
        <section id="itens">
            <div className="contener-card">
                <Card/>
            </div>
        </section>
      </main>
    </>    
  )
}

export default App;
