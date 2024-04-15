let h1=document.createElement('h1');
h1.classList.add('d-flex','justify-content-center','align-items-center','mt-5')
document.body.append(h1)

let callfunction=(callbackfunction) =>{
 h1.innerText="Countdown begins";

  callbackfunction();
}
let callbackfunction=()=> {
  setTimeout(()=>{
    h1.innerText='10'
    setTimeout(()=>{
        h1.innerText='9'
        setTimeout(()=>{
            h1.innerText='8'
            setTimeout(()=>{
                h1.innerText='7'
                setTimeout(()=>{
                    h1.innerText='6'
                    setTimeout(()=>{
                        h1.innerText='5'
                        setTimeout(()=>{
                            h1.innerText='4'
                            setTimeout(()=>{
                                h1.innerText='3'
                                setTimeout(()=>{
                                    h1.innerText='2'
                                    setTimeout(()=>{
                                        h1.innerText='1'
                                        setTimeout(()=>{
                                            
                                            let img=document.createElement('img')
                                            img.classList.add('imgstyle')
                                            img.setAttribute('src','./flag.webp')
                                            document.body.append(img)
                                            
                                            h1.innerText='Happy Independence Day'
                                           
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
  },1000)
}
callfunction(callbackfunction);
