import styles from './page.module.css';
import {OurPartners} from "@/app/about_us/OurPartners";
import {OurCrew} from "@/app/about_us/OurCrew";
import {OurValues} from "@/app/about_us/OurValues";

const Crew = () => {
  return (
    <div className="fullBGpicture">
        <main className="mainContent">
            <h1>About us</h1>
            <section className="card">
                <h2>Our Values</h2>
                <OurValues/>
            </section>
            <section className="card">
                <h2>The Crew</h2>
                <OurCrew/>
            </section>
            <section className="card">
                <h2>Our Partners</h2>
                <OurPartners/>
            </section>
        </main>
    </div>
  );
}

export default Crew;
