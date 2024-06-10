const useViewCounter = (views) =>{
    
    if(views<1000){
        views = views + " views";
    }
    else if(views<1000000){
        views = Math.floor(views/1000) + "K views"
    }
    else if(views>1000000){
        views = Math.floor(views/1000000) + "M views"
    }

    
    return views;
}

export default useViewCounter;