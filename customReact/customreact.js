function customRender(reactElement, mainContainer) {
    const domElement = document.createElement(reactElement.type);

    domElement.innerHTML = reactElement.children;
    domElement.setAttribute('href', reactElement.props.href);
    domElement.setAttribute('target', reactElement.props.target);

    mainContainer.appendChild(domElement);
}

const reactElement = {
    type: 'a',  // Corrected: Removed the space before 'a'
    props: {
        href: 'https://google.com',  // Corrected: Changed comma to dot in URL
        target: '_blank'
    },
    children: 'Click me to visit google'  // No need for extra space at the beginning
};

const mainContainer = document.querySelector('#root');

customRender(reactElement, mainContainer);
