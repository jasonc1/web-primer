import React, {useState} from 'react';
import './Main.style.scss';

export const Main = () => {
  const [showModal, setShowModal] = useState(false);

  const handleDelete = () => {
    setShowModal(true);
  }

  const destructiveAction = () => new Promise<void>((res, rej) => {
    setTimeout(() => {
      alert('Deleted')
      // throw new Error("testing")
      // rej("testing");
      res()
    }, 1000)
  })

  return (
    <div className="row container main">
      {/* <div className="cols twelve">Main app container</div> */}
      <button className="cols twelve button__delete" onClick={handleDelete}>Delete</button>
      {showModal ? <Modal setShowModal={setShowModal} handleYes={destructiveAction}/> : undefined}
    </div>
  );
};

export default Main;


export const Modal = (props) => {
  const [isLoading, setisLoading] = useState(false);

  const handleButtonYes = async() => {
    try {
      setisLoading(true)
      await props.handleYes();
      // if delete succeeds
      setisLoading(false);
      closeModal();
    } catch (e) {    //if delete fails, reset loading state, keep modal open
      setisLoading(false);
      console.log(e);
    }
  }

  const closeModal = () => {
    props.setShowModal(false);
  }

  const loading = <div>i'm loading</div>
  const dialogue =  <><h1>Are you sure?</h1>
  <button className="cols twelve button__yes" onClick={handleButtonYes} >Yes</button>
  <button className="cols twelve button__no" onClick={closeModal}  >No</button></>



  return <div className="modal">
    {isLoading ? loading : dialogue}
  </div>
}
