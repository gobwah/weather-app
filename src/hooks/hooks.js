import { useState, useEffect } from "react";

export const useFetch = (url) => {
    const [data, setdata] = useState(null);
    const [loading, setloading] = useState(true);
    const [error, seterror] = useState("");
    
    useEffect(() => {
        fetch(url)
        .then((res) => res.json())
        .then((json) => {
            setdata(json)
            setloading(false)
        })
        .catch((err) => seterror(err));
    }, [url]);
    
    return { data, loading, error };
};

function preloadImage (src) {
    return new Promise((resolve, reject) => {
        const img = new Image()
        img.onload = function() {
            resolve(img)
        }
        img.onerror = img.onabort = function() {
            reject(src)
        }
        img.src = src
    })
}

export function useImagePreloader(imageList) {
    const [imagesPreloaded, setImagesPreloaded] = useState(false)
    
    useEffect(() => {
        let isCancelled = false
        
        async function effect() {
            console.log('PRELOAD')
            
            if (isCancelled) {
                return
            }
            
            const imagesPromiseList = []
            for (const i of imageList) {
                imagesPromiseList.push(preloadImage(i))
            }
            
            await Promise.all(imagesPromiseList)
            
            if (isCancelled) {
                return
            }
            
            setImagesPreloaded(true)
        }
        
        effect()
        
        return () => {
            isCancelled = true
        }
    }, [imageList])
    
    return { imagesPreloaded }
}