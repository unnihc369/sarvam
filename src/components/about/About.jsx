import React from 'react';

const About = () => {
    return (
        <div>
            <header>
                <h1>Students of UVCE Fighting Hunger</h1>
            </header>
            <section className="group-pic">
                <img src="assets\group.jpg" alt="Group Picture" />
            </section>
            <section className="summary">
                <p>We are a passionate group of students from UVCE,Bangalore dedicated to tackling the pressing issue of hunger and food insecurity. After a day of intense brainstorming, we chose to focus our efforts on this critical problem affecting millions.</p>
                <p>Our approach involves bridging the gap between surplus food and those in need. We act as intermediaries, collecting excess food from restaurants and event halls, ensuring its quality, and distributing it to orphanages and NGOs.</p>
                <p>But our mission goes beyond food distribution. We've established a network of volunteers, including retired medical professionals who offer their services in rural areas, and agricultural experts who empower farmers with modern techniques, fostering sustainable yields and growth.</p>
                <p>Additionally, we've created a farmers' community and marketplace, connecting small-scale farmers and facilitating resource sharing, enabling them to access the tools and technologies necessary for success.</p>
                <p>Together, we believe in the power of community, compassion, and collaboration to drive meaningful change and alleviate hunger in our society.</p>
            </section>
        </div>
    );
}

export default About;
