import    React    from      'react';
import    {Helmet} from 'react-helmet';
import    Home     from      './components/home/Home'
import    About    from      './components/About/About'
import    Skills   from      './components/Skills/Skills';
import    Projects from      './components/Projects/Projects';
import    Contacts from      './components/Contacts/Contacts';
import                       './App.css';

function App() {
  return (
    <div className="App">
      <Helmet>
            <link
                rel="stylesheet"
                href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
                integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
                crossorigin="anonymous"
            ></link>
            <link 
                href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&display=swap"
                rel="stylesheet"
            ></link>
        </Helmet>
      <Home />
      <About/>
      <Skills/>
      <Projects/>
      <Contacts/>
    </div>
  );
}

export default App;
