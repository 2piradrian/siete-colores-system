import ReactDOM from 'react-dom/client'
import RoutesManager from './ui/route/routes-manager'
import { RepositoriesProvider } from './core'
import './ui/style/global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <RepositoriesProvider>
      <RoutesManager />
    </RepositoriesProvider>,
)
