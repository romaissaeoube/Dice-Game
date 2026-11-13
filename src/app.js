
import React from "react";

export default class Dice extends React.Component {
  constructor(props) {
    super(props);
    this.state = { face: null, compteur: 0, fin: false };
  }

  jouer() {
    const valeur = Math.floor(Math.random() * 6) + 1;

    this.setState((prev) => ({
      face: valeur,
      compteur: prev.compteur + 1,
      fin: valeur === this.props.cache,
    }));
  }

  getImage() {
    if (this.state.face === null) {
      return "images/vide.PNG";
    }
    return "images/face" + this.state.face + ".PNG";
  }

  initialiser() {
    this.setState({ face: null, compteur: 0, fin: false });
  }

  render() {
    const styleImage = {
      width: "110px",
      height: "110px",
      objectFit: "contain"
    };

    return (
      <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light py-5">

        <div className="card shadow-lg border-0 rounded-4 text-center p-4"
             style={{ maxWidth: "450px", width: "90%" }}>

          <div className="card-body">

            <h1 className="fw-bold text-primary mb-2">
              🎲 Jeu de Dé
            </h1>

            <p className="text-secondary mb-4">
              Devinez la face cachée !
            </p>

            <div className="bg-light rounded-4 p-3 mb-4">

              <h5 className="text-secondary">
                Face obtenue
              </h5>

              <h2 className="fw-bold text-primary">
                {this.state.face === null ? "?" : this.state.face}
              </h2>

              <img
                src={this.getImage()}
                style={styleImage}
                alt="face du dé"
              />

            </div>

            <div className="alert alert-primary rounded-3">
              <strong>Nombre d'essais :</strong>
              <span className="fs-4 fw-bold ms-2">
                {this.state.compteur}
              </span>
            </div>

            {!this.state.fin && (
              <button
                className="btn btn-primary btn-lg w-100 rounded-pill fw-bold"
                onClick={() => this.jouer()}
              >
                🎲 Jouer
              </button>
            )}

            {this.state.fin && (
              <div>
                <div className="alert alert-success rounded-3">
                  <h4 className="fw-bold">🎉 Bravo !</h4>
                  <p className="mb-0">
                    Vous avez trouvé la face cachée !
                  </p>
                </div>

                <button
                  className="btn btn-success btn-lg w-100 rounded-pill fw-bold"
                  onClick={() => this.initialiser()}
                >
                  🔄 Initialiser
                </button>
              </div>
            )}

          </div>
        </div>
      </div>
    );
  }
}
