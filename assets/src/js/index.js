import React from "react";
import ReactDom from "react-dom";
import App from "./containers/App";

class App extends React.Component {
    render () {
        return (
            <h1>Django + React + webpack + Babel = Awesome App</h1>
        )
    }
}

ReactDom.render(<App />, document.getElementById('react-app'))


//TODO: AONDE PAREI Agora podemos adicionar nossa primeira folha de estilos e importá-la no Javascript.

// $ mkdir assets/src/scss
// $ touch assets/src/scss/index.scss assets/src/scss/title.scss