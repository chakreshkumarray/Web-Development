function Random(){

  let number = Math.random() * 100;

  return <div>
    <h1>Random number is : {number}</h1>
  </div>
}

export default Random;