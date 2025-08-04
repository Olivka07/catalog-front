import { Navbar } from '../Navbar';
import { ThemesContainer } from '../ThemesContainer';
import { Header } from './Header';

export const HeaderDesktop = () => {
    return (
        <Header>
            <ThemesContainer />
            <Navbar />
        </Header>
    );
};
