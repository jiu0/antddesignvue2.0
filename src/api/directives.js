import {addClass, removeClass, hasClass} from '@/api/dom'
import  '../../static/loading.gif'
//require('../../static/loading.gif')
// /static/img/loading.7471704.gif
//暂无数据
function nodata() {
    return {
      bind(el) {
            var load = `
                <div class="__loading">
                    <div class="GIF"><img style="position:absolute;top:50%;left:50%;width:40px;height:40px;border-radius:4px;margin-left:-20px;margin-top:-20px;" src="/static/img/loading.7471704.gif"/></div>
                </div>
                `;
            el.style.background = "#fff";
            //el.style.position = "relative"
            var div = document.createElement('div');
            div.innerHTML = load;
            div.className = "global_nodata";
            //div.style.display = "none"
            el.appendChild(div)
      },
      update(el, binding) {
            // el.child()
            //console.log(binding.value)
            if(binding.value) {
                el.getElementsByClassName('global_nodata')[0].style.display = 'block'
            } else {
                el.getElementsByClassName('global_nodata')[0].style.display = 'none'
            }
        }
     }
  }
 //loading
function loading() {
        return {     // b不是vue文件 不能用指令
            bind(el, binding) {
                var load = `
                    <div class="__loading">
                        <div class="GIF"><img style="position:absolute;top:50%;left:50%;width:40px;height:40px;border-radius:4px;margin-left:-20px;margin-top:-20px;" src="/static/img/loading.7471704.gif"/></div>
                    </div>
                    `;
                //var value = binding.value;
                var loadDiv = document.createElement('div');
                loadDiv.innerHTML = load;
                addClass(loadDiv, '__loading_box');
                el.style.position = 'relative';
                el.appendChild(loadDiv)
            },
            update(el, binding) {
                var chiden = el.getElementsByClassName('__loading_box')[0];
                if (binding.value) {
                    chiden.style.display = 'block';
                } else {
                    chiden.style.display = 'none'
                }
            }
      }
  }
  export { nodata, loading }


