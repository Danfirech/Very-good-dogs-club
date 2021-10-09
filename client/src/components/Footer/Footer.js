import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import { Card } from "react-bootstrap";

const Footer = () => {
  const styles = {
    jazz: {
      background: "#9da2ae",
      color: "white",
      textAlign: "center",
      padding: 10,
      bottom: 25,
      top: 25,
      fontFamily: "Patrick Hand, cursive",
    },
  };

  const location = useLocation();
  const history = useHistory();

  return (
    <div>
      <br></br>
      <div container>
        <Card style={styles.jazz}>
          <Card.Body style={styles.jazz}>
            <footer>
              <p>
                “Every snack you make, every meal you bake, every bite you
                take…I’ll be watching you.” - Unknown"
              </p>
              <h5 className="blockquote-footer">
                Someone famous from{" "}
                <cite title="Source Title">The internet</cite>
              </h5>

              <ul
                style={{
                  display: "inline-block",
                  color: "white",
                  fontFamily: "Patrick Hand, cursive",
                }}
              >
                Natalie Scott
              </ul>
              <ul
                style={{
                  display: "inline-block",
                  color: "white",
                  fontFamily: "Patrick Hand, cursive",
                }}
              >
                Daniel Possehl{" "}
              </ul>
              <ul
                style={{
                  display: "inline-block",
                  color: "white",
                  fontFamily: "Patrick Hand, cursive",
                }}
              >
                Stephanie Johansson
              </ul>
              <ul
                style={{
                  display: "inline-block",
                  color: "white",
                  fontFamily: "Patrick Hand, cursive",
                }}
              >
                K'trina Apodaca
              </ul>
              {location.pathname !== "/" && (
                <button
                  className="btn btn-dark mb-3"
                  onClick={() => history.goBack()}
                >
                  &larr; Go Back
                </button>
              )}
            </footer>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Footer;
