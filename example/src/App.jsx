
import './App.css'
import Shared from './components/verticleTab/Shared/Shared';
import VarticleTab from './components/verticleTab/varticleTab';

function App() {

  const tabs = [
    {
      title: 'Process',
      content: 'Content for Tab 1',
    },
    {
      title: 'Jobs',
      content: 'Content for Tab 2',
    },
    {
      title: 'Apps',
      content: 'Content for Tab 3',
    },
    {
      title: 'Triggers',
      content: 'Content for Tab 4',
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
