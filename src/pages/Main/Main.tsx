import React, {useState} from 'react';
import './Main.style.scss';

export const Main = () => {
  const [showModal, setShowModal] = useState(false);
  const [showLoading, setShowLoading] = useState(false);

  const handleDelete = () => {
    setShowModal(true);
  }

  const handleYes = async() => {
    try {
      setShowLoading(true);
      await destructiveAction();
      setShowLoading(false);
      setShowModal(false);
    } catch (e) {
      setShowLoading(false)
    }
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
      {showModal ? <Modal setShowModal={setShowModal} isLoading={showLoading} handleYes={handleYes}/> : undefined}
    </div>
  );
};

export default Main;


export const Modal = (props) => {

  // position modal to be in the center
  // have opacity layer underneath modal
  // esc to close modal
  // check tab order of the modal + buttons within
  // fade in, surface on top z-index1000
  // make sure window behind modal can't be scrolled
  // make modal full screen on mobile. have modal come from bottom to top

  // ========== WHAT WAS DONE IN THE INTERVIEW ==========
  // const [isLoading, setisLoading] = useState(false);

  // const handleButtonYes = async() => {
  //   try {
  //     setisLoading(true)
  //     await props.handleYes();
  //     // if delete succeeds
  //     setisLoading(false);
  //     closeModal();
  //   } catch (e) {    //if delete fails, reset loading state, keep modal open
  //     setisLoading(false);
  //     console.log(e);
  //   }
  // }

  const closeModal = () => {
    props.setShowModal(false);
  }

  const loading = <div>i'm loading</div>
  const dialogue =  <><h1>Are you sure?</h1>
  <button className="cols twelve button__yes" onClick={props.handleYes} >Yes</button>
  <button className="cols twelve button__no" onClick={closeModal} >No</button></>

  return <div aria-role="dialogue" className="modal">
    {props.isLoading ? loading : dialogue}
  </div>
}
