import aboutSvg from '../assets/about.svg'
import SectionTitle from './SectionTitle'
const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64" />
        <article>
          <SectionTitle text="code and coffee" />
          <p className="text-slate-600 mt-8 leading-loose">
            👋 Hi, I'm [Your Name], a skilled web developer proficient in HTML,
            CSS, and JavaScript. With a focus on creating captivating user
            interfaces, I bring designs to life using React and Next.js, while
            ensuring a seamless experience through my proficiency in Bootstrap
            and Tailwind CSS.
          </p>
          <p className="text-slate-600 mt-8 leading-loose">
            🌐 Passionate about transforming ideas into functional, visually
            appealing websites, I thrive on staying at the forefront of web
            development trends. Let's collaborate to build innovative digital
            solutions that not only meet but exceed your expectations. Explore
            my portfolio and let's craft something extraordinary together!
          </p>
        </article>
      </div>
    </section>
  )
}
export default About
