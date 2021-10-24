import React from "react";

const Button = ({onclick}) => {
    return(
        <button onClick={onclick} className="button">
            <Button>A</Button>
        </button>

    );
}

  
export default Button;