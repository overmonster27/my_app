function Component (props){
let {name, age, image} = props

return(
<div>
    <h2>{name}</h2>
    <p>{age}</p>
    <img src={image} alt={name}/>
</div>)
}

export default Component