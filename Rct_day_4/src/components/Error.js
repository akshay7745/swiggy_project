import { useRouteError } from "react-router-dom";

const Error = () => {
  //   const err = useRouteError();
  const { data, error, status, statusText } = useRouteError();
  //data,error,status,statusText
//   console.log(err.statusText);
  return (
    <>
      <h1>Oops!!</h1>
      <h2>Something went wrong</h2>
      <h3>{statusText}</h3>
      <h4>{status}</h4>
      <h4>{data}</h4>
    </>
  );
};

export default Error;
