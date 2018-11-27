class AppSample extends HTMLElement {
    constructor () {
        super();
        console.log("Creado elemento");
        /*
            this.attachShadow({mode: 'open'}).innerHTML = "<h1>HOLA PEPE LUI</h1>";
        */
        const oImport = document.querySelector("link[rel='import']");
        this.attachShadow({mode: 'open'}).innerHTML = oImport.querySelector("#template1").innerHTML;
    }
}
customElements.define("app-sample", AppSample);

