
function Errors({  errors }) {
  return (
    <>
                <div style={{margin: "-20px 0px 10px 0px"}}>
                {
                  errors && <span style={{color: "red"}}>{errors}</span>
                }
                </div>
    </>
  );
}

export default Errors;
