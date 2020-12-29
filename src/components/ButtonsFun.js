
const ButtonsFun = () =>{
    const { 
        color,
        content
        // ...Props ask!
      } = this.props;
    return (
        // <button>{this.props.text} </button>
        // <button className={color} {...Props} onClick={() => alert(color)}>
        <button className={color}  >
        {content}
      </button>
    
      
        
    );
  };
  
  
  
  export default ButtonsFun;
  