function Card({title, description}) {
    return(
   <>
   <div style={{display:"flex", flexDirection:'column', gap:'0px', border:'1px solid white', marginBottom:'5px', borderRadius:'10px'}}>
   <h2>{title}</h2>
   <p>{description}</p>
   </div>
   </>
    );
}

export default Card;