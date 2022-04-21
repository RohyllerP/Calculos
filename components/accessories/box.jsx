
export default function Box(props) {
    return (
        <div className="box-div-big">
            <div className="box-div-titulo">
                <h3>{props.title}</h3>
            </div>
            <div className="box-div-informacion">
                <div>
                    <p>{props.informacion}</p>
                </div>
                <div>
                    <p>{props.informacion2}</p>
                </div>r
                <div>
                    <p>{props.informacion3}</p>
                </div>
            </div>
            <div className="box-div-otra-informacion">
                <p>{props.otraInfo}</p>
            </div>
        </div>
    )
}