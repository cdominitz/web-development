import React from 'react';

function TopicsPage(){
    return (
        <>
        <h2>Web Development Concepts</h2>
        <nav className="local">
            <a href="#web server">Web Server</a>
            <a href="#frontend design">Frontend Design</a>
        </nav>

        <article id="web server">
            <h3>About Web Servers</h3>
            <p>This page was using Visual Studio Code to add a file called "index.html" to the assignment 1 folder on my
                hard drive. I then used the boilerplate keystroke to add the necessary HTML tags to the file. This file is 
                called "index.html" as that is the default name used for the home page when creating a website. This is
                because the home page acts as an index to the website, as it allows the user to navigate to different pages
                within the website.</p>
        
            <p>When reviewing the browser's Web Dev/Inspect tools, the "index.html" file has a status of 200,
                meaning that the request was successful, meanwhile the "main.css" and "main.js" files have a 
                failed status.</p>
        
            <p>In the browser's Web Dev/Inspector tools, the web server has more files than the local computer. While both
                have "main.css" and "main.js", those files are of "failed" statuses for the local computer, whereas the
                web server has a status of "404" for both of them. Instead of the "index.html" file, the web server has an 
                "a1-dominitc" file, but it does still have the same status of 200. The web server also has the files 
                "single-file-hoosk-frames.js" and "favicon.ico" page name, both of which have a status of 200.
            </p>
            <p>The favicon.ico file has a status 200. This is because there is an icon file in the browser tab that is showing up correctly
                and is therefore successful. Meanwhile, the "main.css" and "main.js" files have a status of 404 instead of 200, meaning that
                these files cannot be found. This is because there were no main.css or main.js files uploaded, therefore 
                they show up as missing.
            </p>   
            <p>In the URL to my web file "https://web.engr.oregonstate.edu/~dominitc/a1-dominitc/", the scheme is "https".
                The subdomain is "web.engr" and the host domain is "oregonstate.edu". The path to resource is "~dominitc" 
                and the resource is "a1-dominitc".
            </p>
        </article>

        <article id="frontend design">
            <h3>Frontend Design</h3>
            <p>
                Frontend Design is the concept of creating a user experience tailored to the specific needs of the user for
                the program or website's intended purpose. This involves both the graphic design aspect of the page and the 
                interactive design. The graphic component is what the user sees when using the page. This includes
                the font, color scheme, icons, and more. The interactive design is what the user is going to interact with,
                such as clicking on icons or typing into search bars.
            </p>
            <p><strong>Five E's of Usability:</strong></p>
            <dl>
                <dt>Effective</dt>
                <dd>The website accurately helps users reach their goal.</dd>
                <dt>Efficient</dt>
                <dd>The website is set up such that the user can quickly perform tasks
                    with the fewest steps necessary.
                </dd>
                <dt>Easy to Navigate</dt>
                <dd>The user immediately understands how to use the website and 
                    can easily click or search the page to find their goal.
                </dd>
                <dt>Error-free</dt>
                <dd>The user does not run into roadblocks when trying to use the page, and
                    it is unlikely to be misunderstood.
                </dd>
                <dt>Enjoyable/Engaging</dt>
                <dd>The website fits the needs of the intended users and is designed such
                    that the user will want to use the website again.
                </dd>
            </dl>
            <p>
                Page layout tags are used to break up the content of the page into designated
                sections. Different tags define the header for the top of the page, a navigation
                element to allow the user to go between pages on the site. There is also the main
                element which holds the section element and article elements. The article element 
                consists of a single topic. A section holds multiple related articles. There is also
                the footer, which usually holds legal or contact information as well as links to
                pages.
            </p>
            <p>
                Anchors can link the page to external content or link internally between pages within the website
                through the "href" attribute. With this attribute, one can specify the URL that the link goes to 
                when the user clicks on it. The "&lt;nav&gt;" element is an anchor tag that links internally to 
                different pages within a page or between the pages of a website. Meanwhile, text anchors such 
                as "&lt; a &gt;" are used to link the page to external links.
            </p>
        </article>
        </>
    );
}
export default TopicsPage;
