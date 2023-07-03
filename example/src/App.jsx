
import './App.css'
import Shared from './components/verticleTab/Shared/Shared';
import VarticleTab from './components/verticleTab/varticleTab';

function App() {

  const tabs = [
    {
      title: 'Process',
      content: <Shared/>,
    },
    {
      title: 'Jobs',
      content: <Shared/>,
    },
    {
      title: 'Apps',
      content: <Shared/>,
    },
    {
      title: 'Triggers',
      content: <Shared/>,
    },
    {
      title: 'Logs',
      content: <Shared/>,
    },
  ];

  return (
    <>
    <VarticleTab tabs={tabs}/>
    </>
  )
}

export default App
