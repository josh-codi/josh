import React from 'react'

function Button({text, className, style, link}) {
    const styles = {
        ...style
    }
    if(link){
      return <a href={link} className={`sm:w-[130px] h-[40px] sm:h-[50px] rounded-lg sm:text-[1rem] text-[0.8rem] px-3 flex j-c-c border-2 border-theme border-solid text-theme hover:text-white hover:bg-theme text-semibold cursor-pointer ${className}`} style={{...styles}}>
          {text}
      </a>
    }
    return (
      <button data-testid='button-1' className={`sm:w-[130px] h-[40px] sm:h-[50px] rounded-lg sm:text-[1rem] text-[0.8rem] px-3 flex j-c-c border-2 border-theme border-solid text-theme hover:text-white hover:bg-theme text-semibold cursor-pointer ${className}`} style={{...styles}}>
          {text}
          button
      </button>
    )
}

export default Button