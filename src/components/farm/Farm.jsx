import React from 'react';

const Farm = () => {
    return (
        <><section className="farm">
            <h1>Welcome to Farmer's Community</h1>
            <div className="slider">
                <div className="list">
                    <div className="item1">
                        <img src="assets/farmer1.jpeg" alt="pictures of farmers" />
                    </div>
                    <div className="item1">
                        <img src="assets/farmer2.jpeg" alt="pictures of farmers" className="red" />
                    </div>
                    <div className="item1">
                        <img src="assets/farmer3.jpeg" alt="pictures of farmers" className="red" />
                    </div>
                </div>
                <div className="buttons">
                    <button id="prev">&lt;</button>
                    <button id="next">&gt;</button>
                </div>
                <ul className="dots">
                    <li className="active"></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </section><section className="maps">
                <iframe
                    src="https://storage.googleapis.com/maps-solutions-2fkf78ova4/neighborhood-discovery/kdo9/neighborhood-discovery.html"
                    width="100%" height="100%"
                    style={{ border: '0' }}
                    loading="lazy">
                </iframe>
            </section><section className="agri_com">
                <div className="agri_com1"></div>
                <h3>Rooted Together: Grow Your Farming Journey with Our Supportive Community</h3>
                <p>Life on the farm can be rewarding, but it also comes with its own set of challenges. That's why we created Rooted Together, a vibrant online community where farmers can connect, share knowledge, and support each other. From exchanging tips on sustainable practices to navigating market fluctuations, our platform fosters a network of collaboration and encouragement. No matter your experience level or farming focus, you'll find a welcoming space to ask questions, find solutions, and learn from fellow farmers just like you. Join us today and discover the power of a connected and supportive farming community!</p>
                <button className="btn" type="submit" onClick={() => window.location.href = 'chatbox/index.html'}>
                    Chat on
                </button>
            </section><section className="marketplace">
                <div className="container">
                    <h1>Farmers Marketplace</h1>
                    <div className="items">
                        <div className="item">
                            <img src="assets\gpstractor.jpg" alt="Item 1" />
                            <h2>GPS Tractor</h2>
                            <p className="price">Price: $100</p>
                            <div className="btns">
                                <button className="buy-btn">Buy</button>
                                <button className="rent-btn">Rent</button>
                            </div>
                            <button className="share-btn">Share Cost with Nearby farmers</button>
                        </div>
                        <div className="item">
                            <img src="assets\drone.jpg" alt="Item 2" />
                            <h2>Drone</h2>
                            <p className="price">Price: $150</p>
                            <div className="btns">
                                <button className="buy-btn">Buy</button>
                                <button className="rent-btn">Rent</button>
                            </div>
                            <button className="share-btn">Share Cost with Nearby farmers</button>
                        </div>
                        <div className="item">
                            <img src="assets\autoirrigation.jpeg" alt="Item 3" />
                            <h2>Auto Irrigation system</h2>
                            <p className="price">Price: $200</p>
                            <div className="btns">
                                <button className="buy-btn">Buy</button>
                                <button className="rent-btn">Rent</button>
                            </div>
                            <button className="share-btn">Share Cost with Nearby farmers</button>
                        </div>
                    </div>
                </div>
            </section></>
    );
}

export default Farm;
