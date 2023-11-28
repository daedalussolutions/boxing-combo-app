import React from 'react';
const About = () =>{
    return (
        <div className='about-container'>
            <h1>About</h1>
            <div className='about-info-container'>
                <p>
                    This boxing combo generator creates a combo from a list of punches generally corrolated with a specific
                    "mode" of boxing. For example, an offensive combo has little defensive moves such as a slip and focuses on all types of punches,
                    including designated power shots like an overhand right or right hook. A defensive combo uses mostly defensive movement and supplemental
                    defensive punching, like a jab.
                </p>
                <a href='https://dylancassell.ca'>WEBSITE</a>
                <a href='https://github.com/daedalussolutions'>GITHUB</a>
                <a href='https://linkedin.com/in/dylan-cassell-'>LINKEDIN</a>
            </div>
        </div>
    )
}
export default About;