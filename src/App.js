import { Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Homepage from "./Pages/Homepage/Homepage";
import Shop from "./Pages/Shop/Shopage";
import Sign from "./Pages/Signingpage/Sign";
import { auth } from "./Firebase/Firebase";
import react from "react";
import { createUserProfile } from "./Firebase/Firebase";

class App extends react.Component {
  constructor() {
    super();
    this.state = { currentuser: null };
  }
  unsubscribe = null;
  componentDidMount() {
    this.unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userref = await createUserProfile(user);
        userref.onSnapshot((snap) => {
          this.setState({
            currentuser: {
              id: snap.id,
              ...snap.data(),
            },
          });
        });
      }

      this.setState({ currentuser: null });
    });
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    return (
      <div>
        <Header currentuser={this.state.currentuser} />
        <Route exact path="/signin" component={Sign} />
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={Shop} />
      </div>
    );
  }
}

export default App;
