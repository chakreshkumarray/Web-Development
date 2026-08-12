
function customRender(reactElement, container) {

    const domElement = document.createElement(reactElement.type);

    for (const prop in reactElement.props) {

        if (prop === "children") {
            domElement.innerHTML = reactElement.props[prop];
        } else {
            domElement.setAttribute(
                prop,
                reactElement.props[prop]
            );
        }
    }

    container.appendChild(domElement);
}


const reactElement = {
    type: "a",

    props: {
        href: "https://www.google.com",
        target: "_blank",
        children: "Click me to visit Google"
    }
};


const mainContainer = document.querySelector("#root");

customRender(reactElement, mainContainer);