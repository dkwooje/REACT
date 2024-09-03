
export default function Shop({children}) {   //App ->Shop[product] 에서 App ->Shop->product 
  return (  
    <section id="shop">
      <h2>Elegant Clothing For Everyone</h2>

      <ul id="products">
        {children}
      </ul>
    </section>
  );
}
