import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import { Card } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  const styles = {
    jazz: {
      background: "#A4A3A1",
      color: "#293242",
      textAlign: "center",
      padding: 10,
      bottom: 10,
      top: 25,
      position: "sticky",
      fontFamily: "Josefin Sans, sans-serif",
    },
  };

  const location = useLocation();
  const history = useHistory();

  return (
    <div>
      <br></br>
      <div>
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
                  color: "#293242",
                  fontFamily: "Josefin Sans, sans-serif",
                }}
              >
                Natalie Scott
              </ul>
              <ul
                style={{
                  display: "inline-block",
                  color: "#293242",
                  fontFamily: "Josefin Sans, sans-serif",
                }}
              >
                <i class="fas fa-paw"></i>
                Daniel Possehl{" "}
              </ul>
              <ul
                style={{
                  display: "inline-block",
                  color: "#293242",
                  fontFamily: "Josefin Sans, sans-serif",
                }}
              >
                Stephanie Johansson
              </ul>
              <ul
                style={{
                  display: "inline-block",
                  color: "#293242",
                  fontFamily: "Josefin Sans, sans-serif",
                }}
              >
                K'trina Apodaca
              </ul>
            </footer>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Footer;
