// app/components/Footer.jsx
import Image from "next/image"

export default function Footer() {
  const socials = [
    {
      href: "https://www.instagram.com/ayokunle_shittu/",
      icon: "/img/download-1.png",
      alt: "Instagram",
    },
    {
      href: "https://www.linkedin.com/in/shittu-ayokunle-560a9a162",
      icon: "/img/download-2.png",
      alt: "LinkedIn",
    },
    {
      href: "https://www.facebook.com/profile.php?id=100006560209278",
      icon: "/img/download.png",
      alt: "Facebook",
    },
    {
      href: "#",
      icon: "/img/icons8-x-50.png",
      alt: "X",
    },
  ]

  return (
    <footer>
      <div className="footer-container">
        <p style={{ textAlign: "center" }}>Follow Me</p>

        <div className="social-icon">
          {socials.map((social, index) => (
            <a key={index} href={social.href} target="_blank" rel="noopener noreferrer">
              <Image src={social.icon} alt={social.alt} width={24} height={24} />
            </a>
          ))}
        </div>
      </div>

      <p>© 2025 Ayo Shittu. Built with love and code.</p>
      <br />
      <a className="a" href="#">Back to top ⬆️</a>
    </footer>
  )
}
