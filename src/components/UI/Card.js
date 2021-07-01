import './Card.css'

export const Card  = (props) =>{
    const classes = 'card ' + props.className;
    return <div className = {classes}>{props.children}</div> 
    {/* props.children is a special prop reserved Name and the value for this special childrenprop will always be the content between opening and closing tag  */}

}