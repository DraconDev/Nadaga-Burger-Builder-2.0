// import React, { useState, useEffect } from "react";
// // import PropTypes from "prop-types";
// import Modal from "../../components/UI/Modal/Modal";
// import Auxiliary from "../Auxiliary/Auxiliary";

// const WithErrorHandler = (WrappedComponent, axios) => {
//   const [state, setState] = useState({ error: null });

//   useEffect(() => {
//     axios.inteceptors.request.use((req) => {
//       setState({ error: null });
//     });
//     axios.inteceptors.response.use(null, (error) => {
//       setState({ error: error });
//     });
//   }, []);

//   const errorConfirmedHandler = (params) => {
//     setState({ error: null });
//   };

//   return (props) => {
//     return (
//       <Auxiliary>
//         <Modal show={state.error} clicked={errorConfirmedHandler}>
//           {state.error ? state.error.message : null}
//         </Modal>
//         <WrappedComponent {...props} />
//       </Auxiliary>
//     );
//   };
// };

// export default WithErrorHandler;

import React, { useState, useEffect } from "react";
// import PropTypes from "prop-types";
// import Modal from "../../components/UI/Modal/Modal";
// import Auxiliary from "../Auxiliary/Auxiliary";

const With = (WrappedComponent, axios) => {
  const [state, setState] = useState({ error: null });

  // useEffect(() => {
  //   // axios.inteceptors.request.use((req) => {
  //   //   setState({ error: null });
  //   // });
  //   // axios.inteceptors.response.use(null, (error) => {
  //   //   setState({ error: error });
  //   // });
  // }, []);

  // const errorConfirmedHandler = (params) => {
  //   setState({ error: null });
  // };

  return (props) => {
  //   return (
  //     <Auxiliary>
  //       <Modal show={state.error} clicked={errorConfirmedHandler}>
  //         {state.error ? state.error.message : null}
  //       </Modal>
  //       <WrappedComponent {...props} />
  //     </Auxiliary>
  //   );
  };
};

export default With;
