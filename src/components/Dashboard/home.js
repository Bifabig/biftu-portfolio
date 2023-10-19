import { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { addDoc, collection } from 'firebase/firestore';
import { auth, storage, db } from '../../firebase';

const Home = () => {
  const form = useRef();
  const [showModal, setShowModal] = useState(false);
  const [modalText, setModalText] = useState();

  const submitPortfolio = (e) => {
    e.preventDefault();
    const name = form.current[0]?.value;
    const description = form.current[1]?.value;
    const sourceUrl = form.current[2]?.value;
    const liveUrl = form.current[3]?.value;
    const image = form.current[4]?.files[0];

    const storageRef = ref(storage, `portfolio/${image.name}`);

    const savePortfolio = async (portfolio) => {
      try {
        await addDoc(collection(db, 'portfolio'), portfolio);
        setShowModal(true);
        setModalText('Portfolio added successfully');
      } catch (error) {
        setShowModal(true);
        setModalText('Failed to add portfolio');
      }
    };

    uploadBytes(storageRef, image).then(
      (snapshot) => {
        getDownloadURL(snapshot.ref).then(
          (downloadUrl) => {
            savePortfolio({
              name,
              description,
              sourceUrl,
              liveUrl,
              image: downloadUrl,
            });
          },
          (error) => {
            setShowModal(true);
            setModalText(`Upload Failed ${error}`);
            savePortfolio({
              name,
              description,
              sourceUrl,
              liveUrl,
              image: null,
            });
          },
        );
      },
      (error) => {
        setShowModal(true);
        setModalText(`Upload Failed ${error}`);
        savePortfolio({
          name,
          description,
          sourceUrl,
          liveUrl,
          image: null,
        });
      },
    );
  };

  const handleClose = () => setShowModal(false);

  return (
    <div className="dashboard">
      <div>
        {showModal ? (
          <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Portfolio</Modal.Title>
            </Modal.Header>
            <Modal.Body>{modalText}</Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        ) : (
          <form ref={form} onSubmit={submitPortfolio}>
            <p>
              <input type="text" placeholder="Name" />
            </p>
            <p>
              <textarea placeholder="Description" />
            </p>
            <p>
              <input type="text" placeholder="Source_Url" />
            </p>
            <p>
              <input type="text" placeholder="Live_Url" />
            </p>
            <p>
              <input type="file" placeholder="Image" />
            </p>
            <button type="submit">Submit</button>
            <button onClick={() => auth.signOut()} type="submit">
              Sign out
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Home;
