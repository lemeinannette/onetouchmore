import React from 'react';


const About = () => {
    
    const values = [
        {
            title: 'Reliability',
            description: 'We are open as a team and as a product. We don\'t put walls up unless it\'s necessary. We become better when we share information.'
        },
        {
            title: 'Professional Partners',
            description: 'We want the best for our customers and ourselves. We coach people to their best potential.'
        },
        {
            title: 'Fast Service',
            description: 'We act like owners. Let\'s empower each other. If we see something that needs change, we lead through it.'
        },
        {
            title: 'Online Access',
            description: 'Life is short. Let\'s build something meaningful. We play as a team because great teams build great things together.'
        },
        {
            title: 'Trusted',
            description: 'We can be honest and kind. Kindness can vary across cultures, upbringings, and languages—but we try our best to be kind.'
        }
    ];

    return (
        <div className="about-us">
           <section className="about-us">
    <h2>About Us</h2>
    <p>At ONETOUCHMORE, we specialize in stylish and high-quality accessories. Our goal is to offer unique products that enhance your personal style, with a focus on exceptional experience and customer satisfaction.</p>
  </section>

            <div className="values-container">
                {values.map((value, index) => (
                    <div className="value-card" key={index}>
                        <h3>{value.title}</h3>
                        <p>{value.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default About;
