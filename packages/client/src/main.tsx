import ReactDOM from 'react-dom/client'
import './presentation/styles/global.css'
import RoutesManager from './ui/route/routes-manager'
import { RepositoriesProvider } from './core'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <RepositoriesProvider>
      <RoutesManager />
    </RepositoriesProvider>,
)
