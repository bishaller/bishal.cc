import "./src/styles/style.scss"

let body = document.body;

export const onInitialClientRender = () => {
    setTimeout(function () {
        document.getElementById("loader").style.cssText = "transform: scaleY(0); color: transparent";
        body.classList.add("loaded");
    }, 1200)
}