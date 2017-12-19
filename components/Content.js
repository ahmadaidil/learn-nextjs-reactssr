export default (props) => (
  <div>
    <h1>{props.name}</h1>
    <p>{props.summary.replace(/<[/]?p>/g, '')}</p>
    <img src={props.img} />
  </div>
)
