import { Container } from "@mui/material";
import Navbar from "../components/Navbar";
import Player from "../components/Player";

interface MainLayoutProps {
    children: React.ReactNode;
    title?: string;
    description?: string;
    keywords?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({children}) => {
    
    return (
        <>  
            <Navbar />
            <Container style={{margin: '90px 0'}}>
                {children}
            </Container>
            <Player />
        </>
    );
}

export default MainLayout;
