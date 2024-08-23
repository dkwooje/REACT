export default  function CoreConcept(ppp){
    return(
      <li>
        <img src={ppp.image} alt={ppp.title} />
        <h3>{ppp.title}</h3>
        <p>{ppp.description}</p>
      </li>
    )
  }