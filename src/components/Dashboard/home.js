import { useRef } from 'react';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { addDoc, collection } from 'firebase/firestore';
import { auth, storage, db } from '../../firebase';

const Home = () => {
  const form = useRef();

  const submitPortfolio = (e) => {
    e.preventDefault();
    const name = form.current[0]?.value;
    const description = form.current[1]?.value;
    const url = form.current[2]?.value;
    const image = form.current[3]?.files[0];

    const storageRef = ref(storage, `portfolio/${image.name}`);

    const savePortfolio = async (portfolio) => {
      try {
        await addDoc(collection(db, 'portfolio'), portfolio);
        window.location.reload(false);
      } catch (error) {
        alert('Failed to add portfolio');
      }
    };

    uploadBytes(storageRef, image).then(
      (snapshot) => {
        getDownloadURL(snapshot.ref).then(
          (downloadUrl) => {
            savePortfolio({
              name,
              description,
              url,
              image: downloadUrl,
            });
          },
          (error) => {
            console.log(error);
            savePortfolio({
              name,
              description,
              url,
              image: null,
            });
          },
        );
      },
      (error) => {
        console.log(error);
        savePortfolio({
          name,
          description,
          url,
          image: null,
        });
      },
    );
  };

  return (
    <div className="dashboard">
      <div>
        <form ref={form} onSubmit={submitPortfolio}>
          <p>
            <input type="text" placeholder="Name" />
          </p>
          <p>
            <textarea placeholder="Description" />
          </p>
          <p>
            <input type="text" placeholder="Url" />
          </p>
          <p>
            <input type="file" placeholder="Image" />
          </p>
          <button type="submit">Submit</button>
          <button onClick={() => auth.signOut()} type="submit">
            Sign out
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
