// 千分符
const toMillesimal = (val) => {
    return (val/1).toLocaleString()
  };
  
  //小数，转百分百
  const toRatio = (val) => {
    return  Number(val * 100).toFixed(2) + '%'
  };
  //console.log('toRatio',toRatio)
  export {  toMillesimal,  toRatio   }
    
   

