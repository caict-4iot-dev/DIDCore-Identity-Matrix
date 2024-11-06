
import type { App } from 'vue';
export default {
    install(app: App) {
        app.directive('lazyload', {
            mounted(el, bindings) { 
                el.src = bindings.value.error
                
                // el - dom元素，bindings - 指令的值
                const observer = new IntersectionObserver(([{ isIntersecting }]) => {
                    
                    if (isIntersecting) {
                        observer.unobserve(el)
                        // 表示绑定的 dom 进入可视区域
                        el.src = bindings.value.url
                        console.log(el)
                        // 图片加载出错时，显示默认图片
                        el.onerror = () => {
                            el.src = bindings.value.error
                        }
                    }
                }, {
                    threshold: 0
                })
                // 监视 dom
                observer.observe(el)
            }
        })
    }
}
