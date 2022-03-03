import { Fab, Action } from "react-tiny-fab";
import "react-tiny-fab/dist/styles.css";
import { faPlus, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export default function FloatButton() {
  return (
    <div>
      <Fab
        mainButtonStyles={{
          backgroundColor: "#3A66FF",
          outline: 'none',
        }}
        style={{ bottom: 0, right: 0 }}
        icon={<FontAwesomeIcon icon={faPlus} />}
        event={"click"}
      >
        <Action text="LinkendIn">
          <a
              href="https://www.linkedin.com/in/iv%C3%A1n-m%C3%A9ndez-rodr%C3%ADguez-43b6b2175/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
              ></FontAwesomeIcon>
            </a>
        </Action>
        <Action text="Instagram">
          <a
              href="https://www.instagram.com/ivandez_dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faInstagram}
              ></FontAwesomeIcon>
            </a>
        </Action>
        <Action text="Github">
          <a
              href="https://github.com/ivandez"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithub}
              ></FontAwesomeIcon>
            </a>
        </Action>
      </Fab>
    </div>
  );
}

