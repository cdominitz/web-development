import React from 'react';

function HomePage(){
    return (
        <>
        <h2>Welcome!</h2>
        <p>Throughout this website, you will see different skills that I have learned about making a website.
            This home page serves as an introduction to the various technologies that were
            used to create the page.
        </p>
        <article>
            <h3>Creating the Website</h3>
                <p>In order to create this website, the first step was using <strong>HTML</strong> to build
                    the structure of each page. This allowed for there to be designated sections
                    on each page with different elements. For example, this Home Page has HTML heading &lt;h2&gt; 
                    and &lt;h3&gt; which affects the layout of information on the page. This in turn allows for a
                    clear visual understanding of the grouping of information.
                </p>
                <p>
                    Once the basic structure of a page was made using HTML, <strong>JavaScript</strong> was then used to 
                    actually run the site with the help of <strong>Node</strong> and <strong>Express</strong>. The use of
                    Node allowed for the access to many packages that helped with the implementation of various methods
                    to create the pages and link them together. One way that Express is used on this website is to create 
                    forms and process data. This can be seen most clearly through the log page of this site, where the user 
                    can enter and edit their own expense logs. Both Node and Express are written in JavaScript.
                </p>

                <p><strong>MongoDB</strong> is a database management system that is used to store data collected within the 
                    app. <strong>Mongoose</strong> is a JavaScript library that helps the code interact with MongoDB. This is done through schemas
                    and models. Furthermore, Mongoose was used for the CRUD methods used on the Log Expenses page.
                </p>
        </article>
        
        <article>
            <h3>Designing the Website</h3>
                <p>A <strong>CSS</strong> stylesheet was used to impact how the website should look. It was within 
                    the CSS file that the different visual aspects of this website were defined. For example, the 
                    different color for the fonts and sections on each page were all done through the CSS file. 
                    Furthermore, this file is where <strong>Google Fonts</strong> was imported. Once the desired 
                    font was imported and placed in the &quot;font-family&quot; line of the body section, all
                    the text on every page matched this font.
                </p>
                <p>The gallery page of this site includes 10 <strong>optimized images</strong>. This means that each image
                    has been cropped, resized, edited, and compressed. This results in a file that will load quickly on the
                    site while still being a clear image on the screen.
                </p>
                <p>The website also utilized <strong>react icons</strong> for the user to interact with that represented
                    their purpose. For example, on the Log Page, the user can click on the trash can to delete the entry or
                    the pencil to edit their entry. These icons were resized in the CSS stylesheet so that they would be more
                    easily visible and clickable.
                </p>
        </article>
        
        <article>
            <h3>Frontend and Backend Components</h3>
                <p><strong>React</strong> was implemented in to this website to help with the frontend side of this application.
                    React components are what make up the different pages on this website and allow for the pages to be easily
                    linked together.
                </p>
                <p><strong>REST</strong> is an API that is used to create the backend aspect of this application. The backend contains
                    model and controller files. These contain methods that interact with Mongoose to store and manipulate data provided
                    by user input.
                </p>
        </article>
        </>
    )

}
export default HomePage;
