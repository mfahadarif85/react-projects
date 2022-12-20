import { useState } from "react";

import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
  };
  const actionBar = (
    <Button onClick={handleClose} primary>
      I Accept
    </Button>
  );
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept!</p>{" "}
    </Modal>
  );
  return (
    <div>
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, ea.
        Reprehenderit voluptas facere quibusdam alias, eveniet ea modi magnam
        voluptatibus sint asperiores necessitatibus ipsum ducimus! Iste labore
        eius corporis et?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, ea.
        Reprehenderit voluptas facere quibusdam alias, eveniet ea modi magnam
        voluptatibus sint asperiores necessitatibus ipsum ducimus! Iste labore
        eius corporis et?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, ea.
        Reprehenderit voluptas facere quibusdam alias, eveniet ea modi magnam
        voluptatibus sint asperiores necessitatibus ipsum ducimus! Iste labore
        eius corporis et?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, ea.
        Reprehenderit voluptas facere quibusdam alias, eveniet ea modi magnam
        voluptatibus sint asperiores necessitatibus ipsum ducimus! Iste labore
        eius corporis et?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, ea.
        Reprehenderit voluptas facere quibusdam alias, eveniet ea modi magnam
        voluptatibus sint asperiores necessitatibus ipsum ducimus! Iste labore
        eius corporis et?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, ea.
        Reprehenderit voluptas facere quibusdam alias, eveniet ea modi magnam
        voluptatibus sint asperiores necessitatibus ipsum ducimus! Iste labore
        eius corporis et?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, ea.
        Reprehenderit voluptas facere quibusdam alias, eveniet ea modi magnam
        voluptatibus sint asperiores necessitatibus ipsum ducimus! Iste labore
        eius corporis et?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, ea.
        Reprehenderit voluptas facere quibusdam alias, eveniet ea modi magnam
        voluptatibus sint asperiores necessitatibus ipsum ducimus! Iste labore
        eius corporis et?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, ea.
        Reprehenderit voluptas facere quibusdam alias, eveniet ea modi magnam
        voluptatibus sint asperiores necessitatibus ipsum ducimus! Iste labore
        eius corporis et?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, ea.
        Reprehenderit voluptas facere quibusdam alias, eveniet ea modi magnam
        voluptatibus sint asperiores necessitatibus ipsum ducimus! Iste labore
        eius corporis et?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, ea.
        Reprehenderit voluptas facere quibusdam alias, eveniet ea modi magnam
        voluptatibus sint asperiores necessitatibus ipsum ducimus! Iste labore
        eius corporis et?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, ea.
        Reprehenderit voluptas facere quibusdam alias, eveniet ea modi magnam
        voluptatibus sint asperiores necessitatibus ipsum ducimus! Iste labore
        eius corporis et?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, ea.
        Reprehenderit voluptas facere quibusdam alias, eveniet ea modi magnam
        voluptatibus sint asperiores necessitatibus ipsum ducimus! Iste labore
        eius corporis et?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, ea.
        Reprehenderit voluptas facere quibusdam alias, eveniet ea modi magnam
        voluptatibus sint asperiores necessitatibus ipsum ducimus! Iste labore
        eius corporis et?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, ea.
        Reprehenderit voluptas facere quibusdam alias, eveniet ea modi magnam
        voluptatibus sint asperiores necessitatibus ipsum ducimus! Iste labore
        eius corporis et?
      </p>
    </div>
  );
}

export default ModalPage;
