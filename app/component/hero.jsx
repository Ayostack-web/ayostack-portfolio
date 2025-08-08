// app/components/Hero.jsx

import Image from 'next/image'

export default function Hero() {
  return (
 <section className="hero">
      {/* Hero Text */}
      <div className="hero-text">
        <h1>
          Hi, I'm <span>Ayokunle</span> 👋
        </h1>
        <p>Full-stack Developer passionate about creating stunning web experiences.</p>
        <p>Creative Next.js developer Developer | JavaScript Lover | CSS Magician</p>
        <a href="#projects" className="btn">Explore Projects</a> 
        <br /><br />
         
      </div>

      {/* Profile Card */}
      <div className="card">
        <Image
          src="/img/toffee-8789.JPG"
          alt="User"
          width={120}
          height={120}
          className="avatar"
        />
        <h2>Ayokunle Shittu</h2>
        <p className="job-title">Full-stack Developer</p>
        <p className="bio">Passionate about creating beautiful and user-friendly websites.</p>
       <a href=" https://www.linkedin.com/in/ayokunle-shittu-560a9a162?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "  className='follow-btn'>Let's Connect</a>
      </div>
</section>
  )
}







