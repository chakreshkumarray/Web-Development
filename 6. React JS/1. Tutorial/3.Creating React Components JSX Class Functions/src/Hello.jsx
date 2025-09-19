function Hello(){

  let myName = "Chakresh"
  let number = 456;
  let fullName = () => {
    return "Chakresh Kumar";
  }
         
  return <div>
    <h3>My name is {myName}</h3>
    <p>Hello this is the future speaking {fullName()}</p>
    <p>Total message received : {number}</p>
  </div>

}

export default Hello;