export default function Card(props) {
    return (
        <a href={props.item.link} target="_blank" rel="noopener noreferrer" className="card">                
            <img src={props.item.coverImg} className="crdimg" alt={props.item.title} />
            <div className="details">
                <div className="title">
                    <p style={{ fontFamily: "Michroma" }} className="prtitle">{props.item.title}</p>
                </div>
            </div>
        </a>
    );
}