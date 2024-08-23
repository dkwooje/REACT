export default function Section({title, children, ...props}){ // {id} , section id={id}
  return (
    <section {...props} > 
      <h2>{title}</h2>
      {children}
    </section>
  );
}