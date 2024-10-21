
function Welcome(props) {
    return (
        <h1>
            hello, {props.name}
            <span>
                  {props.score > 60 ? "good work" : "you are old"}
            </span>
        </h1>);
  }
  
  export default Welcome;