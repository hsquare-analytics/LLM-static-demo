import { createRoot } from 'react-dom/client'
import App from "./App.tsx";
import 'app/assets/styles/style.scss'

createRoot(document.getElementById('root')!).render(
    <App />
)
