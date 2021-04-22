<h1>REAL BREAD</h1>
<h2>Interactive Frontend Development Milestone Project</h2>

<h1>Testing</h1>


## User Experience (UX)

## User stories testing

### First time visitor

* "As a First Time Visitor, I expect the purpose of the website to be explicit"
   * The user is received with the Carousel of hero images, stating from the beginning that the main purpose is to promote Real Bread product.
   * Website's header reads REAL BREAD.

* "As a First Time Visitor, I consider smooth navigation through content to be a key aspect"
   * A practical fixed positioned navbar that collapses into a burger button for small screens fulfill this purpose.
   * Website's header will smoothly scroll back to the top of the page, aswell as the "home" anchor. 

* "As a First Time Visitor, I want the content of the website to be relevant and concise"
   * Not big pieces of text on this website. Only basic information is displayed.

* "As a First Time Visitor, I want to know where to find the promoted business"
   * After learning about the products, the user can visit one of three stores displayed in the embedded google maps in Our Locations section.

### Returning visitor

* "As a Returning Visitor, I would like to see updated information about bakery's new products"
   * The Our Products section fulfill the function of showcasing the promoted products. It's easily updated to include new ones.

* "As a Returning Visitor, I want to have ease of access to contact the bakery"
   * The contact form is connected to emailJS API, sending emails to the registered mailbox every time an user submits a form.
   * The user will receive an email confirming successful form submission.
   * The user will receive a website alert on submission.

* "As a Returning Visitor, I'd like to check bakery's activity on social media"
   * Social media anchors are available at footer. Instagram, Facebook and LinkedIn.

### Frequent user
* As a Frequent User, I want to check new features.
   * Future features include: 
     * Make your Own Loaf section, where users will have access to some of the bakery's recipes.
     * Independent Loaves section, where users can share pictures of their baking creations.
     * Aesthetic animations.

* As a Frequent User, I want to be able to propose recipes and products.
   * The contact form can be used for this purpose, but users will be encouraged to do so through Independent Loaves section, once released.

## Functionality Testing

### Navigation

* Clicked through each navbar item to ensure the user triggers the expected feature - Check
* Clicked through each navbar item to ensure the user triggers the expected feature (mobile) - Check
* Clicked header to check that it scrolls back to the top. - Check
* Clicked header to check that it scrolls back to the top. (mobile) - Check

### Code Validation

*  [Valid HTML!](/assets/images/valid-html.png) HTML has been validated by [W3C validator](https://validator.w3.org/)
*  [Valid CSS!](/assets/images/valid-css.png) CSS has been validated by [Jigsaw validator](https://jigsaw.w3.org/css-validator/)

### Responsiveness
The responsiveness of the website has been tested with Chrome Developer Tools and Chrome Responsive Viewer.
* Fully responsive on all tested devices - Check

### Links
* Clicked all anchor elements. They work as expected on every browser. - Check

### Features

#### Dark Mode Toggle
* Feature is expected to change colour palette and remember the selected one on future visits.
  * Clicked on dark mode toggle and refreshed the page. It successfully keeps the changes - Check
 ![responsive-design](/assets/images/darkmode-testing.jpg)

#### Tabs
* Feature is expected to shift div content when tabs are active.
  * Clicked every tab in Our Products section. Worked as expected. - Check
 ![responsive-design](/assets/images/tabs-testing.jpg)

#### Google Maps API
* Feature is expected to show a map over Nord-Holland, The Netherlands, with markers signaling 3 locations.
  * Show on map buttons fully functional. - Check
  * Phone link fully triggers call on browser. -Check
  * Email (contact) link triggers mail services on browser. -Check
  * Map renders properly and shows all markers. - Check
 ![responsive-design](/assets/images/googlemaps-testing.jpg)

#### Modal Contact Form
* Feature is expected to pop up and cover the screen fully with a contact form. Can be dismissed by clicking outside the form's div.
  * Clicked on contact buttons. Form pops-up as expected. Clicked outside div, form closed as expected. - Check
* Feature is expected to receive correct input information on every field.
  * Form won't allow empty fields, pop-up message warns user about it. Form element validation is fully functional. - Check
 ![responsive-design](/assets/images/formvalidation-testing.jpg)
* Feature alerts user about message sent status.
  * Filled and submitted form for testing. Alert pops-up declaring a successful operation. - Check
 ![responsive-design](/assets/images/formalert-testing.jpg)

#### emailJS
* Feature is expected to send form information to a mailbox through emailJS API.
  * Filled and submitted form for testing. Email received in mailbox. - Check
 ![responsive-design](/assets/images/email1-testing.jpg)
* Feature is expected to send a confirmation email to the user.
  * Filled and submitted form for testing. Email received in personal mailbox. - Check
 ![responsive-design](/assets/images/email2-testing.jpg)




