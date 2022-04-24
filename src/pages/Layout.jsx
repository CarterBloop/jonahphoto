import { Outlet } from "react-router-dom";
import './Layout.css'

function Layout() {
    return (
        <div>
        <header class="App-header">
            <div class="Logo-container">
                <div class="Logo-text">
                    JONAH SAFFRAN PRODUCTIONS
                </div>
            </div>
        </header>
        <Outlet />
        <footer class="App-footer">
        </footer>
        </div>

    );
}
export default Layout;