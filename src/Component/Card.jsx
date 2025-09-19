import "./Card.css"

const Card = ({post}) => {
    return(
        <>
        <div className="card">
            <h2>{post.title}</h2>
           <img src={`https://picsum.photos/200/150?random=${post.id}`} alt="post" />
            <p>{post.body}</p>
        </div>
        </>
    );


}
export default Card;

