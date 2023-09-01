import "./styles.scss";

export default function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="footer-wrapper-container">
        <hr />
        <div className="footer-container">
          <p>
            PLEASE REMEMBER to be the peace that you wish to manifest. Be well!
          </p>
          <p>
            EarthSave … May all be fed, may all be healed, and may all be loved.
          </p>
          <p>
            E-mail us at{" "}
            <span>
              <a href="mailto:Baltimore@earthsave.org">
                Baltimore@earthsave.org
              </a>
            </span>
            . And please visit the EarthSave International website{" "}
            <a id="email-underline" href="mailto:https://www.earthsave.org">
              Earthsave
            </a>{" "}
            . You can always receive updated dinner information by calling
            410-252-3043.
          </p>
        </div>
      </div>
    </footer>
  );
}
