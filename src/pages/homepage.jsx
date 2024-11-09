import ProfileCard from "../components/profileCard";
import './homepage.css';

const Homepage = () => {
    return(
        <section>
            <h1>Profile</h1>
            <ProfileCard
                name="Pabllo Cristian"
                bio="Desenvolvedor Frontend apaixonado por React"
                imageUrl="preguica de pegar imagem"
            />
        </section>
    )
}
export default Homepage;