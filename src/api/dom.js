  //判断一个元素是否有class样式
  function hasClass( elements,cName ){
    return !!elements.className.match( new RegExp( "(\\s|^)" + cName + "(\\s|$)") ); // ( \\s|^ ) 判断前面是否有空格 （\\s | $ ）判断后面是否有空格 两个感叹号为转换为布尔值 以方便做判断
  }
  function addClass( elements,cName ){
    elements.className += " " + cName;
  }
  function removeClass( elements,cName ){
    if( hasClass( elements,cName ) ){
      elements.className = elements.className.replace( new RegExp( "(\\s|^)" + cName + "(\\s|$)", 'g' )," " ); // replace方法是替换
    }
  }
  export  {  hasClass, addClass, removeClass }
  
