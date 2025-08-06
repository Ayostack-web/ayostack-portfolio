'use client';
import { useEffect, useState } from 'react';

const testimonials = [
  {
    quote: "Working with Ayostack was an incredible experience. His attention to detail is top-tier.",
    name: "Oluwatobiloba A.",
    role: "Frontend Mentor",
  },
  {
    quote: "He’s very consistent, fast-learning, and creative. Highly recommend for web projects.",
    name: "Alayo S.",
    role: "Tech Lead, Abrandrise",
  },
  {
    quote: "Ayostack brings energy and UI precision into every collaboration. Truly impressive.",
    name: "Marvellous A.",
    role: "UI/UX Designer, MG Design",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimonials">
      <h2 className="section-title">💬 Testimonials</h2>
      <div className="testimonial-container">
        <div className="testimonial">
          <p className="quote">“{testimonials[current].quote}”</p>
          <h4 className="name">{testimonials[current].name}</h4>
          <p className="role">{testimonials[current].role}</p>
        </div>
        <div className="dots">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === current ? 'active' : ''}`}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
