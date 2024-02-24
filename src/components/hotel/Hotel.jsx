import React from 'react';

const Hotel = () => {
    return (
        <div>
            <div className="tristram">
                <img src="Tristram Stuart.webp" alt="" />
            </div>
            <h1 className="quote">“Cutting food waste is a delicious way of saving money, helping to feed the world and protect the
                planet.”</h1>
            <h1 className="auth">-Tristram Stuart</h1>
            <h1 className="us">Here are some statistics about wastage of food in India</h1>
            <div className="report">
                <h3 className="repo">Did you know that about 40 % of the food produced in India is wasted?
                    Despite adequate food production, the UN has reported that about 190 million Indians remain undernourished.
                    It is further estimated that the
                    value of food wastage in India is around ₹92,000 crores per annum.
                    These are some bleak statistics, but they should help us realise the magnitude of the problem of food waste,
                    as much as inequity, in India.
                    The world recognises that no truly sustainable and developed country can exist without tackling the issue of
                    food waste, and while the challenge
                    in front of us may be monumental, some steps need to be taken sooner than others.</h3>
            </div>
            <h2 className="us">At Sarvam, we believe in taking proactive steps to address the global issue of hunger. Instead of
                letting food go to waste, we invite you to be a part of our mission by choosing a more meaningful alternative.
                By donating to us, you're not just contributing financially you're taking a powerful step towards solving
                hunger.</h2>
            <h2 className="us">We understand the importance of ensuring the highest quality in food products. Our state-of-the-art
                testing labs are equipped to assess and certify the quality of food items, providing an assurance of safety and
                nutritional value.<br />
                Hostels, food establishments, and organizations involved in food production can easily obtain our certification,
                signaling their commitment to delivering quality nourishment. By partnering with us, you not only gain
                credibility but also contribute to our mission of fighting hunger.</h2>
            <div className="us">
                <a href="" className="form">
                    <button className="get">
                        Get Certified
                    </button>
                </a>
            </div>
            <h1 className="us">Donate Food Here</h1>
            <div className="us">
                <a href="" className="form">
                    <button className="get">
                        Donate
                    </button>
                </a>
                <a href="index.html" className="return">Return to home page</a>
            </div>
        </div>
    );
}

export default Hotel;
