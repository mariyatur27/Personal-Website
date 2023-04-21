import React from 'react'

export default function Hero() {
    const words = document.getElementsByClassName('wordflow-ele');
    let index = 0;

    const current = n => {
        for(var i = 0; i < words.length; i++){
            words[i].classList.remove('active');
        }
        words[n].classList.add('active');
    }

    const next = () => {
        if (index == words.length-1){
            index = 0;
            current(index);
        }else{
            index++;
            current(index);
        }
    }

    setInterval(next, 2500)
    
  return (
    <section id='hero'>
        <div id='main-content'>
            <span style={{background:'white'}}>Hello. My name is Mariya. </span><br></br>
            <span style={{width: "60%"}} id='hero-wordflow' className='glued'>
                <span style={{background: 'white'}}>I can </span>
                <span className='wordflow-ele active'>Code.</span>
                <span className='wordflow-ele'>Design.</span>
                <span className='wordflow-ele'>Create.</span>
                <span className='wordflow-ele'>Solve.</span>
                <span className='wordflow-ele'>Be Fun.</span>
            </span>
        </div>
    </section>
  )
}
