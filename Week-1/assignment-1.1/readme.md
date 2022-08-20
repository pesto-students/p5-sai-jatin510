# Assignment 1.1

## When the user enters a URL in the browser

When we enters a URL (Uniform Resource Locator) and proceed further. Browser checks cache for DNS entry to find the corresponding IP address of website. Every domain has the IP address associated with it. E.g. : https://google.com have DNS lookup of 142.250.193.14.

If not found in cache, ISP’s (Internet Service Provider) DNS server initiates a DNS query to find IP address of server that hosts the domain name.

The requests are sent using small data packets that contain information content of request and IP address it is destined for. Then the browser initiates a TCP (Transfer Control Protocol) connection with the server using synchronize(SYN) and acknowledge(ACK) messages. The browser sends an HTTP request to the web server. GET or POST request.

Server on the host computer handles that request and sends back a response. It assembles a response in some format like JSON, XML and HTML.
The the server sends out an HTTP response along with the status of response. The response which we get from server is then shown in the display of the browser.

### What is the main functionality of the browser

A web browser takes you anywhere on the internet. It retrieves information from other parts of the web and displays it on your desktop or mobile application.

When the user enters any URL (Uniform Resource Locator) into the address bar of the browser. The browser fetches the data from that particular url and displays it on your screen.

---

### High level components of a browser

The browsers main components are:

![Broswer components](./screenshots/browser-components.avif)

#### 1. The user interface:

It includes the address bar, different buttons, bookmark menu, etc. Every part of the browser expect the window where you see the requested page.

#### 2. The browser engine :

It sync actions between the UI and the rendering engine.

#### 3. The rendering engine :

It is responsible for displaying the requested content. The rendering engine parses the HTML and CSS, and displays the parsed content on the screen.

#### 4. Networking :

The network call such as HTTP/HTTPS requests is done by browser.

#### 5. Javascript Interpreter :

It is responsible for parsing and executing JavaScript.

#### 6. Data Storage :

This is the persistance layer. The browser stores all sort of data locally, such as cookies. Browsers also support storage mechanisms such as localStorage, IndexedDB, WebSQL and FileSystem.

---

### Rendering engine and its use.

The rendering engine is responsible for displaying the contents of the webpage on our screen.

Different browsers use different rendering engines, such as Firefox uses Gecko, Safari uses Webkit, Chrome use Blink.

#### The four basic steps include :

![Rendering engine basic flow](./screenshots/renderingEngine.avif)

The requested HTML page is parsed in chunks, including the external CSS files and in style elements, by the rendering engine.
The HTML elements are then converted into DOM nodes to form a “content tree” or “DOM tree.” Simultaneously, the browser also creates a render tree. This tree includes both the styling information as well as the visual instructions that define the order in which the elements will be displayed. The render tree ensures that the content is displayed in the desired order. Further, the render tree goes through the layout process. When a render tree is created, the position or size values are not assigned. The entire process of calculating values for evaluating the desired position is called a layout process. In this process, every node is assigned the exact coordinates. This ensures that every node appears at an accurate position on the screen. The final step is to paint the screen, wherein the render tree is traversed, and the renderer’s paint() method is invoked, which paints each node on the screen using the UI backend layer.

---

### Parsers

Parsers parse the file and create a related data. Parsing a document means translating it to a structure the code can use. The result of parsing is usually a tree of nodes that represent the structure of the document. This is called a parse tree or a syntax tree.

---

### Script Processors

JavaScript is an interpreted language. This means we do not have to compile the JavaScript source code and convert it into machine code. An interpreter can take the raw JavaScript code and run it for you, line by line.

EcmaScript specification tells how JavaScript should be implemented by the browser so that a JavaScript program runs exactly the same in all the browsers, but it does not tell how JavaScript should run inside these browsers. It is up to the browser vendor to decide.

---

### Order of script processing

The web browser works synchronously. The code is executed from top to bottom. As soon as the parser find `Script` tag. It runs the Javascript in our program. If the script is external file from internet. It is fetched from the network. We can also use `defer` attribute to the script. In that case our Javascript is ran after the whole document is parsed.

---

### Layout and painting

When the renderer is created and added to the tree, it does not have a position and size. Calculating these values is called layout or reflow.

Layouts are processed, left-to-right and top-to-bottom through the document. Layout is a recursive process. It begins at the root renderer, which corresponds to the `<HTML>` element of the HTML document.

In the painting stage, the render tree is traversed and the renderer's "paint()" method is called to display content on the screen. Painting uses the UI infrastructure component.
